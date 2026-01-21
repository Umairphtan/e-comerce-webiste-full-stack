// components/ContactForm.tsx
"use client";

import { motion } from "framer-motion";

export default function ContactForm() {
    return (
        <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white p-8 rounded-2xl shadow-lg space-y-5"
        >
            <h2 className="text-2xl font-bold mb-2">
                Send Us a Message
            </h2>

            <div>
                <label className="text-sm font-medium">Name</label>
                <input
                    type="text"
                    placeholder="Your full name"
                    className="w-full mt-1 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
                />
            </div>

            <div>
                <label className="text-sm font-medium">Email</label>
                <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full mt-1 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
                />
            </div>

            <div>
                <label className="text-sm font-medium">Message</label>
                <textarea
                    rows={5}
                    placeholder="Write your message..."
                    className="w-full mt-1 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
                />
            </div>

            <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition"
            >
                Send Message
            </button>

            <p className="text-xs text-gray-500 text-center">
                We respect your privacy. Your data is safe with us.
            </p>
        </motion.form>
    );
}
