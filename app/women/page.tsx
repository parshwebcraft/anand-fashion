import ProductCard from "@/components/ProductCard";
import ProductRow from "@/components/ProductRow";

export const metadata = {
  title: "Ladies Clothing Store in Udaipur | Anand Fashion",
  description:
    "Explore ladies suits, kurtis, jeans, tops and one-piece dresses at Anand Fashion, Udaipur. Stylish and comfortable collections for everyday and festive wear.",
};

export default function LadiesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-20">

      {/* ================= PAGE HEADER ================= */}
      <div className="space-y-3">
        <h1 className="text-3xl font-bold">Ladies Collection</h1>

        <p className="text-sm text-gray-600 leading-relaxed max-w-3xl">
          Discover stylish and comfortable ladies wear at Anand Fashion,
          Udaipur. Browse our curated collection of suits, kurtis, jeans,
          tops and one-piece dresses suitable for daily wear, office and
          festive occasions.
        </p>
      </div>

      {/* ================= WOMEN CATEGORIES HUB ================= */}
      <Section title="Shop By Category">

        {/* SUITS */}
        <ProductRow
          title="Suits"
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
          title="Kurtis"
          description="Comfortable and stylish kurtis available in cotton, printed and designer styles."
        >
          <ProductCard
            name="View All Kurti Collections"
            category="Women / Kurtis"
            image="/products/women/categories/kurtis.jpg"
            href="/women/kurtis"
          />
        </ProductRow>

        {/* JEANS */}
        <ProductRow
          title="Jeans"
          description="Modern ladies jeans available in different fits for everyday and casual wear."
        >
          <ProductCard
            name="View All Jeans Collections"
            category="Women / Jeans"
            image="/products/women/categories/jeans.jpg"
            href="/women/jeans"
          />
        </ProductRow>

        {/* TOPS */}
        <ProductRow
          title="Tops"
          description="Stylish ladies tops suitable for office wear and casual outings."
        >
          <ProductCard
            name="View All Tops Collections"
            category="Women / Tops"
            image="/products/women/categories/tops.jpg"
            href="/women/tops"
          />
        </ProductRow>

        {/* ONE-PIECE */}
        <ProductRow
          title="One-Piece Dresses"
          description="Trendy one-piece dresses ideal for parties and casual occasions."
        >
          <ProductCard
            name="View All One-Piece Collections"
            category="Women / One-Piece"
            image="/products/women/categories/one-piece.jpg"
            href="/women/one-piece"
          />
        </ProductRow>

      </Section>

      {/* ================= SEO / LOCAL TEXT ================= */}
      <p className="text-sm text-gray-600 leading-relaxed max-w-3xl">
        Anand Fashion is a trusted ladies clothing store in Udaipur offering
        suits, kurtis, jeans, tops and one-piece dresses. Visit our store in
        Bhopalpura to explore the latest collections and check availability.
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
