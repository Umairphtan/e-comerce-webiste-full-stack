"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { getMyCart } from "@/services/cart.services";
import { createOrder } from "@/services/order";

const initialState = {
  name: "",
  phone: "",
  address: "",
  city: "",
};

export default function ShippingForm() {
  const router = useRouter();
  const [shipping, setShipping] = useState(initialState);
  const [loading, setLoading] = useState(false);

  const onChange = (e: any) =>
    setShipping({ ...shipping, [e.target.name]: e.target.value });

  const confirmOrder = async () => {
    if (loading) return;

    try {
      setLoading(true);

      const cart = await getMyCart();

      const items = cart.items.map((i: any) => ({
        product: i.product._id,
        quantity: i.quantity,
      }));

      const order = await createOrder(items, shipping);

      router.replace(`/order-success/${order._id}`);
    } catch (err: any) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 border rounded">
      <h2 className="text-xl font-bold mb-4">Shipping Details</h2>

      {["name", "phone", "address", "city"].map((field) => (
        <input
          key={field}
          name={field}
          placeholder={field.toUpperCase()}
          onChange={onChange}
          className="w-full border p-2 mb-3"
        />
      ))}

      <button
        onClick={confirmOrder}
        disabled={loading}
        className="w-full bg-black text-white py-2 rounded"
      >
        {loading ? "Placing..." : "Confirm Order"}
      </button>
    </div>
  );
}
