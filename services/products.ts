import http from "@/services/http";
import { Product } from "@/types/produuct";

interface ProductResponse {
    success: boolean;
    count: number;
    products: Product[];
}

// Category wise products
export const getProductsByCategory = async (
    category: string
): Promise<Product[]> => {
    const res = await http.get<ProductResponse>(
        `/product/category/${category}`
    );

    return res.data.products;
};

// All products
export const getAllProducts = async (): Promise<Product[]> => {
    const res = await http.get<ProductResponse>("/product");
    return res.data.products;
};
