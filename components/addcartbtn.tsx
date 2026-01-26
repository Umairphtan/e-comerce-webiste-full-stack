"use client";

import React, { useState } from "react";
import { addToCart } from "../services/cart.services";

interface Props {
  productId: string;
  stock: number;
}

const AddToCartButton: React.FC<Props> = ({ productId, stock }) => {
  const [loading, setLoading] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAddToCart = async () => {
    if (stock === 0) return;
    setLoading(true);
    try {
      await addToCart(productId, 1);
      setAdded(true);
      setTimeout(() => setAdded(false), 1500);
    } catch (err: any) {
      alert(err.response?.data?.message || "Failed to add to cart");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleAddToCart}
      disabled={loading || stock === 0}
      className={`w-full px-4 py-2 rounded text-white transition ${
        stock === 0
          ? "bg-gray-400 cursor-not-allowed"
          : added
          ? "bg-green-500"
          : "bg-blue-600 hover:bg-blue-700"
      }`}
    >
      {stock === 0 ? "Sold Out" : loading ? "Adding..." : added ? "Added!" : "Add to Cart"}
    </button>
  );
};

export default AddToCartButton;
