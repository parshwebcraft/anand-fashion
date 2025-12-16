import ProductCard from "@/components/ProductCard";

export const metadata = {
  title: "Men’s Cargo Pants in Udaipur | Anand Fashion",
  description:
    "Explore stylish and comfortable men’s cargo pants at Anand Fashion, Udaipur. Multiple brands and fits available. Visit store or enquire on WhatsApp.",
};

export default function MenCargoPantsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">

      {/* ================= PAGE HEADER ================= */}
      <div className="space-y-3">
        <h1 className="text-3xl font-bold">Men’s Cargo Pants</h1>

        <p className="text-sm text-gray-600 leading-relaxed max-w-3xl">
          Discover a versatile range of men’s cargo pants at Anand Fashion,
          Udaipur. Designed for comfort and utility, our cargo pants are
          suitable for casual wear, travel and everyday styling.
        </p>
      </div>

      {/* ================= CARGO PANTS HUB ================= */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold">Cargo Pants Collection</h2>

        <div
          className="
            flex gap-4 overflow-x-auto pb-3
            md:grid md:grid-cols-4 md:gap-6 md:overflow-visible
          "
        >
          <ProductCard
            name="Men’s Cargo Pants"
            category="Men / Cargo Pants"
            image="/products/men/cargo/cargo-1.jpg"
          />

          <ProductCard
            name="Slim Fit Cargo Pants"
            category="Men / Cargo Pants"
            image="/products/men/cargo/cargo-2.jpg"
          />

          <ProductCard
            name="Cotton Cargo Pants"
            category="Men / Cargo Pants"
            image="/products/men/cargo/cargo-3.jpg"
          />

          <ProductCard
            name="Casual Cargo Pants"
            category="Men / Cargo Pants"
            image="/products/men/cargo/cargo-4.jpg"
          />
        </div>
      </section>

      {/* ================= NOTE FOR CLIENT ================= */}
      <p className="text-sm text-gray-600 leading-relaxed max-w-3xl">
        Cargo pants from multiple brands are available at Anand Fashion in
        Udaipur. Brand-wise collections, detailed product listings and
        enquiry options will be added after layout approval.
      </p>

    </div>
  );
}
