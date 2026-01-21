// components/MostSelling.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { mostSellingProducts } from "@/data/mostselling";
import { motion } from "framer-motion";

export default function MostSelling() {
    return (
        <section className="py-14 px-6 max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">
            Most Selling Products
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 ">
                {mostSellingProducts.map((product) => (
                    <motion.div
                        key={product.id}
                        whileHover={{ y: -6 }}
                        className="bg-white rounded-2xl shadow-md overflow-hidden"
                    >
                        <Link href={`/product/${product.id}`}>
                            <Image
                                src={product.image}
                                alt={product.title}
                                width={300}
                                height={300}
                                className="object-cover w-full h-56"
                            />
                        </Link>

                        <div className="p-4">
                            <h3 className="font-semibold">{product.title}</h3>
                            <p className="text-gray-600 text-sm capitalize">
                                {product.category}
                            </p>

                            <div className="flex items-center justify-between mt-3">
                                <span className="font-bold text-lg">${product.price}</span>
                                <button className="px-3 py-1 text-sm rounded-full bg-black text-white hover:bg-gray-800">
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
