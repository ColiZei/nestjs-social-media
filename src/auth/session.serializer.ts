import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import User from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor(private userService: UsersService) {
    super();
  }

  serializeUser(user: User, done: CallableFunction) {
    done(null, user.id);
  }

  async deserializeUser(userId: number, done: CallableFunction) {
    const user = await this.userService.findOne(userId);
    done(null, user);
  }
}
