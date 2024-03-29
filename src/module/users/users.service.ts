import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}
  async findOne(user_id: number) {
    return await this.userRepository.findOne({ where: { user_id: user_id } });
  }

  async getUserByUserName(user_name: string) {
    return await this.userRepository.findOne({
      where: { user_name: user_name },
    });
  }

  async register(body: any) {
    // console.log(body)
    const newUser = await this.userRepository
      .createQueryBuilder()
      .insert()
      .into(UserEntity)
      .values(body)
      .execute();
      return {message:"Đăng kí thành công"}
  }

  async checkLogin(user_name: any, user_email: any) {
    console.log(user_name,user_email)
    const check= await this.userRepository
      .createQueryBuilder()
      .select()
      .where('user_name = :user_name', { user_name: user_name })
      .andWhere('user_email = :user_email', { user_email: user_email })
      .getRawOne();
    console.log(check)
     if(check){
       return { message: 'Đăng nhập thành công' };
     }else{
      return {message:"Sai tài khoản hoặc mật khẩu"}
     }
  }
}
