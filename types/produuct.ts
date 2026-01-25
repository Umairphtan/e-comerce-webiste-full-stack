// MongoDB Product (as stored in DB)
export interface Product {
  _id: string;
  title: string;
  price: number;
  category: string;
  desc: string;
  image: string;
  stock: number;

  createdAt?: string;
  updatedAt?: string;
}
