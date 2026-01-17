export type Category = "men" | "women" | "accessories";

export interface Product {
    id: string;
    name: string;
    category: Category;
    brand: string;
    price: number;
}
