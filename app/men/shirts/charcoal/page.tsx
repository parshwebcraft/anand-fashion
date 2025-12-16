import ProductCard from "@/components/ProductCard";

export const metadata = {
  title: "Charcoal Shirts for Men in Udaipur",
  description:
    "Shop Charcoal branded shirts for men in Udaipur at Anand Fashion. Available in multiple colours, fits and sizes.",
};

export default function CharcoalShirtsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">

      {/* ================= PAGE HEADER ================= */}
      <div className="space-y-3">
        <h1 className="text-3xl font-bold">Charcoal Shirts</h1>

        <p className="text-sm text-gray-600 leading-relaxed max-w-3xl">
          Explore premium Charcoal branded shirts for men at Anand Fashion,
          Udaipur. Available in formal and casual styles with multiple colour
          and size options. Visit our store or enquire on WhatsApp for
          availability.
        </p>
      </div>

      {/* ================= FORMAL SHIRTS ================= */}
      <Section title="Formal Shirts">

        <ProductRow title="Solid Formal Shirts">
          <ProductCard
            name="Charcoal Solid Formal Shirt"
            category="Men / Shirts / Charcoal"
            image="/products/men/charcoal/formal-1.jpg"
          />

          <ProductCard
            name="Charcoal Slim Fit Formal Shirt"
            category="Men / Shirts / Charcoal"
            image="/products/men/charcoal/formal-2.jpg"
          />
        </ProductRow>

        <ProductRow title="Striped & Patterned Shirts">
          <ProductCard
            name="Charcoal Striped Formal Shirt"
            category="Men / Shirts / Charcoal"
            image="/products/men/charcoal/formal-3.jpg"
          />

          <ProductCard
            name="Charcoal Check Shirt"
            category="Men / Shirts / Charcoal"
            image="/products/men/charcoal/formal-4.jpg"
          />
        </ProductRow>

      </Section>

      {/* ================= CASUAL SHIRTS ================= */}
      <Section title="Casual Shirts">

        <ProductRow title="Printed & Casual Shirts">
          <ProductCard
            name="Charcoal Printed Casual Shirt"
            category="Men / Shirts / Charcoal"
            image="/products/men/charcoal/casual-1.jpg"
          />

          <ProductCard
            name="Charcoal Casual Cotton Shirt"
            category="Men / Shirts / Charcoal"
            image="/products/men/charcoal/casual-2.jpg"
          />
        </ProductRow>

      </Section>

      {/* ================= STORE NOTE ================= */}
      <p className="text-sm text-gray-600 leading-relaxed max-w-3xl">
        Charcoal shirts are known for premium fabric quality and excellent
        fitting. Anand Fashion offers a curated Charcoal collection in Udaipur
        with multiple colour and size options. Contact us on WhatsApp or visit
        our store in Bhopalpura for the latest designs.
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

function ProductRow({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">{title}</h3>

      <div
        className="
          flex gap-4 overflow-x-auto pb-3
          snap-x snap-mandatory
          md:grid md:grid-cols-4 md:gap-6 md:overflow-visible md:snap-none
        "
      >
        {children}
      </div>
    </div>
  );
}
