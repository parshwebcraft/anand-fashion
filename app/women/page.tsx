import ProductCard from "@/components/ProductCard";
import ProductRow from "@/components/ProductRow";

export const metadata = {
  title: "Women’s Clothing Store in Udaipur",
  description:
    "Anand Fashion offers elegant women’s wear in Udaipur including suits, kurtis, co-ord sets and winter wear.",
};

export default function WomenPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-20">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold">Women’s Collection</h1>
        <p className="mt-2 text-gray-600">
          Elegant summer and winter wear for women
        </p>
      </div>

      {/* ===== SUMMER WEAR ===== */}
      <Section title="Summer Wear">
        <ProductRow title="Suits">
          <ProductCard
            name="Designer Suit Set"
            price="₹2,499"
            category="Women / Suits"
            image="/products/women/Suits.jpg"
          />
          <ProductCard
            name="Cotton Printed Suit"
            price="₹1,999"
            category="Women / Suits"
            image="/products/women/Suits.jpg"
          />
        </ProductRow>

        <ProductRow title="Co-ord Sets">
          <ProductCard
            name="Floral Co-ord Set"
            price="₹2,199"
            category="Women / Co-ord Sets"
            image="/products/women/Co-ord Sets-2.jpg"
          />
          <ProductCard
            name="Solid Co-ord Set"
            price="₹1,899"
            category="Women / Co-ord Sets"
            image="/products/women/Co-ord Sets-1.jpg"
          />
        </ProductRow>

        <ProductRow title="Kurtis">
          <ProductCard
            name="Printed Kurti"
            price="₹1,499"
            category="Women / Kurtis"
            image="/products/women/kurti-1.jpg"
          />

          <ProductCard
            name="Rayon Long Kurti"
            price="₹1,699"
            category="Women / Kurtis"
            image="/products/women/kurti-2.jpg"
          />
        </ProductRow>
      </Section>

      {/* ===== WINTER WEAR ===== */}
      <Section title="Winter Wear">
        <ProductRow title="Sweaters, Jackets & Shawls">
          <ProductCard
            name="Women Winter Sweater"
            price="₹2,299"
            category="Women / Winter Wear"
            image="/products/women/kurti-1.jpg"
          />
          <ProductCard
            name="Warm Shawl"
            price="₹1,799"
            category="Women / Winter Wear"
            image="/products/women/kurti-1.jpg"
          />
        </ProductRow>
      </Section>
    </div>
  );
}
<p className="text-sm text-gray-600 leading-relaxed max-w-3xl">
  Anand Fashion is a well-known women’s clothing store in Udaipur offering a
  beautiful range of suits, kurtis, co-ord sets and winter wear. Located in
  Bhopalpura, Udaipur, our store is trusted for quality fabrics, latest designs
  and affordable prices for everyday and festive wear.
</p>

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
