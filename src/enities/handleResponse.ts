export class ResponseData<D> {
  data: D | D[];
  message: string;
  status: number;

  // Hàm khởi tạo đối tượng
  constructor(data: D | D[], message: string, status: number) {
    this.data = data;
    this.message = message;
    this.status = status;
  }
}
