"use client";

import { products, Product } from "@/data/product";
import { useParams } from "next/navigation";
import ProductCard from "@/components/card";
import CategoryBanner from "@/components/baner";

export default function CategoryPage() {
    const params = useParams();
    const slug = params.slug;

    const categorySlug =
        typeof slug === "string" && slug !== "" ? slug.toLowerCase() : null;

    const filteredProducts: Product[] = categorySlug
        ? products.filter((product) => product.category === categorySlug)
        : [];

    return (
        <div className="container mx-auto px-4 py-10 mt-10">
        
            {categorySlug && <CategoryBanner category={categorySlug} />}

            {/* Heading */}
            {categorySlug ? (
                <h1 className="text-3xl font-bold capitalize mb-6">
                    {categorySlug} Products
                </h1>
            ) : (
                <h1 className="text-3xl font-bold mb-6">Category Not Found</h1>
            )}

    
            {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            ) : (
                <p className="text-center mt-10 text-xl text-gray-500">
                    No products found in this category.
                </p>
            )}
        </div>
    );
}
