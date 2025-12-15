import ProductCard from "@/components/ProductCard";
import ProductRow from "@/components/ProductRow";

export const metadata = {
  title: "Premium Wear Store in Udaipur",
  description:
    "Discover premium clothing in Udaipur at Anand Fashion. Blazers, sherwani, wedding wear and party wear available.",
};

export default function PremiumPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-20 overflow-x-hidden">
      
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold">Premium Collection</h1>
        <p className="mt-2 text-gray-600">
          Exclusive premium wear for weddings, parties & special occasions
        </p>
      </div>

      {/* ===== PREMIUM WEAR ===== */}
      <Section title="Premium Wear">

        <ProductRow title="Blazers">
          <ProductCard
            name="Men Formal Blazer"
            price="₹4,999"
            category="Premium / Blazers"
            image="/products/premium/blazer-2.jpg"
          />
          <ProductCard
            name="Slim Fit Party Blazer"
            price="₹6,499"
            category="Premium / Blazers"
            image="/products/premium/blazer-1.jpg"
          />
        </ProductRow>

        <ProductRow title="Sherwani">
          <ProductCard
            name="Wedding Sherwani"
            price="₹9,999"
            category="Premium / Sherwani"
            image="/products/premium/sherwani-1.jpg"
          />
          <ProductCard
            name="Designer Sherwani"
            price="₹12,499"
            category="Premium / Sherwani"
            image="/products/premium/sherwani-2.jpg"
          />
        </ProductRow>

        <ProductRow title="Party Wear">
          <ProductCard
            name="Party Suit Set"
            price="₹7,499"
            category="Premium / Party Wear"
            image="/products/premium/party-wear-1.jpg"
          />
          <ProductCard
            name="Evening Wear Set"
            price="₹8,999"
            category="Premium / Party Wear"
            image="/products/premium/party-wear-2.jpg"
          />
        </ProductRow>

        <ProductRow title="Wedding & Occasion Wear">
          <ProductCard
            name="Premium Wedding Set"
            price="₹14,999"
            category="Premium / Wedding Wear"
            image="/products/premium/wedding-wear-1.jpg"
          />
          <ProductCard
            name="Festive Occasion Wear"
            price="₹11,999"
            category="Premium / Wedding Wear"
            image="/products/premium/wedding-wear-2.jpg"
          />
        </ProductRow>

      </Section>

      {/* SEO TEXT */}
      <p className="text-sm text-gray-600 leading-relaxed max-w-3xl">
        Anand Fashion offers premium clothing in Udaipur for weddings, parties
        and special occasions. Our premium collection includes blazers,
        sherwani, party wear and wedding outfits crafted with attention to
        detail and elegant styling. Visit our store in Bhopalpura, Udaipur for
        exclusive premium wear.
      </p>

    </div>
  );
}

/* ================= SECTION ================= */

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-10">
      <h2 className="text-2xl font-semibold">{title}</h2>
      {children}
    </section>
  );
}

/* ================= PRODUCT ROW ================= */


