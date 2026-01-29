"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getMyCart } from "@/services/cart.services";

export default function Cart() {
  const router = useRouter();
  const [cart, setCart] = useState<any>(null);

  useEffect(() => {
    getMyCart().then(setCart);
  }, []);

  if (!cart) return <p className="p-4">Loading...</p>;

  return (
    <div className="p-4">
      {cart.items.map((item: any) => (
        <p key={item._id}>{item.title}</p>
      ))}

      <button
        onClick={() => router.push("/checkout")}
        className="mt-6 bg-black text-white px-6 py-3 rounded"
      >
        Buy Now
      </button>
    </div>
  );
}
