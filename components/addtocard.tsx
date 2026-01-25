"use client";

import React, { useEffect, useState } from "react";
import { Cart as CartType } from "../types/cart";
import { getMyCart, clearCart } from "../services/cart.services";
import CartItem from "./cartitem";

const Cart: React.FC = () => {
  const [cart, setCart] = useState<CartType>({ items: [] });
  const [loading, setLoading] = useState(true);

  const fetchCart = async () => {
    setLoading(true);
    try {
      const data = await getMyCart();
      setCart(data || { items: [] });
    } catch (err) {
      console.error(err);
      setCart({ items: [] });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const handleClear = async () => {
    await clearCart();
    setCart({ items: [] });
  };

  if (loading) return <p className="p-4">Loading cart...</p>;
  if (!cart.items.length) return <p className="p-4">Your cart is empty.</p>;

  const total = cart.items.reduce((acc, item) => {
    const qty = item.quantity || 0;
    const price = item.priceAtPurchase || 0;
    return acc + qty * price;
  }, 0);

  return (
    <div className="max-w-3xl mx-auto p-4">
      {cart.items.map((item) => (
        <CartItem key={item.product?._id || item.title} item={item} onUpdate={setCart} />
      ))}

      <div className="mt-6 flex justify-between items-center">
        <h2 className="text-lg font-semibold">Total: ${total}</h2>
        <button onClick={handleClear} className="bg-red-500 text-white px-4 py-2 rounded">
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
