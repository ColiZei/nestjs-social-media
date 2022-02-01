import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { RegisterUserDto } from './dto/register.-user.dto';

@Injectable()
export class AuthService {
  constructor(private userService: UsersService) {}

  async validateUser(email: string, password: string) {
    const user = await this.userService.findByEmail(email);
    if (user) {
      const passwordVerified = await this.verifyPassword(
        password,
        user.password,
      );
      if (passwordVerified) {
        return user;
      }
    }
    return null;
  }

  verifyPassword(plainPassword: string, hashedPassword: string) {
    return bcrypt.compare(plainPassword, hashedPassword);
  }

  async register(registerUserDto: RegisterUserDto) {
    let user = null;
    try {
      user = await this.userService.create(registerUserDto);
    } catch (error) {
      if (error.code === 'ER_DUP_ENTRY') {
        throw new BadRequestException('User with that email already exists');
      }
      throw new InternalServerErrorException();
    }
    return user;
  }
}
