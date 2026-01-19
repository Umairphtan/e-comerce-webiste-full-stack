"use client";

import Image from "next/image";

const bannerMap: Record<string, string> = {
  men: "/men.jpg",
  women: "/women.jpg",
  accessories: "/banners/accessories.jpg",
};

export default function CategoryBanner({ category }: { category: string }) {
  const imageSrc = bannerMap[category];

  if (!imageSrc) return null;

  return (
    <div className="relative h-[340px] w-full mb-10 rounded-2xl overflow-hidden mt-6">
      <Image
        src={imageSrc}
        alt={`${category} banner`}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/50 flex items-center px-10">
        <h1 className="text-4xl text-white font-bold capitalize">
          {category} Collection
        </h1>
      </div>
    </div>
  );
}
