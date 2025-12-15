"use client";

import { useState } from "react";
import Image from "next/image";

type ProductCardProps = {
  name: string;
  price: string;
  category: string;
  image: string; // image path
};

export default function ProductCard({
  name,
  price,
  category,
  image,
}: ProductCardProps) {
  const [loaded, setLoaded] = useState(false);
  const phoneNumber = "919214456664";

  const message = encodeURIComponent(
    `Hello Anand Fashion 👋\nI am interested in:\n\n• Product: ${name}\n• Category: ${category}\n• Price: ${price}\n\nPlease share more details.`
  );

  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/${phoneNumber}?text=${message}`,
      "_blank"
    );
  };

  return (
    <div
      className="
        bg-white rounded-xl border border-gray-200 p-4
        hover:shadow-md transition
        min-w-[220px] md:min-w-0
      "
    >
      {/* IMAGE AREA */}
      <div className="relative h-40 rounded-lg overflow-hidden mb-3 bg-gray-100">
        
        {/* Skeleton */}
        {!loaded && (
          <div className="absolute inset-0 animate-pulse bg-gray-200" />
        )}

        {/* Real Image */}
        <Image
  src={image || "/placeholder.jpg"}
  alt={name}
  fill
  className="object-cover"
  sizes="(max-width: 768px) 220px, 300px"
  onLoad={() => setLoaded(true)}
/>

      </div>

      <div className="font-medium">{name}</div>
      <div className="text-sm text-gray-600 mb-3">{price}</div>

      <button
        onClick={handleWhatsApp}
        className="w-full bg-green-500 hover:bg-green-600 text-white text-sm py-2 rounded-lg transition"
      >
        Enquire on WhatsApp
      </button>
    </div>
  );
}
