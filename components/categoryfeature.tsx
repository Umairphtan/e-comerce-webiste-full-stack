"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const categories = [
    { name: "Men", href: "/category/men", image: "/men.jpg" },
    { name: "Women", href: "/category/women", image: "women.jpg" },
    { name: "Accessories", href: "/category/accessories", image: "/bag.jpg" },
];

export default function CategoryShowcase() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-28">
            <h2 className="text-4xl font-bold mb-14 text-center">
                Shop by Category
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {categories.map((cat) => (
                    <motion.div
                        key={cat.name}
                        whileHover={{ scale: 1.05 }}
                        className="relative h-[420px] rounded-3xl overflow-hidden group"
                    >
                        <img
                            src={cat.image}
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
                        />

                        <div className="absolute inset-0 bg-black/40" />

                        <div className="relative h-full flex items-end p-8">
                            <Link
                                href={cat.href}
                                className="text-3xl font-bold text-white"
                            >
                                {cat.name}
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
