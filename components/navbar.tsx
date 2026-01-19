"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { name: "Shop", href: "/" },
  { name: "Men", href: "/category/men" },
  { name: "Women", href: "/category/women" },
  { name: "Accessories", href: "/category/accessories" },
  { name: "Contact Us", href: "/contact" },

];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b"
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="text-4xl font-black tracking-tight"
          >
            SOLE<span className="text-primary">X</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-xl font-medium text-gray-700 hover:text-black transition group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-6">
            <Link href="/cart" className="relative">
              <ShoppingBag className="w-6 h-6" />
              <span className="absolute -top-2 -right-2 text-xs bg-black text-white rounded-full px-1.5">
                0
              </span>
            </Link>

            {/* Mobile Toggle */}
            <button
              onClick={() => setOpen(true)}
              className="md:hidden"
            >
              <Menu className="w-7 h-7" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-white"
          >
            <div className="flex items-center justify-between px-6 h-20 border-b">
              <span className="text-3xl font-black">
                SOLE<span className="text-primary">X</span>
              </span>
              <button onClick={() => setOpen(false)}>
                <X className="w-7 h-7" />
              </button>
            </div>

            <nav className="flex flex-col gap-8 px-8 py-16">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-3xl font-semibold text-gray-800"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
