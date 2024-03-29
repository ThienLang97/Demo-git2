import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('api/v1/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get("/:id")
  getOne(@Param('id') user_id: number) {
    return this.usersService.findOne(user_id);
  }

  @Post("/register")
 async register(@Body() body:any){
    const user_name = body.user_name
    const checkExist = await this.usersService.getUserByUserName(user_name);
    if(checkExist){
      return {message:"User already exist"}
    }
    return this.usersService.register(body);
  }

  @Post("/login")
  async login(@Body() body:any){
    const user_name = body.user_name
    const user_email = body.user_email
    // const password = body.password
    const check = await this.usersService.checkLogin(user_name, user_email);
    return check.message
  }
}
