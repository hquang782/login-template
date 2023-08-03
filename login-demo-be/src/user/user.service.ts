import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

  constructor(@InjectRepository(User)
  private userRepository: Repository<User>
  ){}

  async create(createUserDto: CreateUserDto) {
    const newUser = this.userRepository.create(createUserDto);
    return await this.userRepository.save(createUserDto);
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(id: string) {
    const user = await this.userRepository.findOne({where: {id}})
    if (!user) {
      return {message: 'user not found! ', data: null}
        
    }
    return { message: `This action returns account ${id}`, data: user }
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const updateUser = await this.userRepository.findOne({ where: { id } });
    if (!updateUser) {
      throw new NotFoundException('User not found');
    }
    updateUser.username = updateUserDto.username;
    updateUser.email = updateUserDto.email;
    updateUser.password = updateUserDto.password;
    return await this.userRepository.save(updateUser);
  }

  async remove(id: string) {
    const device = await this.userRepository.findOne({ where: { id } });
    if (!device) {
      throw new NotFoundException('User not found');
    }
    device.id = id;
    // console.log(device.id);
    return await this.userRepository.remove(device);
  }
  async findone(username: string) {
    const user = await this.userRepository.findOne({where: {username}})
    if (!user) {
      return  null
        
    }
    return user ;
  }
}
