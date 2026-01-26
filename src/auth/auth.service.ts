import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ){}

  async create(createUserDto: CreateUserDto) {
    let user: User;
    try{

      const {password, ...userData} = createUserDto;

      user = this.userRepository.create({
        ...userData,
        password: bcrypt.hashSync(password, 10)
      });

      await this.userRepository.save(user);
      delete (user as any).password
    } catch(error){
      this.handleDBErrors(error);
    }
    return user;
  }


  private handleDBErrors (error:any):never {
    if (error.code === '23505'){
      throw new BadRequestException(error.detail)
    }
    console.log(error)
    throw new InternalServerErrorException('Por favor revisa los logs')
  }
}