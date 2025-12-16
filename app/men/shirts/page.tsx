import ProductCard from "@/components/ProductCard";
import ProductRow from "@/components/ProductRow";

export const metadata = {
  title: "Men’s Shirts in Udaipur",
  description:
    "Explore branded men’s shirts in Udaipur at Anand Fashion. Formal and casual shirts available in multiple sizes and colours.",
};

export default function MenShirtsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-20">

      {/* PAGE HEADER */}
      <div className="space-y-3">
        <h1 className="text-3xl font-bold">Men’s Shirts</h1>
        <p className="text-sm text-gray-600 max-w-3xl">
          Discover premium branded men’s shirts at Anand Fashion, Udaipur.
          Choose from trusted brands and explore formal & casual styles.
        </p>
      </div>

      {/* SHIRT BRANDS */}
      <ProductRow
        title="Shirt Brands"
        description="Select a brand to view available designs, colours and sizes."
      >
        <ProductCard
          name="Charcoal Shirts"
          category="Men / Shirts"
          image="/products/men/brands/charcoal.jpg"
          href="/men/shirts/charcoal"
        />

        <ProductCard
          name="Aeromen Shirts"
          category="Men / Shirts"
          image="/products/men/brands/aeromen.jpg"
          href="/men/shirts/aeromen"
        />

    
        <ProductCard
          name="Structuren Cargo Shirts"
          category="Men / Shirts"
          image="/products/men/brands/StructurenCargo.jpg"
          href="/men/shirts/structuren-cargo"
        />

      </ProductRow>

      {/* SEO TEXT */}
      <p className="text-sm text-gray-600 leading-relaxed max-w-3xl">
        Anand Fashion is a trusted men’s clothing store in Udaipur offering
        high-quality branded shirts. Visit our store in Bhopalpura or contact us
        on WhatsApp for latest designs, sizes and availability.
      </p>

    </div>
  );
}
