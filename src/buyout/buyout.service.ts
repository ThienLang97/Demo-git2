import { Injectable } from '@nestjs/common';
import { CreateBuyoutDto } from './dto/create-buyout.dto';
import { UpdateBuyoutDto } from './dto/update-buyout.dto';

@Injectable()
export class BuyoutService {
  create(createBuyoutDto: CreateBuyoutDto) {
    return 'This action adds a new buyout';
  }

  findAll() {
    return `This action returns all buyout`;
  }

  findOne(id: number) {
    return `This action returns a #${id} buyout`;
  }

  update(id: number, updateBuyoutDto: UpdateBuyoutDto) {
    return `This action updates a #${id} buyout`;
  }

  remove(id: number) {
    return `This action removes a #${id} buyout`;
  }
}
