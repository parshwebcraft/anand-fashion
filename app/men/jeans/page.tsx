
import ProductCard from "@/components/ProductCard";
import ProductRow from "@/components/ProductRow";

export const metadata = {
  title: "Men’s Jeans in Udaipur | Anand Fashion",
  description:
    "Explore branded men’s jeans at Anand Fashion, Udaipur. Discover Killer Jeans and Privilege Jeans in multiple fits and styles.",
};

export default function MenJeansPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">

      {/* ================= PAGE HEADER ================= */}
      <div className="space-y-3">
        <h1 className="text-3xl font-bold">Men’s Jeans</h1>

        <p className="text-sm text-gray-600 leading-relaxed max-w-3xl">
          Discover premium quality men’s jeans at Anand Fashion, Udaipur.
          Choose from trusted brands offering slim fit and regular fit styles
          for everyday comfort and durability.
        </p>
      </div>

      {/* ================= JEANS BRANDS HUB ================= */}
      <ProductRow
        title="Jeans Brands"
        description="Select a brand to view available designs, colours and sizes."
      >
        <ProductCard
          name="Slim Fit Jeans"
          category="Men / Jeans"
          image="/products/men/brands/killer.jpg"
          href="/men/jeans/killer"
        />

        <ProductCard
          name="Comfort Narrow Jeans"
          category="Men / Jeans"
          image="/products/men/brands/privilege.jpg"
          href="/men/jeans/privilege"
        />
        <ProductCard
          name="Straight Fit Jeans"
          category="Men / Jeans"
          image="/products/men/brands/privilege.jpg"
          href="/men/jeans/straight-fit"
        />



    
      </ProductRow>

      {/* ================= STORE NOTE ================= */}
      <p className="text-sm text-gray-600 leading-relaxed max-w-3xl">
        Anand Fashion is a trusted men’s clothing store in Udaipur offering
        branded jeans with comfortable fits and long-lasting fabric. Visit our
        store in Bhopalpura or browse individual brands to enquire about sizes
        and colours.
      </p>

    </div>
  );
}
