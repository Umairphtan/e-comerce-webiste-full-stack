"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Menu, X, User } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/context/authcontext";

const navLinks = [
  { name: "Shop", href: "/" },
  { name: "Men", href: "/category/men" },
  { name: "Women", href: "/category/women" },
  { name: "Accessories", href: "/category/accessories" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const { isAuthenticated, logout, user } = useAuth();

  const handleLogout = async () => {
    await logout();
    setProfileOpen(false);
    window.location.href = "/";
  };

  return (
    <>
      {/* Header */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 left-0 w-full z-50 bg-gray-100/95 backdrop-blur-md border-b border-gray-200 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-4xl font-extrabold tracking-tight text-gray-900">
            SOLE<span className="text-primary">X</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-lg font-medium text-gray-700 hover:text-gray-900 transition group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-5">
            {/* Cart */}
            <Link href="/cart" className="relative flex items-center group">
              <ShoppingBag className="w-6 h-6 text-gray-800 group-hover:text-gray-900 transition" />
            </Link>

            {/* Desktop Login / Profile */}
            {!isAuthenticated || !user ? (
              <Link
                href="/login"
                className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full bg-gray-800 text-white font-semibold shadow hover:shadow-lg transition transform hover:-translate-y-0.5 hover:scale-105"
              >
                <User className="w-5 h-5" />
                <span>Login</span>
              </Link>
            ) : (
              <div className="relative hidden md:flex items-center">
                <button
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-medium shadow"
                  title={user.email}
                >
                  {user.email[0].toUpperCase()}
                </button>

                {/* Dropdown */}
                <AnimatePresence>
                  {profileOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden z-50"
                    >
                      <div className="px-4 py-2 text-gray-800 font-medium">{user.email}</div>
                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 font-semibold"
                      >
                        Logout
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setOpen(true)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-200 transition"
            >
              <Menu className="w-7 h-7 text-gray-800" />
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
            className="fixed inset-0 bg-gray-100 shadow-lg z-50"
          >
            <div className="flex items-center justify-between px-6 h-20 border-b border-gray-200">
              <Link href="/" className="text-3xl font-bold text-gray-900">
                SOLE<span className="text-primary">X</span>
              </Link>
              <button onClick={() => setOpen(false)}>
                <X className="w-7 h-7 text-gray-800" />
              </button>
            </div>

            <nav className="flex flex-col gap-6 px-8 py-16">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-2xl font-semibold text-gray-800 hover:text-gray-900 transition"
                >
                  {link.name}
                </Link>
              ))}

              {!isAuthenticated || !user ? (
                <Link
                  href="/login"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 justify-center bg-gray-800 text-white py-3 px-6 rounded-full font-semibold shadow hover:shadow-lg transition transform hover:-translate-y-0.5 hover:scale-105 mt-4"
                >
                  <User className="w-5 h-5" />
                  <span>Login</span>
                </Link>
              ) : (
                <div className="flex flex-col gap-3 mt-4">
                  <div className="flex items-center justify-center gap-3">
                    <span className="text-gray-700 font-medium">{user.email}</span>
                    <button
                      onClick={handleLogout}
                      className="bg-red-500 hover:bg-red-600 text-white py-3 px-6 rounded-full font-semibold shadow"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
