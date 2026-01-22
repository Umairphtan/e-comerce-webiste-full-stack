"use client";
import { LogOut } from "lucide-react";


export default function Topbar() {
    return (
        <header className="h-16 bg-white border-b flex items-center justify-between px-6 mt-20">
            <h1 className="font-semibold text-slate-700 text-2xl" >Admin Dashboard</h1>
            <button className="flex items-center gap-2 text-lg text-slate-600 hover:text-red-600">
                <LogOut size={16} /> Logout
            </button>
        </header>
    );
}   