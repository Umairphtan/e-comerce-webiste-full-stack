export interface Product {
  id: number;
  name: string;
  category: "men" | "women" | "accessories";
  price: number;
  image: string;
}

export const products: Product[] = [
  { id: 1, name: "Men's Sneakers", category: "men", price: 50, image: "/images/men1.jpg" },
  { id: 2, name: "Women's Dress", category: "men", price: 70, image: "/images/women1.jpg" },
  { id: 3, name: "Watch", category: "accessories", price: 100, image: "/images/accessory1.jpg" },
  { id: 4, name: "Men's Jacket", category: "women", price: 120, image: "/images/men2.jpg" },
  { id: 5, name: "Women's Shoes", category: "women", price: 80, image: "/images/women2.jpg" },
];
