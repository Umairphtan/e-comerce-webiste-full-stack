export interface ShippingAddress {
  name: string;
  phone: string;
  address: string;
  city: string;
}

export interface OrderItem {
  product: string;
  title: string;
  priceAtPurchase: number;
  quantity: number;
}

export interface Order {
  _id: string;
  items: OrderItem[];
  totalAmount: number;
  shippingAddress: ShippingAddress;
  status: string;
  createdAt: string;
}
