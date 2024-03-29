import { PartialType } from '@nestjs/mapped-types';
import { CreateBuyoutDto } from './create-buyout.dto';

export class UpdateBuyoutDto extends PartialType(CreateBuyoutDto) {}
