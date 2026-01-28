import http from "@/services/http";
import { Cart } from "../types/cart";

// ================= GET CART =================
export const getMyCart = async (): Promise<Cart> => {
  try {
    const { data } = await http.get("/cart");
    return data.cart || { items: [] };
  } catch {
    return { items: [] };
  }
};

// ================= ADD TO CART =================
export const addToCart = async (
  productId: string,
  quantity: number = 1
) => {
  try {
    const { data } = await http.post("/cart/add", { productId, quantity });
    return data.cart;
  } catch (err: any) {
    return Promise.reject({
      message: err.response?.data?.message || "Failed to add to cart",
    });
  }
};

// ================= UPDATE CART ITEM =================
export const updateCartItem = async (
  productId: string,
  quantity: number
) => {
  try {
    const { data } = await http.put("/cart/update", { productId, quantity });
    return data.cart;
  } catch (err: any) {
    return Promise.reject({
      message: err.response?.data?.message || "Update failed",
    });
  }
};

// ================= REMOVE ITEM =================
export const removeFromCart = async (productId: string) => {
  try {
    const { data } = await http.delete(`/cart/remove/${productId}`);
    return data.cart;
  } catch (err: any) {
    return Promise.reject({
      message: err.response?.data?.message || "Remove failed",
    });
  }
};

// ================= CLEAR CART =================
export const clearCart = async () => {
  try {
    const { data } = await http.delete("/cart/clear");
    return data.cart;
  } catch (err: any) {
    return Promise.reject({
      message: err.response?.data?.message || "Clear cart failed",
    });
  }
};
export const getCartCount = async (): Promise<number> => {
  try {
    const { data } = await http.get("/cart/count");
    return data.success ? data.count : 0;
  } catch {
    return 0;
  }
};