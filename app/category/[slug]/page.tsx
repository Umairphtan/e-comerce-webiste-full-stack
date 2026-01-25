"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getProductsByCategory } from "@/services/products";
import { Product } from "@/types/produuct";
import AddToCartButton from "@/components/addcartbtn";

export default function CategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    const fetchProducts = async () => {
      setLoading(true);
      try {
        const data = await getProductsByCategory(slug);
        setProducts(data);
      } catch (err) {
        console.error("Failed to load products", err);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [slug]);

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
      <h1 className="text-2xl font-bold capitalize mb-6">{slug} Products</h1>

      {products.length === 0 ? (
        <p>No products found</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product._id}
              className="border rounded-xl p-4 shadow hover:shadow-lg transition-shadow duration-200 flex flex-col justify-between"
            >
              {/* IMAGE */}
              <img
                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/product/image/${product.image}`}
                alt={product.title}
                className="h-48 w-full object-cover rounded"
              />

              <div className="mt-3 flex-1">
                <h2 className="font-semibold">{product.title}</h2>
                <p className="text-sm text-gray-500 line-clamp-2 mt-1">{product.desc}</p>
                <p className="text-gray-700 font-medium mt-2">Rs {product.price}</p>
                {product.stock > 0 ? (
                  <p className="text-green-600 text-sm mt-1">In stock ({product.stock})</p>
                ) : (
                  <p className="text-red-600 text-sm mt-1">Out of stock</p>
                )}
              </div>

              {product.stock > 0 && (
                <div className="mt-4">
                  <AddToCartButton productId={product._id} />
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
