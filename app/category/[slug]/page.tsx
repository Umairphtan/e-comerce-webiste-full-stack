"use client";

import { products, Product } from "@/data/product";
import { useParams } from "next/navigation";
import ProductCard from "@/components/card";

export default function CategoryPage() {
    const params = useParams();
    const categorySlug = params.slug?.toLowerCase();

    const filteredProducts: Product[] = products.filter(
        (product) => product.category === categorySlug
    );

    if (!filteredProducts.length) {
        return <p className="text-center mt-10 text-xl">No products found in this category.</p>;
    }

    return (
        <div className="container mx-auto px-4 py-10 mt-10">
            <h1 className="text-3xl font-bold capitalize mb-6">{categorySlug} Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}
