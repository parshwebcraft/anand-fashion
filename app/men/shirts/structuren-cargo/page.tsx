import ProductCard from "@/components/ProductCard";

export const metadata = {
  title: "Structuren Cargo Shirts for Men in Udaipur",
  description:
    "Shop Structuren cargo shirts for men in Udaipur at Anand Fashion. Available in multiple colours, fits and sizes.",
};

export default function StructurenCargoShirtsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">

      {/* ================= PAGE HEADER ================= */}
      <div className="space-y-3">
        <h1 className="text-3xl font-bold">Structuren Cargo Shirts</h1>

        <p className="text-sm text-gray-600 leading-relaxed max-w-3xl">
          Discover rugged and stylish Structuren cargo shirts for men at Anand
          Fashion, Udaipur. These shirts feature utility pockets and durable
          fabrics, perfect for casual and outdoor wear.
        </p>
      </div>

      {/* ================= CASUAL CARGO SHIRTS ================= */}
      <Section title="Casual Cargo Shirts">
        <ProductRow title="Solid Cargo Shirts">
          <ProductCard
            name="Solid Cotton Cargo Shirt"
            category="Men / Shirts / Cargo"
            image="/products/men/cargo-shirts/solid-1.jpg"
          />

          <ProductCard
            name="Slim Fit Cargo Shirt"
            category="Men / Shirts / Cargo"
            image="/products/men/cargo-shirts/solid-2.jpg"
          />
        </ProductRow>

        <ProductRow title="Utility Pocket Shirts">
          <ProductCard
            name="Dual Pocket Cargo Shirt"
            category="Men / Shirts / Cargo"
            image="/products/men/cargo-shirts/utility-1.jpg"
          />

          <ProductCard
            name="Heavy Fabric Utility Shirt"
            category="Men / Shirts / Cargo"
            image="/products/men/cargo-shirts/utility-2.jpg"
          />
        </ProductRow>
      </Section>

      {/* ================= FABRIC & STYLE ================= */}
      <Section title="Fabric & Style Options">
        <ProductRow title="Cotton & Twill Cargo Shirts">
          <ProductCard
            name="Cotton Cargo Shirt"
            category="Men / Shirts / Cargo"
            image="/products/men/cargo-shirts/fabric-1.jpg"
          />

          <ProductCard
            name="Twill Cargo Shirt"
            category="Men / Shirts / Cargo"
            image="/products/men/cargo-shirts/fabric-2.jpg"
          />
        </ProductRow>
      </Section>
      {/* ================= WHATSAPP ENQUIRY ================= */}
<div className="border rounded-xl p-6 bg-gray-50 space-y-3">
  <h2 className="text-lg font-semibold">
    Enquire About Structuren Cargo Shirts
  </h2>

  <p className="text-sm text-gray-600 max-w-2xl">
    Looking for Structuren Cargo Shirts in a specific size, colour or style?
    Contact Anand Fashion on WhatsApp for availability and pricing details.
  </p>

  <a
    href="https://wa.me/919214456664?text=Hi%20Anand%20Fashion,%20I%20saw%20Structuren-Cargo%20shirts%20on%20your%20website.%20Please%20confirm%20available%20sizes%20and%20price%20range.
"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center bg-green-600 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-green-700 transition"
  >
    Enquire on WhatsApp
  </a>
</div>

      {/* ================= STORE NOTE ================= */}
      <p className="text-sm text-gray-600 leading-relaxed max-w-3xl">
        Cargo shirts are popular for their durability and utility-inspired
        design. Anand Fashion offers a curated collection of Structuren cargo
        shirts in Udaipur. Visit our store in Bhopalpura or contact us on
        WhatsApp to check available colours and sizes.
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
