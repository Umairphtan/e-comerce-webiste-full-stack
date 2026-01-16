"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ShoppingBag, Menu } from "lucide-react";

const navLinks = [
  { name: "Men", href: "/category/men" },
  { name: "Women", href: "/category/women" },
  { name: "Accessories", href: "/category/accessories" },
  { name: "Shop", href: "/shop" },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-extrabold tracking-tight">
          SOLE<span className="text-primary">X</span>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-700 hover:text-black transition"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Link href="/cart" className="relative">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-2 -right-2 text-xs bg-black text-white rounded-full px-1">
              0
            </span>
          </Link>

          {/* Mobile menu icon (later expand) */}
          <Menu className="w-6 h-6 md:hidden" />
        </div>
      </div>
    </motion.header>
  );
}
