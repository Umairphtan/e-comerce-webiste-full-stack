"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function PromoBanner() {
  return (
    <section className="px-4 sm:px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto rounded-3xl overflow-hidden
        bg-gradient-to-r from-black via-gray-900 to-black text-white"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 px-8 py-14">

          {/* Text */}
          <div>
            <span className="text-sm uppercase tracking-widest text-gray-300">
              Limited Time Offer
            </span>

            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black leading-tight">
              Flat <span className="text-primary">30% OFF</span> <br />
              On Women Collection
            </h2>

            <p className="mt-4 text-gray-300 max-w-md">
              Premium quality shoes & accessories. Grab the deal before it ends.
            </p>
          </div>

          {/* CTA */}
          <Link
            href="/category/women"
            className="px-8 py-4 rounded-full bg-white text-black
            font-semibold hover:bg-gray-200 transition"
          >
            Shop Now
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
