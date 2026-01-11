import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { PaginationDto } from 'src/common/dtos/pagination.dto';

@Injectable()
export class ProductsService {

  private readonly logger = new Logger('ProductsService')

  constructor(

    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    

  ){}


  async create(createProductDto: CreateProductDto) {

    try{
      const product = this.productRepository.create(createProductDto)

      await this.productRepository.save(product);

    } catch (error){
      this.handleDBExceptions(error);
    }
    
  }



  findAll(paginationDto: PaginationDto) {
    const { limit = 100, offset = 0 } = paginationDto;

    return this.productRepository.find({
      take: limit,
      skip: offset,
      // TODO: Relaciones
    });
  }

  async findOne(id: string) {

    const product = await this.productRepository.findOneBy({id})
    
    if (!product){
      throw new NotFoundException(`El producto con el id ${id} no fue encontrado.`)
    }
    return product;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
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
}
