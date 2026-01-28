import { Controller, Get, Post, Body, UseGuards, Headers } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto, LoginUserDto } from './dto';
import { AuthGuard } from '@nestjs/passport';
import { Auth, GetUser, RawHeaders } from './decorators';
import { User } from './entities/user.entity';
import * as http from 'http';
import { UserRoleGuard } from './guards/user-role/user-role.guard';
import { RoleProtected } from './decorators/role-protected.decorator';
import { ValidRoles } from './interfaces';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';


@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @ApiOperation({ summary: 'Create a new user' })
  @ApiResponse({ status: 201, description: 'User was created', type: User  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  create(@Body() createUserDto: CreateUserDto) {
    return this.authService.create(createUserDto);
  }

  @Post('login')
  @ApiOperation({ summary: 'Login a user' })
  @ApiResponse({ status: 200, description: 'User was logged in', type: User  })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  login(@Body() loginUserDto: LoginUserDto) {
    return this.authService.login(loginUserDto);
  }
  
  @Get('check-status')
  @Auth()
  @ApiOperation({ summary: 'Check authentication status' })
  @ApiResponse({ status: 200, description: 'User is authenticated', type: User })
  @ApiResponse({ status: 403, description: 'Forbidden. Token is not valid' })
  checkAuthStatus(
    @GetUser() user: User
  ){
    return this.authService.checkAuthStatus(user)
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
    // @SetMetadata('roles', ['admin','super-user'])
    @RoleProtected(ValidRoles.admin, ValidRoles.superUser)
    @UseGuards(AuthGuard(), UserRoleGuard)
    privateRoute2(
      @GetUser() user: User
    ){
      return {
        ok:true,
        user
      }
    }

@Get('private3')
    // @SetMetadata('roles', ['admin','super-user'])
    @Auth() //(ValidRoles.admin, ValidRoles.superUser)
    privateRoute3(
      @GetUser() user: User
    )
    {
      return {
        ok:true,
        user
      }
    }
  }