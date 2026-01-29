"use client";

import { useParams, useRouter } from "next/navigation";

export default function OrderSuccess() {
  const { id } = useParams();
  const router = useRouter();

  return (
    <div className="mt-32 text-center">
      <h1 className="text-2xl font-bold text-green-600">
        Order Placed Successfully 🎉
      </h1>
      <p className="mt-2">Order ID: {id}</p>

      <button
        onClick={() => router.push("/orders")}
        className="mt-6 bg-black text-white px-6 py-2 rounded"
      >
        View Orders
      </button>
    </div>
  );
}
