// components/WhyChooseUs.tsx
"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Truck,
  RotateCcw,
  Star,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Premium Quality",
    desc: "High-grade materials with long-lasting durability.",
  },
  {
    icon: Star,
    title: "Ultimate Comfort",
    desc: "Designed for all-day comfort and perfect fitting.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    desc: "Quick & reliable shipping across the country.",
  },
  {
    icon: RotateCcw,
    title: "Easy Returns",
    desc: "7-day hassle-free return & exchange policy.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Why Choose Our Shoes?
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="bg-white p-6 rounded-2xl shadow-md text-center"
            >
              <item.icon className="w-10 h-10 mx-auto text-black mb-4" />
              <h3 className="font-semibold text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-l">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
