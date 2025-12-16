import ProductCard from "@/components/ProductCard";

export const metadata = {
  title: "Women’s Suits in Udaipur | Anand Fashion",
  description:
    "Explore women’s suits at Anand Fashion, Udaipur. Elegant suit sets available from multiple brands.",
};

export default function WomenSuitsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">

      {/* ================= PAGE HEADER ================= */}
      <div className="space-y-3">
        <h1 className="text-3xl font-bold">Women’s Suits</h1>

        <p className="text-sm text-gray-600 leading-relaxed max-w-3xl">
          Explore a stylish range of women’s suits at Anand Fashion, Udaipur.
          Perfect for daily wear, office use and festive occasions.
        </p>
      </div>

      {/* ================= SUITS HUB ================= */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold">Suit Collections</h2>

        <div
          className="
            flex gap-4 overflow-x-auto pb-3
            md:grid md:grid-cols-4 md:gap-6 md:overflow-visible
          "
        >
          <ProductCard
            name="Cotton Suits"
            category="Women / Suits"
            image="/products/women/suits/suit-1.jpg"
          />

          <ProductCard
            name="Printed Suits"
            category="Women / Suits"
            image="/products/women/suits/suit-2.jpg"
          />

          <ProductCard
            name="Festive Suits"
            category="Women / Suits"
            image="/products/women/suits/suit-3.jpg"
          />

          <ProductCard
            name="Designer Suits"
            category="Women / Suits"
            image="/products/women/suits/suit-4.jpg"
          />
        </div>
      </section>

      {/* ================= NOTE ================= */}
      <p className="text-sm text-gray-600 leading-relaxed max-w-3xl">
        Women’s suit collections from multiple brands are available at Anand
        Fashion, Udaipur. Brand-wise pages and enquiry options will be added
        after layout approval.
      </p>

    </div>
  );
}
