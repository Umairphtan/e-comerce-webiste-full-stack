"use client";

import React, { useState } from "react";
import { CartItem as CartItemType } from "../types/cart";
import { updateCartItem, removeFromCart } from "../services/cart.services";

interface Props {
  item: CartItemType;
  onUpdate: (cart: any) => void;
}

const CartItem: React.FC<Props> = ({ item, onUpdate }) => {
  const product = item.product;

  if (!product) {
    return (
      <div className="p-4 border-b text-red-500">
        Product data not available for "{item.title}"
      </div>
    );
  }

  const maxStock = product.stock || 0;
  const [qty, setQty] = useState(item.quantity);

  const handleUpdate = async () => {
    if (!product._id) return;

    if (qty < 1 || qty > maxStock) {
      alert("Invalid quantity");
      return;
    }

    try {
      const cart = await updateCartItem(product._id, qty);
      onUpdate(cart);
    } catch (err: any) {
      alert(err.message);
    }
  };

  const handleRemove = async () => {
    if (!product._id) return;

    try {
      const cart = await removeFromCart(product._id);
      onUpdate(cart);
    } catch (err: any) {
      alert(err.message);
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-4 border-b">
      {/* PRODUCT INFO */}
      <div className="flex items-center gap-4">
        {product.image && (
          <img
            src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/product/image/${product.image}`}
            alt={product.title}
            className="h-20 w-20 object-cover rounded"
          />
        )}

        <div>
          <h3 className="font-semibold">{item.title}</h3>
          <p className="text-gray-700">${item.priceAtPurchase}</p>

          {maxStock > 0 ? (
            <p className="text-green-600 text-sm">
              In Stock ({maxStock})
            </p>
          ) : (
            <p className="text-red-600 text-sm">Sold Out</p>
          )}
        </div>
      </div>

      {/* ACTIONS */}
      <div className="flex items-center gap-2 mt-3 md:mt-0">
        <input
          type="number"
          min={1}
          max={maxStock}
          value={qty}
          onChange={(e) => setQty(Number(e.target.value))}
          className="w-16 border p-1"
          disabled={maxStock === 0}
        />

        <button
          onClick={handleUpdate}
          className="bg-blue-500 text-white px-3 py-1 rounded disabled:opacity-50"
          disabled={maxStock === 0 || qty === item.quantity}
        >
          Update
        </button>

        <button
          onClick={handleRemove}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
