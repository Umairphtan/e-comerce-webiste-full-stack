"use client";

import { useEffect, useState } from "react";
import { getMyOrders, cancelOrder } from "@/services/order";

export default function OrdersPage() {
  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {
    getMyOrders().then(setOrders);
  }, []);

  const cancel = async (id: string) => {
    await cancelOrder(id);
    setOrders((prev) =>
      prev.map((o) =>
        o._id === id ? { ...o, status: "cancelled" } : o
      )
    );
  };

  return (
    <div className="p-6 mt-20">
      <h1 className="text-xl font-bold mb-4">My Orders</h1>

      {orders.map((o) => (
        <div key={o._id} className="border p-4 mb-3">
          <p>Status: {o.status}</p>
          <p>Total: Rs {o.totalAmount}</p>

          {o.status === "pending" && (
            <button
              onClick={() => cancel(o._id)}
              className="mt-2 bg-red-500 text-white px-4 py-1 rounded"
            >
              Cancel
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
