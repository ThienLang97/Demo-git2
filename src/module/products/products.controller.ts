import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('api/v1/products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post("create")
  async create(@Body() createProductDto: CreateProductDto) {
    try {
      const result = await this.productsService.create(createProductDto);
      return {
        statusCode: 200,
        message: "Create product successfully",
        data: result
      }
    } catch (error) {
      console.log(error);
    }
  }

  @Get("list")
  async findAll() {
    try {
      const result = await this.productsService.findAll();
      return {
        statusCode: 200,
        message: "Get all products successfully",
        data: result
      }
    } catch (error) {
      console.log(error);
      
    }
  }

  @Get(':id')
  async getProductById(@Param('id') id: string) {
    try {
      const result =await this.productsService.findOne(+id);
      return {
        statusCode: 200,
        message: "Get product successfully",
        data: result
      }
    } catch (error) {
      console.log();
      
    }
  }

  @Patch('update/:id')
  async updateProduct(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    try {
      const result =await this.productsService.update(+id, updateProductDto);
      return {
        statusCode: 200,
        message: "Update product successfully",
        data: result
      }
    } catch (error) {
      console.log(error);
      
    }
  }

  @Delete('delete/:id')
  async deleteProduct(@Param('id') id: string) {
    try {
      const result =await this.productsService.remove(+id);
      return {
        statusCode: 200,
        message: "Delete product successfully",
        data: result
      }
    } catch (error) {
      console.log(error);
      
    }
  } 
}
