"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Menu, X, User } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useAuth } from "@/context/authcontext";
import { getCartCount } from "@/services/cart.services";

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
  const [cartCount, setCartCount] = useState(0);

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const { isAuthenticated, logout, user } = useAuth();

  const handleAddToCart = async (productId: string, quantity: number = 1) => {
  try {
    const { count } = await addToCart(productId, quantity);
    setCartCount(count); // immediately update badge
  } catch (err) {
    console.error(err);
  }
};

  // PROFILE DROPDOWN AUTO-CLOSE 3 SEC
  const handleProfileToggle = () => {
    setProfileOpen(true);

    if (timerRef.current) clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      setProfileOpen(false);
    }, 3000);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  // FETCH CART COUNT
  const fetchCartCount = async () => {
    if (!isAuthenticated) {
      setCartCount(0);
      return;
    }

    const count = await getCartCount();
    setCartCount(count);
  };

  useEffect(() => {
    fetchCartCount();
  }, [isAuthenticated]);

  const handleLogout = async () => {
    await logout();
    setProfileOpen(false);
    setCartCount(0);
    window.location.href = "/";
  };

  return (
    <>
      {/* HEADER */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 w-full z-50 bg-gray-100/95 backdrop-blur border-b"
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* LOGO */}
          <Link href="/" className="text-4xl font-extrabold">
            SOLE<span className="text-primary">X</span>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-gray-700 hover:text-gray-900"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* ACTIONS */}
          <div className="flex items-center gap-5">
            {/* CART ICON */}
            <Link href="/cart" className="relative">
              <ShoppingBag className="w-6 h-6 text-gray-800" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* PROFILE / LOGIN */}
            {!isAuthenticated || !user ? (
              <Link
                href="/login"
                className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full bg-gray-800 text-white font-semibold"
              >
                <User className="w-5 h-5" />
                Login
              </Link>
            ) : (
              <div className="relative hidden md:flex">
                <button
                  onClick={handleProfileToggle}
                  className="w-10 h-10 rounded-full bg-green-500 text-white font-semibold shadow"
                  title={user.email}
                >
                  {user.email[0].toUpperCase()}
                </button>

                <AnimatePresence>
                  {profileOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-2 w-52 bg-white rounded-md shadow-lg z-50"
                    >
                      <div className="px-4 py-3 border-b font-medium">
                        {user.email}
                      </div>
                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-3 text-red-600 hover:bg-red-50 font-semibold"
                      >
                        Logout
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}

            {/* MOBILE MENU BTN */}
            <button
              onClick={() => setOpen(true)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-200"
            >
              <Menu className="w-7 h-7" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-gray-100 z-50"
          >
            <div className="flex justify-between items-center px-6 h-20 border-b">
              <Link href="/" className="text-3xl font-bold">
                SOLE<span className="text-primary">X</span>
              </Link>
              <button onClick={() => setOpen(false)}>
                <X className="w-7 h-7" />
              </button>
            </div>

            <nav className="flex flex-col gap-6 px-8 py-16">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-2xl font-semibold"
                >
                  {link.name}
                </Link>
              ))}

              {isAuthenticated && (
                <button
                  onClick={handleLogout}
                  className="mt-4 bg-red-500 text-white py-3 rounded-full font-semibold"
                >
                  Logout
                </button>
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
