export class Product {
  productId: number;
  productName?: string;
  price?: number;

  constructor(productId: number, productName: string, price: number) {
    if (this.productId !== null) this.productId = productId;
    if (this.productName !== null) this.productName = productName;
    if (this.price !== null) this.price = price;
  }
}
