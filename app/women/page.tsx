import ProductCard from "@/components/ProductCard";
import ProductRow from "@/components/ProductRow";

export const metadata = {
  title: "Women’s Clothing in Udaipur | Anand Fashion",
  description:
    "Explore women’s suits and kurtis at Anand Fashion, Udaipur. Elegant ethnic wear available from multiple brands.",
};

export default function WomenPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-20">

      {/* ================= PAGE HEADER ================= */}
      <div className="space-y-3">
        <h1 className="text-3xl font-bold">Women’s Collection</h1>

        <p className="text-sm text-gray-600 leading-relaxed max-w-3xl">
          Discover elegant and comfortable women’s ethnic wear at Anand Fashion,
          Udaipur. Browse our curated collection of suits and kurtis suitable
          for daily wear, office and festive occasions.
        </p>
      </div>

      {/* ================= WOMEN CATEGORIES HUB ================= */}
      <Section title="Shop By Category">

        {/* SUITS */}
        <ProductRow
          title="Women’s Suits"
          description="Elegant suit sets suitable for daily wear, office and festive occasions."
        >
          <ProductCard
            name="View All Suit Collections"
            category="Women / Suits"
            image="/products/women/categories/suits.jpg"
            href="/women/suits"
          />
        </ProductRow>

        {/* KURTIS */}
        <ProductRow
          title="Women’s Kurtis"
          description="Comfortable and stylish kurtis available in cotton, printed and designer styles."
        >
          <ProductCard
            name="View All Kurti Collections"
            category="Women / Kurtis"
            image="/products/women/categories/kurtis.jpg"
            href="/women/kurtis"
          />
        </ProductRow>

      </Section>

      {/* ================= SEO / LOCAL TEXT ================= */}
      <p className="text-sm text-gray-600 leading-relaxed max-w-3xl">
        Anand Fashion offers a curated range of women’s ethnic wear in Udaipur,
        including suits and kurtis suitable for everyday wear and special
        occasions. Visit our store in Bhopalpura for the latest collections
        and availability.
      </p>

    </div>
  );
}

/* ================= SECTION COMPONENT ================= */

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
