"use client";

import React, { useState } from "react";
import { addToCart } from "../services/cart.services";

interface Props {
  productId: string;
}

const AddToCartButton: React.FC<Props> = ({ productId }) => {
  const [loading, setLoading] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAddToCart = async () => {
    setLoading(true);
    try {
      await addToCart(productId, 1);
      setAdded(true);
      setTimeout(() => setAdded(false), 1500);
    } catch (err: any) {
      // ❌ console.error hata diya
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleAddToCart}
      disabled={loading || added}
      className={`w-full px-4 py-2 rounded text-white transition ${
        added ? "bg-green-500" : "bg-blue-600 hover:bg-blue-700"
      }`}
    >
      {loading ? "Adding..." : added ? "Added!" : "Add to Cart"}
    </button>
  );
};

export default AddToCartButton;
