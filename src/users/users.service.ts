import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import User from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const hashedPassword = await this.hashPassword(createUserDto.password);
    const newUser = this.usersRepository.create({
      ...createUserDto,
      password: hashedPassword,
    });
    return this.usersRepository.save(newUser);
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<User> {
    return this.usersRepository.findOne(id);
  }

  async update(
    id: number,
    updateUserDto: UpdateUserDto,
  ): Promise<UpdateResult> {
    const hashedPassword = await this.hashPassword(updateUserDto.password);
    return this.usersRepository.update(id, {
      ...updateUserDto,
      password: hashedPassword,
    });
  }

  remove(user: User): Promise<User> {
    return this.usersRepository.remove(user);
  }

  hashPassword(password: string) {
    return bcrypt.hash(password, 10);
  }

  async findByEmail(email: string): Promise<User> {
    return this.usersRepository.findOne({ email });
  }
}
