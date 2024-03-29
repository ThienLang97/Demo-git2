import { Module } from '@nestjs/common';
import { BuyoutService } from './buyout.service';
import { BuyoutController } from './buyout.controller';

@Module({
  controllers: [BuyoutController],
  providers: [BuyoutService],
})
export class BuyoutModule {}
