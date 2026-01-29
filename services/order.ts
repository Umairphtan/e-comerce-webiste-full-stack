import http from "@/services/http";
import { ShippingAddress, Order } from "@/types/order";

export const createOrder = async (
  items: { product: string; quantity: number }[],
  shippingAddress: ShippingAddress
): Promise<Order> => {
  const res = await http.post("/order", { items, shippingAddress });
  return res.data.order;
};

export const getMyOrders = async (): Promise<Order[]> => {
  const res = await http.get("/order/my-orders");
  return res.data.orders;
};
