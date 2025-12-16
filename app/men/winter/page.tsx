import ProductCard from "@/components/ProductCard";

export const metadata = {
  title: "Men’s Winter Wear in Udaipur | Anand Fashion",
  description:
    "Explore men’s winter wear at Anand Fashion, Udaipur. Sweatshirts, jackets, sweaters and hoodies available from multiple brands.",
};

export default function MenWinterWearPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">

      {/* ================= PAGE HEADER ================= */}
      <div className="space-y-3">
        <h1 className="text-3xl font-bold">Men’s Winter Wear</h1>

        <p className="text-sm text-gray-600 leading-relaxed max-w-3xl">
          Stay warm and stylish this season with men’s winter wear from
          Anand Fashion, Udaipur. Explore comfortable and trendy options
          suitable for daily wear and casual outings.
        </p>
      </div>

      {/* ================= WINTER WEAR HUB ================= */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold">Winter Wear Collection</h2>

        <div
          className="
            flex gap-4 overflow-x-auto pb-3
            md:grid md:grid-cols-4 md:gap-6 md:overflow-visible
          "
        >
          <ProductCard
            name="Sweatshirts"
            category="Men / Winter Wear"
            image="/products/men/winter/sweatshirt.jpg"
          />

          <ProductCard
            name="Jackets"
            category="Men / Winter Wear"
            image="/products/men/winter/jacket.jpg"
          />

          <ProductCard
            name="Sweaters"
            category="Men / Winter Wear"
            image="/products/men/winter/sweater.jpg"
          />

          <ProductCard
            name="Hoodies"
            category="Men / Winter Wear"
            image="/products/men/winter/hoodie.jpg"
          />
        </div>
      </section>

      {/* ================= NOTE FOR CLIENT ================= */}
      <p className="text-sm text-gray-600 leading-relaxed max-w-3xl">
        Men’s winter wear from multiple brands is available at Anand Fashion
        in Udaipur. Detailed brand-wise collections and enquiry options will
        be added after layout approval.
      </p>

    </div>
  );
}
