"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Banner images per category
const bannerMap: Record<string, string[]> = {
  men: ["/dis.jpg", "/men1.png", "/men.jpg"],
  women: ["/disw.webp", "/women1.webp", "/women.webp"],
  accessories: ["/baner.png", "/bag2.jpg"],
};

export default function CategoryBanner({ category }: { category: string }) {
  const images = bannerMap[category];
  const [current, setCurrent] = useState(0);

  // 🔄 Auto slide every 5 seconds
  useEffect(() => {
    if (!images || images.length === 0) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images]);

  if (!images || images.length === 0) return null;

  return (
    <div className="relative h-[340px] w-full mb-10 rounded-2xl overflow-hidden mt-6">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <Image
            src={images[current]}
            alt={`${category} banner`}
            fill
            className="object-full"
            priority
          />
          <div className="absolute inset-0 bg-black/30 flex items-center px-10">
            <h1 className="text-4xl text-white font-bold capitalize">
              {category} Collection
            </h1>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${current === index ? "bg-white" : "bg-white/50"
              }`}
          />
        ))}
      </div>
    </div>
  );
}
