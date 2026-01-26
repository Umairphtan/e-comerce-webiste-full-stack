import { Product } from "./produuct";

export interface CartItem {
  product: Product | null;  
  title: string;
  priceAtPurchase: number;
  quantity: number;
}

export interface Cart {
  _id?: string;
  user?: string;
  items: CartItem[];
}
