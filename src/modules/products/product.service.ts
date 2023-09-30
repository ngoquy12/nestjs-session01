import { Injectable } from '@nestjs/common';
import { Product } from './../../models/product.model';

@Injectable()
export class ProductService {
  // Dữ liệu của product
  private products: Product[] = [
    { productId: 1, productName: 'Cà chua', price: 12000 },
    { productId: 2, productName: 'Tôm hùm', price: 120000 },
    { productId: 3, productName: 'Bí ngô', price: 13000 },
  ];

  getAllProduct(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product {
    // Tìm kiếm product theo id trong mảng
    const product = this.products.find((pro) => pro.productId === id);

    return product;
  }

  deleteProductById(): string {
    return 'Delete product by id';
  }

  createProduct(): string {
    return 'Create product';
  }

  updateProductById(): string {
    return 'Update product by id';
  }
}
