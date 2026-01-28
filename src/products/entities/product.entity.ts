import { BeforeInsert, BeforeUpdate, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ProductImage } from "./product-image.entity";
import { User } from "src/auth/entities/user.entity";
import { ApiProperty } from "@nestjs/swagger";

@Entity({
    name: 'products'
})
export class Product {

        @ApiProperty({
            example:'f2fec3e8-b05c-433b-97e4-c8afddaa5671',
            description: 'Product ID',
            uniqueItems:true
        })
        @PrimaryGeneratedColumn('uuid')
        id:string;

        @ApiProperty({
            example:'Camisa AnthoFu',
            description:'Product Title',
            uniqueItems:true
        })
        @Column('text', {
            unique: true
        })
        title:string;

        @ApiProperty({
            example:'0',
            description:'Product price',
            uniqueItems:true
        })
        @Column('float', {
            default:0
        })
        price:number;


        @ApiProperty({
            example:'Camisa muy linda hecha de algodon y tiene un logo de zorro color naranja',
            description:'Product description',
            uniqueItems:true
        })
        @Column({
            type:'text',
            nullable:true
        })
        description: string;

        @ApiProperty({
            example:'camisa_anthofu',
            description:'Product slug para SEO',
            uniqueItems:true
        })
        @Column('text', {
            unique: true
        })
        slug:string;
    

        @ApiProperty({
            example:'0',
            description:'Product stock',
            uniqueItems:true
        })
        @Column('int',{
            default: 0
        })
        stock:number;
    
        @ApiProperty({
            example:['M', 'XL', 'S'],
            description:'Product sizes',
            uniqueItems:true
        })
        @Column('text',{
            array:true
        })
        sizes: string[];


        @ApiProperty({
            example:'hombre',
            description:'Genero preferencial del producto',
            uniqueItems:true
        })
        @Column('text')
        gender:string;
        
        @ApiProperty({
            example:['Camiseta'],
            description:'Categorias de producto',
            uniqueItems:true
        })
        @Column('text',{
            array:true,
            default:[]
        })
        tags:string[] 
        

        @OneToMany(
            () => ProductImage, 
            (ProductImage) => ProductImage.product, 
            {cascade:true, eager:true}
        )
        images?: ProductImage[];


        @ManyToOne(
            ()=> User,
            (user)=> user.product,
            {eager:true}
        )
        user: User


        @BeforeInsert()
        checkSlugInsert(){
            if ( !this.slug ) {
                this.slug = this.title
                .toLowerCase().replaceAll(" ", "_")
                .replaceAll("'", '');
            } else {
                this.slug = this.slug
                .toLowerCase().replaceAll(" ", "_")
                .replaceAll("'", '');
            }
        }

        @BeforeUpdate()
        checkSlugUpdate(){
                this.slug = this.slug
                .toLowerCase().replaceAll(" ", "_")
                .replaceAll("'", '');
        }
    }
