import ProductCard from "@/components/ProductCard";
import ProductRow from "@/components/ProductRow";

export const metadata = {
  title: "Men’s Clothing Store in Udaipur",
  description:
    "Shop men’s clothing in Udaipur at Anand Fashion. Explore branded shirts, jeans, t-shirts, cargo pants and winter wear for men.",
};

export default function MenPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-20">
      {/* ================= PAGE HEADER ================= */}
      <div className="space-y-3">
        <h1 className="text-3xl font-bold">Men’s Collection</h1>

        <p className="text-sm text-gray-600 leading-relaxed max-w-3xl">
          Anand Fashion is a trusted men’s clothing store in Udaipur offering
          exclusive branded summer and winter wear for men. All products are
          available in-store — contact us on WhatsApp for sizes and colours.
        </p>
      </div>

      {/* ================= SUMMER WEAR ================= */}
      <Section title="Shop By Category">
        {/* Shirts */}
        <ProductRow
  title="Shirts"
  description="Explore our complete range of branded formal and casual shirts for men."
>
  {/* 👉 SHIRTS HUB ONLY */}
  <ProductCard
    name="View All Shirt Collections"
    category="Men / Shirts"
    image="/products/men/brands/shirts-hub.jpg"
    href="/men/shirts"
  />
</ProductRow>


        {/* Jeans — FINAL POLISH */}
        <ProductRow
          title="Jeans"
          description="Branded denim jeans available in multiple fits and washes for everyday and casual wear."
        >
          {/* 👉 JEANS HUB ENTRY */}
          <ProductCard
            name="All Jeans Collections"
            category="Men / Jeans"
            image="/products/men/brands/jeans.jpg"
            href="/men/jeans"
          />

          
        </ProductRow>

        {/* T-Shirts */}
        <ProductRow
          title="T-Shirts"
          description="Comfortable cotton t-shirts available in printed, plain and casual styles."
        >
          {/* 👉 T-SHIRTS HUB ENTRY */}
          <ProductCard
            name="All T-Shirt Collections"
            category="Men / T-Shirts"
            image="/products/men/brands/tshirts.jpg"
            href="/men/t-shirts"
          />

          
        </ProductRow>

        {/* Cargo Pants — FINAL POLISH */}
        <ProductRow
          title="Cargo Pants"
          description="Stylish and durable cargo pants available for casual, travel and outdoor use."
        >
          {/* 👉 CARGO PANTS HUB ENTRY */}
          <ProductCard
            name="All Cargo Pants Collections"
            category="Men / Cargo Pants"
            image="/products/men/brands/cargo.jpg"
            href="/men/cargo-pants"
          />

          
        </ProductRow>
      </Section>

      {/* ================= WINTER WEAR ================= */}
      <Section title="Winter Wear">
        <ProductRow
          title="Jackets, Hoodies & Sweaters"
          description="Warm and comfortable winter wear including jackets, hoodies and sweaters."
        >
          <ProductCard
            name="Winter Wear Collection"
            category="Men / Winter Wear"
            image="/products/men/brands/winter.jpg"
            href="/men/winter"
          />
        </ProductRow>
      </Section>

      {/* ================= SEO / LOCAL TEXT ================= */}
      <p className="text-sm text-gray-600 leading-relaxed max-w-3xl">
        Anand Fashion offers a wide range of branded men’s clothing in Udaipur,
        including shirts, jeans, t-shirts, cargo pants and winter wear. Visit
        our store in Bhopalpura or contact us on WhatsApp to check availability
        of sizes and colours.
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
