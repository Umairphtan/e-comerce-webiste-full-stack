import { Product } from "@/data/product";

interface Props {
    product: Product;
}

export default function ProductCard({ product }: Props) {
    return (
        <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded" />
            <h2 className="font-semibold text-lg">{product.name}</h2>
            <p className="text-gray-500">${product.price}</p>
        </div>
    );
}
