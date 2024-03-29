import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BuyoutService } from './buyout.service';
import { CreateBuyoutDto } from './dto/create-buyout.dto';
import { UpdateBuyoutDto } from './dto/update-buyout.dto';

@Controller('buyout')
export class BuyoutController {
  constructor(private readonly buyoutService: BuyoutService) {}

  @Post()
  create(@Body() createBuyoutDto: CreateBuyoutDto) {
    return this.buyoutService.create(createBuyoutDto);
  }

  @Get()
  findAll() {
    return this.buyoutService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.buyoutService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBuyoutDto: UpdateBuyoutDto) {
    return this.buyoutService.update(+id, updateBuyoutDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.buyoutService.remove(+id);
  }
}
