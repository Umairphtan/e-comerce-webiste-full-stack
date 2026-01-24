import Image from "next/image";
import { getProductById, getImageUrl } from "@/services/products";

interface Props {
  params: {
    id: string;
  };
}

export default async function ProductDetail({ params }: Props) {
  const product = await getProductById(params.id);

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <Image
        src={getImageUrl(product.image)}
        alt={product.title}
        width={500}
        height={500}
      />

      <div>
        <h1 className="text-3xl font-bold">{product.title}</h1>
        <p className="text-xl mt-2">Rs {product.price}</p>
        <p className="text-sm text-gray-500 mt-1">
          Category: {product.category}
        </p>
      </div>
    </div>
  );
}
