"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type ProductCardProps = {
  name: string;
  category?: string;
  price?: string;
  image?: string;
  href?: string; // 👉 NEW (for brand / collection cards)
};

export default function ProductCard({
  name,
  category,
  price,
  image,
  href,
}: ProductCardProps) {
  const [loaded, setLoaded] = useState(false);

  const phoneNumber = "919214456664";

  const message = encodeURIComponent(
    `Hello Anand Fashion 👋\nI am interested in:\n\n• Product: ${name}${
      category ? `\n• Category: ${category}` : ""
    }${price ? `\n• Price: ${price}` : ""}\n\nPlease share available sizes & colours.`
  );

  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/${phoneNumber}?text=${message}`,
      "_blank"
    );
  };

  /* ================= CARD UI ================= */

  const CardUI = (
    <div
      className="
        bg-white rounded-xl border border-gray-200 p-4
        hover:shadow-md transition
        min-w-[220px] md:min-w-0
        h-full
      "
    >
      {/* IMAGE AREA */}
      <div className="relative h-40 rounded-lg overflow-hidden mb-3 bg-gray-100">
        {/* Skeleton Loader */}
        {!loaded && (
          <div className="absolute inset-0 animate-pulse bg-gray-200" />
        )}

        {/* Image */}
        <Image
          src={image || "/placeholder.jpg"}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 220px, 300px"
          onLoad={() => setLoaded(true)}
        />
      </div>

      {/* TEXT */}
      <div className="font-medium">{name}</div>

      {category && (
        <div className="text-xs text-gray-500 mt-1">{category}</div>
      )}

      {price && (
        <div className="text-sm text-gray-700 mt-1">{price}</div>
      )}

      {/* CTA */}
      {href ? (
        <div className="mt-3 text-sm font-medium text-black">
          View Collection →
        </div>
      ) : (
        <button
          onClick={handleWhatsApp}
          className="w-full mt-3 bg-green-500 hover:bg-green-600 text-white text-sm py-2 rounded-lg transition"
        >
          Enquire on WhatsApp
        </button>
      )}
    </div>
  );

  /* ================= LINK WRAPPER ================= */

  if (href) {
    return (
      <Link href={href} className="block h-full">
        {CardUI}
      </Link>
    );
  }

  return CardUI;
}
