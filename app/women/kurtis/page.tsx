import ProductCard from "@/components/ProductCard";

export const metadata = {
  title: "Women’s Kurtis in Udaipur | Anand Fashion",
  description:
    "Explore stylish women’s kurtis at Anand Fashion, Udaipur. Comfortable and elegant kurtis available from multiple brands.",
};

export default function WomenKurtisPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">

      {/* ================= PAGE HEADER ================= */}
      <div className="space-y-3">
        <h1 className="text-3xl font-bold">Women’s Kurtis</h1>

        <p className="text-sm text-gray-600 leading-relaxed max-w-3xl">
          Discover a beautiful collection of women’s kurtis at Anand Fashion,
          Udaipur. Ideal for everyday wear, office and casual outings.
        </p>
      </div>

      {/* ================= KURTIS HUB ================= */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold">Kurti Collections</h2>

        <div
          className="
            flex gap-4 overflow-x-auto pb-3
            md:grid md:grid-cols-4 md:gap-6 md:overflow-visible
          "
        >
          <ProductCard
            name="Cotton Kurtis"
            category="Women / Kurtis"
            image="/products/women/kurtis/kurti-1.jpg"
          />

          <ProductCard
            name="Printed Kurtis"
            category="Women / Kurtis"
            image="/products/women/kurtis/kurti-2.jpg"
          />

          <ProductCard
            name="Straight Fit Kurtis"
            category="Women / Kurtis"
            image="/products/women/kurtis/kurti-3.jpg"
          />

          <ProductCard
            name="Designer Kurtis"
            category="Women / Kurtis"
            image="/products/women/kurtis/kurti-4.jpg"
          />
        </div>
      </section>

      {/* ================= NOTE ================= */}
      <p className="text-sm text-gray-600 leading-relaxed max-w-3xl">
        Women’s kurti collections from multiple brands are available at Anand
        Fashion, Udaipur. Brand-wise pages and detailed listings will be added
        after layout approval.
      </p>

    </div>
  );
}
