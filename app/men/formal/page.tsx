import ProductCard from "@/components/ProductCard";

export const metadata = {
  title: "Men’s Formal Trousers in Udaipur | Anand Fashion",
  description:
    "Explore men’s formal trousers at Anand Fashion, Udaipur. Office wear and classic formal trousers available in multiple fits and styles.",
};

export default function FormalTrousersPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">

      {/* ================= PAGE HEADER ================= */}
      <div className="space-y-3">
        <h1 className="text-3xl font-bold">Men’s Formal Trousers</h1>

        <p className="text-sm text-gray-600 leading-relaxed max-w-3xl">
          Discover a refined range of men’s formal trousers at Anand Fashion,
          Udaipur. Designed for office wear, business meetings and daily formal
          use with a focus on comfort and perfect fitting.
        </p>
      </div>

      {/* ================= FORMAL TROUSERS HUB ================= */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold">
          Explore Formal Trouser Collections
        </h2>

        <div
          className="
            flex gap-4 overflow-x-auto pb-3
            md:grid md:grid-cols-4 md:gap-6 md:overflow-visible
          "
        >
          <ProductCard
            name="View All Formal Trouser Collections"
            category="Men / Formal Trousers"
            image="/products/men/brands/formal-trousers.jpg"
          />
        </div>
      </section>

      {/* ================= STORE NOTE ================= */}
      <p className="text-sm text-gray-600 leading-relaxed max-w-3xl">
        Anand Fashion offers a curated selection of men’s formal trousers in
        Udaipur suitable for office wear and formal occasions. Brand-wise and
        fit-wise collections will be added after layout approval. Visit our
        store in Bhopalpura to explore the latest arrivals.
      </p>

    </div>
  );
}
