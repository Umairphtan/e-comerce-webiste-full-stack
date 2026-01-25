export interface CartItem {
  product: string;        // productId
  title: string;
  priceAtPurchase: number;
  quantity: number;
}

export interface Cart {
  _id: string;
  user: string;
  items: CartItem[];
  createdAt?: string;
  updatedAt?: string;
}
