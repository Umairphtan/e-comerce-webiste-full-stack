"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-black via-zinc-900 to-black text-white">

            {/* Background glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_40%)]" />

            <div className="relative max-w-7xl mx-auto px-6 pt-32 grid grid-cols-1 lg:grid-cols-2 items-center gap-20">

                {/* LEFT CONTENT */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    className="space-y-8"
                >
                    <span className="inline-block px-4 py-1 text-sm rounded-full border border-white/20 backdrop-blur">
                        New Collection 2026
                    </span>

                    <h1 className="text-5xl md:text-6xl xl:text-7xl font-extrabold leading-tight">
                        Step Into
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400">
                            The Future
                        </span>
                    </h1>

                    <p className="text-gray-300 max-w-xl text-lg">
                        Premium performance footwear designed for movement,
                        crafted for modern lifestyle.
                    </p>

                    <div className="flex gap-4">
                        <Link
                            href="/category/women"
                            className="px-8 py-4 bg-white text-black rounded-xl font-semibold hover:scale-105 transition"
                        >
                            Shop Now
                        </Link>
                        <Link
                            href="/category/men"
                            className="px-8 py-4 border border-white/30 rounded-xl hover:bg-white/10 transition"
                        >
                            Explore Men
                        </Link>
                    </div>
                </motion.div>

                {/* RIGHT 3D SHOE */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    whileHover={{ rotateX: 10, rotateY: -10 }}
                    style={{ transformStyle: "preserve-3d" }}
                    className="relative flex justify-center"
                >
                    {/* Glow */}
                    <div className="absolute w-72 h-72 bg-white/10 blur-3xl rounded-full" />

                    <motion.img
                        src="/hero.jpg"
                        alt="Hero Shoe"
                        className="relative w-[280px] md:w-[380px] xl:w-[480px] drop-shadow-[0_40px_40px_rgba(0,0,0,0.6)]"
                        animate={{ y: [0, -15, 0] }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                </motion.div>
            </div>
        </section>
    );
}
