"use client";

import React, { useState, useEffect } from "react";
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

  const cartQuantity = item.quantity || 0;

  const [remainingStock, setRemainingStock] = useState(
    Math.max((product.stock || 0) - cartQuantity, 0)
  );

  const [qty, setQty] = useState(cartQuantity);

  useEffect(() => {
    setRemainingStock(Math.max((product.stock || 0) - qty, 0));
  }, [qty, product.stock]);

  const handleUpdate = async () => {
    if (!product._id) return;
    const newQty = Math.min(qty, cartQuantity + remainingStock);
    const cart = await updateCartItem(product._id, newQty);
    onUpdate(cart);
  };

  const handleRemove = async () => {
    if (!product._id) return;
    const cart = await removeFromCart(product._id);
    onUpdate(cart);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-4 border-b">
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

          {remainingStock > 0 ? (
            <p className="text-green-600 text-sm">
              In Stock ({remainingStock})
            </p>
          ) : (
            <p className="text-red-600 text-sm">Sold Out</p>
          )}
        </div>
      </div>

      <div className="flex items-center gap-2 mt-2 md:mt-0">
        <input
          type="number"
          value={qty}
          min={1}
          max={cartQuantity + remainingStock} // max quantity allowed
          onChange={(e) => setQty(Number(e.target.value))}
          className="w-16 border p-1"
          disabled={remainingStock === 0}
        />
        <button
          onClick={handleUpdate}
          className="bg-blue-500 text-white px-3 py-1 rounded"
          disabled={remainingStock === 0}
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
