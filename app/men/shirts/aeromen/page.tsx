import ProductCard from "@/components/ProductCard";

export const metadata = {
  title: "Aeromen Shirts for Men in Udaipur",
  description:
    "Explore Aeromen branded shirts for men in Udaipur at Anand Fashion. Formal and casual Aeromen shirts available in multiple colours and sizes.",
};

export default function AeromenShirtsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">

      {/* ================= PAGE HEADER ================= */}
      <div className="space-y-3">
        <h1 className="text-3xl font-bold">Aeromen Shirts</h1>

        <p className="text-sm text-gray-600 leading-relaxed max-w-3xl">
          Discover premium Aeromen branded shirts for men at Anand Fashion,
          Udaipur. Aeromen shirts are known for modern styling, comfortable
          fabrics and perfect fitting. Available in formal and casual designs
          with multiple colour and size options.
        </p>
      </div>

      {/* ================= FORMAL SHIRTS ================= */}
      <Section title="Formal Shirts">

        <ProductRow title="Solid & Office Wear Shirts">
          <ProductCard
            name="Aeromen Solid Formal Shirt"
            category="Men / Shirts / Aeromen"
            image="/products/men/aeromen/formal-1.jpg"
          />

          <ProductCard
            name="Aeromen Slim Fit Office Shirt"
            category="Men / Shirts / Aeromen"
            image="/products/men/aeromen/formal-2.jpg"
          />
        </ProductRow>

        <ProductRow title="Patterned & Striped Shirts">
          <ProductCard
            name="Aeromen Striped Formal Shirt"
            category="Men / Shirts / Aeromen"
            image="/products/men/aeromen/formal-3.jpg"
          />

          <ProductCard
            name="Aeromen Check Formal Shirt"
            category="Men / Shirts / Aeromen"
            image="/products/men/aeromen/formal-4.jpg"
          />
        </ProductRow>

      </Section>

      {/* ================= CASUAL SHIRTS ================= */}
      <Section title="Casual Shirts">

        <ProductRow title="Printed & Casual Shirts">
          <ProductCard
            name="Aeromen Printed Casual Shirt"
            category="Men / Shirts / Aeromen"
            image="/products/men/aeromen/casual-1.jpg"
          />

          <ProductCard
            name="Aeromen Cotton Casual Shirt"
            category="Men / Shirts / Aeromen"
            image="/products/men/aeromen/casual-2.jpg"
          />
        </ProductRow>

      </Section>

      {/* ================= STORE NOTE ================= */}
      <p className="text-sm text-gray-600 leading-relaxed max-w-3xl">
        Aeromen shirts offer a balance of style and comfort, making them ideal
        for office wear and daily use. Anand Fashion provides a curated Aeromen
        collection in Udaipur with multiple colour and size options. Visit our
        store in Bhopalpura or contact us on WhatsApp for availability.
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
