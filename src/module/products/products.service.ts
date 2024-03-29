import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from './entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductEntity)
    private productRespository: Repository<ProductEntity>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    const result = await this.productRespository.create(createProductDto);
    return this.productRespository.save(result);
  }

  async findAll() {
    const result = await this.productRespository
      .createQueryBuilder('product')
      .getMany();
    return result;
  }

  async findOne(id: number) {
    const result = await this.productRespository.findOne({
      where: { product_id: id },
    });
    return result;
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const result = await this.productRespository
      .createQueryBuilder('product')
      .update(ProductEntity)
      .set(updateProductDto)
      .where('product_id = :id', { id: id })
      .execute();
    return result;
  }

  async remove(id: number) {
    const result = await this.productRespository.delete({ product_id: id });
    return result;
  }
}
