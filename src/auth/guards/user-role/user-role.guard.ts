import { BadRequestException, CanActivate, ExecutionContext, ForbiddenException, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { User } from 'src/auth/entities/user.entity';

@Injectable()
export class UserRoleGuard implements CanActivate {

  constructor(
    private readonly reflector: Reflector
  ){}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {

    console.log('UserRoleGuard ha sido activado')

    const validRoles: string[] = this.reflector.get('roles', context.getHandler())
    console.log('Roles validos:', {validRoles})


    if (!validRoles){
      return true;
    }
    
    if (validRoles.length === 0){
      return true
    }

    const req = context.switchToHttp().getRequest();
    const user = req.user as User;

    if (!user){
      throw new BadRequestException(`El usuario no se ha encontrado`)
    }

    console.log('[UserRoleGuard] Roles del usuario:',{userRoles: user.roles})
    
    for (const role of user.roles){
      if (validRoles.includes(role)){
        return true;
      }
    }
    
    throw new ForbiddenException(`El usuario ${user.fullName} necesita un rol de administrador valido. Ej: [${validRoles}]`)
  }
}
