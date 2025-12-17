import ProductCard from "@/components/ProductCard";
import ProductRow from "@/components/ProductRow";

export const metadata = {
  title: "Men’s Shirts in Udaipur | Anand Fashion",
  description:
    "Explore men’s shirts at Anand Fashion, Udaipur. Browse formal, casual and party wear shirts available in multiple styles and sizes.",
};

export default function MenShirtsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-20">

      {/* ================= PAGE HEADER ================= */}
      <div className="space-y-3">
        <h1 className="text-3xl font-bold">Men’s Shirts</h1>

        <p className="text-sm text-gray-600 max-w-3xl">
          Discover a premium collection of men’s shirts at Anand Fashion,
          Udaipur. Explore formal, casual and party wear shirt categories
          designed for comfort, style and perfect fitting.
        </p>
      </div>

      {/* ================= SHIRT CATEGORIES ================= */}
      <ProductRow
        title="Shop by Shirt Type"
        description="Choose a shirt category to explore available designs, colours and fits."
      >
        <ProductCard
          name="Formal Shirts"
          category="Men / Shirts"
          image="/products/men/brands/charcoal.jpg"
          href="/men/shirts/aeromen" 
        />

        <ProductCard
          name="Casual Shirts"
          category="Men / Shirts"
          image="/products/men/brands/aeromen.jpg"
          href="/men/shirts/charcoal"
        />

        <ProductCard
          name="Party Wear Shirts"
          category="Men / Shirts"
          image="/products/men/brands/structuren-cargo.jpg"
          href="/men/shirts/structuren-cargo"
        />
      </ProductRow>

      {/* ================= SEO / LOCAL TEXT ================= */}
      <p className="text-sm text-gray-600 leading-relaxed max-w-3xl">
        Anand Fashion is a trusted men’s clothing store in Udaipur offering
        a curated range of formal, casual and party wear shirts. Visit our
        store in Bhopalpura to explore the latest collections and check
        size availability.
      </p>

    </div>
  );
}
