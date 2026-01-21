// components/ContactInfo.tsx
"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const info = [
    {
        icon: Phone,
        title: "Call Us",
        value: "+92 326 0611 728",
    },
    {
        icon: Mail,
        title: "Email",
        value: "uk2039487@gmail.com",
    },
    {
        icon: MapPin,
        title: "Location",
        value: "Lahore, Pakistan",
    },
];

export default function ContactInfo() {
    return (
        <div className="space-y-6">
            <h2 className="text-3xl font-bold">Get in Touch</h2>
            <p className="text-gray-600">
                Our support team usually responds within 24 hours.
            </p>

            <div className="space-y-4">
                {info.map((item, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ x: 6 }}
                        className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl shadow-sm"
                    >
                        <item.icon className="w-6 h-6 text-black" />
                        <div>
                            <p className="font-semibold">{item.title}</p>
                            <p className="text-gray-600 text-sm">{item.value}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
