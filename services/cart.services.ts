import http from "@/services/http";
import { Cart } from "../types/cart";

export const getMyCart = async (): Promise<Cart> => {
  const { data } = await http.get("/cart");
  return data.cart || { items: [] };
};

export const addToCart = async (productId: string, quantity: number = 1) => {
  const { data } = await http.post("/cart/add", { productId, quantity });
  return data.cart;
};

export const updateCartItem = async (productId: string, quantity: number) => {
  const { data } = await http.put("/cart/update", { productId, quantity });
  return data.cart;
};

export const removeFromCart = async (productId: string) => {
  const { data } = await http.delete(`/cart/remove/${productId}`);
  return data.cart;
};

export const clearCart = async () => {
  const { data } = await http.delete("/cart/clear");
  return data.cart;
};
