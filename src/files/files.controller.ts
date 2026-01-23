import { Controller, Get, Post, Body, Patch, Param, Delete, UploadedFile, UseInterceptors, BadRequestException } from '@nestjs/common';
import { FilesService } from './files.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { fileFilter } from './helpers/fileFilter.helper';

@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @Post('product')
  @UseInterceptors( FileInterceptor('file', {
    fileFilter: fileFilter
  }) )

  uploadProductFile( 
    @UploadedFile() file: Express.Multer.File,
  ){

    if (!file){
      throw new BadRequestException('Asegurate de que el archivo este en un formato de imagen valido.')
    }

    return {
      fileName: file.originalname
    }
  }
}
