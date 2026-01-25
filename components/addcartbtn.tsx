"use client";

import { Product } from "@/types/produuct";
import { addToCart } from "@/services/cart.services";

export default function AddToCartButton({
  product,
}: {
  product: Product;
}) {
  const handleAdd = async () => {
    try {
      await addToCart(product._id, 1);
      alert("Added to cart 🛒");
    } catch (err) {
      console.error(err);
      alert("Login required");
    }
  };

  return (
    <button
      disabled={product.stock === 0}
      onClick={handleAdd}
      className={`mt-3 w-full py-2 rounded text-sm
        ${
          product.stock === 0
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-black text-white"
        }`}
    >
      {product.stock === 0
        ? "Out of Stock"
        : "Add to Cart"}
    </button>
  );
}
