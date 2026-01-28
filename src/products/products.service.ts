import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { PaginationDto } from 'src/common/dtos/pagination.dto';
import { isUUID } from 'class-validator';
import { ProductImage } from './entities';
import { DataSource } from 'typeorm';
import { User } from 'src/auth/entities/user.entity';


@Injectable()
export class ProductsService {

  private readonly logger = new Logger('ProductsService')

  constructor(

    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    @InjectRepository(ProductImage)
    private readonly productImageRepository: Repository<ProductImage>,

    private readonly dataSource: DataSource,


  ){}


  async create(createProductDto: CreateProductDto, user: User) {

    try{

      const { images = [], ...productDetails } = createProductDto;

      const product = this.productRepository.create({
        ...productDetails,
        images: images.map( image => this.productImageRepository.create({ url:image }) ),
        user:user,
      })

      await this.productRepository.save(product);

      return {
        ...product, images
      };

    } catch (error){
      this.handleDBExceptions(error);
    }
    
  }



  async findAll(paginationDto: PaginationDto) {
    const { limit = 100, offset = 0 } = paginationDto;

    const products = await this.productRepository.find({
      take: limit,
      skip: offset,
      relations: {
        images: true
      }
    });
    return products.map (products => ({
      ...products,
      images: products.images?.map( img => img.url)
    }))
  }

  async findOne(term: string) {
    let product: Product | null;

    if (isUUID(term)) {
      product = await this.productRepository.findOneBy({ id: term });
    } else {
      // product = await this.productRepository.findOneBy({ slug: term });
      const queryBuilder = this.productRepository.createQueryBuilder('prod');
      product = await queryBuilder
      .where(`UPPER(title) =:title or slug =:slug`, {
        title: term.toUpperCase(),
        slug: term.toLowerCase()
      })
      .leftJoinAndSelect('prod.images','prodImages')
      .getOne();
    }

    if (!product) {
      throw new NotFoundException(`El producto con el id o slug ${term} no fue encontrado.`);
    }
    return product;
  }

  async findOnePlain (term:string){
    const { images = [], ...rest } = await this.findOne(term);
    return {
      ...rest,
      images: images.map(image => image.url)
    }
  }

  async update(id: string, updateProductDto: UpdateProductDto, user: User) {

    const {images, ...toUpdate} = updateProductDto;

    const product = await this.productRepository.preload({ id:id, ...toUpdate});

    if (!product){
      throw new NotFoundException(`El producto con el id "${id}" no fue encontrado`);
    }

    // Crear query runner 
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try{

      if ( images ) { // Si hay images en la peticion patch
        await queryRunner.manager.delete(ProductImage,{ product: { id } })
        
        product.images = images.map( 
          image => this.productImageRepository.create( { url:image })
        )
      }

      product.user = user; 
      
      await queryRunner.manager.save( product );
      await queryRunner.commitTransaction();
      await queryRunner.release();

      // await this.productRepository.save(product);
    }catch (error){

      await queryRunner.rollbackTransaction();
      await queryRunner.release();

      this.handleDBExceptions(error);
    }

    return this.findOnePlain( id );
  }

  async remove(id: string) {
    const product = await this.findOne(id);
    
    await this.productRepository.remove(product);

    return `El producto con el id "${id}" fue eliminado con exito`;
  }


  private handleDBExceptions(error){
    if (error.code === '23505'){
      throw new BadRequestException(error.detail);
    }
    this.logger.error(error)
    throw new InternalServerErrorException('Ha ocurrido un error interno inesperado. Por favor revisa los logs.')
  }

  async deleteAllProducts(){
    const query = this.productRepository.createQueryBuilder();
    try {
      return await query
      .delete()
      .where({})
      .execute();
    } catch (error){
      this.handleDBExceptions(error);
    }
  }
}
