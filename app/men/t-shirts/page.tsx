import ProductCard from "@/components/ProductCard";

export const metadata = {
  title: "Men’s T-Shirts in Udaipur | Anand Fashion",
  description:
    "Explore men’s T-shirts at Anand Fashion, Udaipur. Browse comfortable and stylish T-shirt collections from trusted brands.",
};

export default function MenTshirtsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">

      {/* ================= PAGE HEADER ================= */}
      <div className="space-y-3">
        <h1 className="text-3xl font-bold">Men’s T-Shirts</h1>

        <p className="text-sm text-gray-600 leading-relaxed max-w-3xl">
          Discover a stylish range of men’s T-shirts at Anand Fashion, Udaipur.
          Our T-shirt collection focuses on comfort, modern designs and
          everyday wear suitability.
        </p>
      </div>

      {/* ================= T-SHIRTS COLLECTION HUB ================= */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold">Explore T-Shirt Collections</h2>

        <div
          className="
            flex gap-4 overflow-x-auto pb-3
            md:grid md:grid-cols-4 md:gap-6 md:overflow-visible
          "
        >
          <ProductCard
            name="View T-Shirt Collections"
            category="Men / T-Shirts"
            image="/products/men/tshirts/brands/tshirts-hub.jpg"
          />

          <ProductCard
            name="All Branded T-Shirts"
            category="Men / T-Shirts"
            image="/products/men/tshirts/brands/all-brands.jpg"
          />
        </div>
      </section>

      {/* ================= STORE NOTE ================= */}
      <p className="text-sm text-gray-600 leading-relaxed max-w-3xl">
        Anand Fashion offers a curated range of men’s T-shirts in Udaipur,
        including casual and everyday wear styles. Brand-wise collections will
        be added after layout approval. Visit our store in Bhopalpura to explore
        the latest arrivals.
      </p>

    </div>
  );
}
