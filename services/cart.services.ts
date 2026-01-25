import http from "@/services/http";
import { Cart } from "@/types/cart";

// ➕ Add to cart
export const addToCart = async (
  productId: string,
  quantity: number = 1
) => {
  const res = await http.post(
    "/cart/add",
    { productId, quantity },
    { withCredentials: true }
  );
  return res.data;
};

// 🛒 Get my cart
export const getMyCart = async (): Promise<Cart> => {
  const res = await http.get("/cart", {
    withCredentials: true,
  });
  return res.data.cart;
};

// ✏ Update quantity
export const updateCartItem = async (
  productId: string,
  quantity: number
) => {
  const res = await http.put(
    "/cart/update",
    { productId, quantity },
    { withCredentials: true }
  );
  return res.data;
};

// ❌ Remove item
export const removeFromCart = async (
  productId: string
) => {
  const res = await http.delete(
    `/cart/remove/${productId}`,
    { withCredentials: true }
  );
  return res.data;
};

// 🧹 Clear cart
export const clearCart = async () => {
  const res = await http.delete("/cart/clear", {
    withCredentials: true,
  });
  return res.data;
};
