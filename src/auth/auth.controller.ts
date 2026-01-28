import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req, Headers, SetMetadata } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto, LoginUserDto } from './dto';
import { AuthGuard } from '@nestjs/passport';
import { GetUser, RawHeaders } from './decorators';
import { User } from './entities/user.entity';
import * as http from 'http';
import { UserRoleGuard } from './guards/user-role/user-role.guard';


@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  create(@Body() createUserDto: CreateUserDto) {
    return this.authService.create(createUserDto);
  }

    @Post('login')
  login(@Body() loginUserDto: LoginUserDto) {
    return this.authService.login(loginUserDto);
  }

    @Get('private')
    @UseGuards(AuthGuard())
    testingPrivateRoutes(
      //@Req() request: Express.Request,
      @GetUser() user:User,
      @GetUser('email') userEmail: string,
      @RawHeaders() rawHeaders: string,
      @Headers() headers:http.IncomingHttpHeaders
    ){
      
      
      return {
        ok:true,
        message:'hola mundo',
        user,
        userEmail,
        rawHeaders,
        headers
      }

    }
    @Get('private2')
    @SetMetadata('roles', ['admin','super-user'])
    @UseGuards(AuthGuard(), UserRoleGuard)
    privateRoute2(
      @GetUser() user: User
      ){
        return {
          ok:true,
          user
        }
      }
  }