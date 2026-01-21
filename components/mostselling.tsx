"use client";

import Image from "next/image";
import Link from "next/link";
import { mostSellingProducts } from "@/data/mostselling";
import { motion } from "framer-motion";
import { useCart } from "@/context/cartcontext";

export default function MostSelling() {
  const { addToCart } = useCart();

  return (
    <section className="py-14 px-4 sm:px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">
        Most Selling Products
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {mostSellingProducts.map((product) => (
          <motion.div
            key={product.id}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="group bg-white rounded-2xl shadow-md overflow-hidden flex flex-col"
          >
            {/* Image */}
            <Link
              href={`/product/${product.id}`}
              className="relative w-full aspect-square"
            >
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover group-hover:scale-105 transition"
              />
            </Link>

            {/* Content */}
            <div className="p-4 flex flex-col flex-1">
              <h3 className="font-semibold">{product.title}</h3>
              <p className="text-gray-500 text-sm capitalize">
                {product.category}
              </p>

              <div className="mt-auto flex items-center justify-between pt-4">
                <span className="font-bold">${product.price}</span>

                <button
                  onClick={() => addToCart(product)}
                  className="px-4 py-2 text-sm rounded-full bg-black text-white hover:bg-gray-800"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
