import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './../../models/product.model';
import { ResponseData } from 'src/enities/handleResponse';
import { HttpMessages, HttpStatus } from 'src/enities/enum';

@Controller('api/v1/products')
export class ProductController {
  // Hàm khởi tạo đối tượng
  constructor(private readonly productService: ProductService) {}

  @Get() // http request
  getAllProduct(): ResponseData<Product[]> {
    try {
      return new ResponseData<Product[]>(
        this.productService.getAllProduct(),
        HttpMessages.SUCCESS_MESSAGE,
        HttpStatus.SUCCESS,
      );
    } catch (error) {
      return new ResponseData<Product[]>(
        null,
        HttpMessages.ERROR_MESSAGE,
        HttpStatus.ERROR_SERVER,
      );
    }
  }

  @Get('/:id')
  getProductById(@Param('id') id: number): Product {
    return this.productService.getProductById(Number(id));
  }

  @Delete('/:id')
  deleteProductById(): string {
    return this.productService.deleteProductById();
  }

  @Post()
  createProduct(): string {
    return this.productService.createProduct();
  }

  @Put('/:id')
  updateProductById(): string {
    return this.productService.updateProductById();
  }
}
