import { ApiProperty } from "@nestjs/swagger";
import { Product } from "src/products/entities";
import { BeforeInsert, BeforeUpdate, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class User {
    @ApiProperty({
        example: 'a6c1a8f1-3a2d-4d1a-8f6a-4b1a4a4a4a4a',
        description: 'User ID',
        uniqueItems: true
    })
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ApiProperty({
        example: 'test@google.com',
        description: 'User Email',
        uniqueItems: true
    })
    @Column('text', {
        unique:true
    })
    email:string;

    @Column('text',{
        select:false
    })
    password: string;

    @ApiProperty({
        example: 'Anthony Tamayo',
        description: 'User Full Name'
    })
    @Column('text')
    fullName: string;

    @ApiProperty({
        example: true,
        description: 'Is user active?',
        default: true
    })
    @Column('bool', {
        default:true
    })
    isActive: boolean;

    @ApiProperty({
        example: ['admin'],
        description: 'User Roles',
        default: ['user']
    })
    @Column('text', {
        array:true,
        default:['user']
    })
    roles: string[];

    @OneToMany(
        () => Product, 
        (product) => product.user 
    )
    product: Product

    @BeforeInsert()
    checkFieldBeforeInsert(){
        this.email = this.email.toLowerCase().trim();
    }

    @BeforeUpdate()
    checkFieldBeforeUpdate(){
        this.email = this.email.toLowerCase().trim();
    }
}
