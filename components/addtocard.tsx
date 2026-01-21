"use client";

import Image from "next/image";
import { useCart } from "@/context/cartcontext";

type Props = {
    product: {
        id: number;
        title: string;
        price: number;
        image: string;
    };
};

export default function ProductCard({ product }: Props) {
    const { addToCart } = useCart();

    return (
        <div className="rounded-2xl shadow-lg p-4 hover:shadow-xl transition ">
            <Image
                src={product.image}
                alt={product.title}
                width={300}
                height={300}
                className="rounded-xl"
            />

            <h3 className="mt-3 font-semibold">{product.title}</h3>
            <p className="text-gray-600">Rs {product.price}</p>

            <button
                onClick={() => addToCart(product)}
                className="mt-4 w-full bg-black text-white py-2 rounded-xl hover:bg-gray-800 transition"
            >
                Add to Cart
            </button>
        </div>
    );
}
