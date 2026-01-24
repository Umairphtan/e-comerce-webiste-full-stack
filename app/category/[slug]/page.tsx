"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getProductsByCategory } from "@/services/products";
import { Product } from "@/types/produuct";

export default function CategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    // 🔹 reset loading on slug change
    setLoading(true);

    const fetchProducts = async () => {
      try {
        const data = await getProductsByCategory(slug);
        setProducts(data);
      } catch (err) {
        console.error("Failed to load products", err);
        setProducts([]); // optional: clear products on error
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [slug]);

  // 🔹 Skeleton loader for smooth UX
  if (loading) {
    return (
      <div className="p-6 mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="h-72 rounded-xl bg-gray-200 animate-pulse"
          />
        ))}
      </div>
    );
  }

  return (
    <div className="p-6 mt-20">
      <h1 className="text-2xl font-bold capitalize mb-6">
        {slug} Products
      </h1>

      {products.length === 0 ? (
        <p>No products found</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product._id}
              className="border rounded-xl p-4 shadow hover:shadow-lg transition-shadow duration-200"
            >
              <img
                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/product/image/${product.image}`}
                alt={product.title}
                className="h-48 w-full object-cover rounded"
              />

              <h2 className="mt-3 font-semibold">{product.title}</h2>
              <p className="text-gray-600">Rs {product.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
