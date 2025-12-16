import ProductCard from "@/components/ProductCard";
import ProductRow from "@/components/ProductRow";

export const metadata = {
  title: "Premium Wear Store in Udaipur | Anand Fashion",
  description:
    "Explore premium wear in Udaipur at Anand Fashion. Browse blazers, sherwani, party wear and wedding wear collections.",
};

export default function PremiumPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-20">

      {/* ================= PAGE HEADER ================= */}
      <div className="space-y-3">
        <h1 className="text-3xl font-bold">Premium Collection</h1>

        <p className="text-sm text-gray-600 leading-relaxed max-w-3xl">
          Discover an exclusive premium clothing collection at Anand Fashion,
          Udaipur. Designed for weddings, parties and special occasions,
          our premium wear reflects elegance, craftsmanship and style.
        </p>
      </div>

      {/* ================= PREMIUM CATEGORIES HUB ================= */}
      <Section title="Shop Premium Categories">

        {/* BLAZERS */}
        <ProductRow
          title="Blazers"
          description="Elegant premium blazers suitable for weddings, parties and formal occasions."
        >
          <ProductCard
            name="View Blazer Collection"
            category="Premium / Blazers"
            image="/products/premium/categories/blazers.jpg"
            href="/premium/blazers"
          />
        </ProductRow>

        {/* SHERWANI */}
        <ProductRow
          title="Sherwani"
          description="Premium sherwani collections crafted for weddings and festive occasions."
        >
          <ProductCard
            name="View Sherwani Collection"
            category="Premium / Sherwani"
            image="/products/premium/categories/sherwani.jpg"
            href="/premium/sherwani"
          />
        </ProductRow>

        {/* PARTY WEAR */}
        <ProductRow
          title="Party Wear"
          description="Stylish premium party wear designed for celebrations and evening events."
        >
          <ProductCard
            name="View Party Wear Collection"
            category="Premium / Party Wear"
            image="/products/premium/categories/party.jpg"
            href="/premium/party-wear"
          />
        </ProductRow>

        {/* WEDDING WEAR */}
        <ProductRow
          title="Wedding Wear"
          description="Exclusive wedding and occasion wear created for memorable moments."
        >
          <ProductCard
            name="View Wedding Wear Collection"
            category="Premium / Wedding Wear"
            image="/products/premium/categories/wedding.jpg"
            href="/premium/wedding-wear"
          />
        </ProductRow>

      </Section>

      {/* ================= SEO / LOCAL TEXT ================= */}
      <p className="text-sm text-gray-600 leading-relaxed max-w-3xl">
        Anand Fashion is a trusted premium wear store in Udaipur offering
        elegant blazers, sherwani, party wear and wedding outfits. Visit our
        store in Bhopalpura to explore premium collections tailored for
        special occasions.
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
    <section className="space-y-12">
      <h2 className="text-2xl font-semibold">{title}</h2>
      {children}
    </section>
  );
}
