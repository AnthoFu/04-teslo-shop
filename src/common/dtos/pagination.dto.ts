import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsOptional, IsPositive, Min } from "class-validator";

export class PaginationDto{

    @ApiProperty({
        default:10, description:'Cantidad de valores a traer'
    })
    @IsOptional()
    @IsPositive()
    @Type(() => Number) // Es lo mismo que hacer enableImplicitConversions: True
    limit?:number;

    @ApiProperty({
        default:0, description:'Cantidad de valores a saltar'
    })
    @IsOptional()
    @Type(() => Number)
    @Min(0)
    offset?:number;
}