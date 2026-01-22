"use client";
import Link from "next/link";
import {
    LayoutDashboard,
    Package,
    ShoppingBag,
    Users,
    Settings,
} from "lucide-react";


export default function Sidebar() {
    return (
        <aside className="w-64 bg-slate-900 text-white p-6 hidden md:block mt-20">
            <h1 className="text-2xl font-bold mb-8">Admin Panel</h1>
            <nav className="space-y-4 text-lg">
                <Link href="/admin" className="flex items-center gap-2 hover:text-blue-400">
                    <LayoutDashboard size={18} /> Dashboard
                </Link>
                <Link href="/admin/products" className="flex items-center gap-2 hover:text-blue-400">
                    <Package size={18} /> Products
                </Link>
                <Link href="/admin/orders" className="flex items-center gap-2 hover:text-blue-400">
                    <ShoppingBag size={18} /> Orders
                </Link>
                <Link href="/admin/users" className="flex items-center gap-2 hover:text-blue-400">
                    <Users size={18} /> Users
                </Link>
                <Link href="/admin/settings" className="flex items-center gap-2 hover:text-blue-400">
                    <Settings size={18} /> Settings
                </Link>
            </nav>
        </aside>
    );
}