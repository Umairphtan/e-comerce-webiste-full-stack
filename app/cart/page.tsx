"use client";

import Image from "next/image";
import { useCart } from "@/context/cartcontext";

export default function CartPage() {
  const { cart, removeFromCart } = useCart();

  if (cart.length === 0) {
    return <p className="text-center mt-20">🛒 Cart is empty</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4 mt-20">
      <h1 className="text-2xl font-bold mb-6 ">Your Cart</h1>

      {cart.map((item) => (
        <div
          key={item.id}
          className="flex items-center gap-4 border-b py-4 mt-10"
        >
          <Image src={item.image} alt="" width={80} height={80} />

          <div className="flex-1">
            <h3 className="font-semibold">{item.title}</h3>
            <p>Rs {item.price} × {item.quantity}</p>
          </div>

          <button
            onClick={() => removeFromCart(item.id)}
            className="text-red-500 text-sm"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}
