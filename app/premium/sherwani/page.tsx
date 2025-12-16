import ProductCard from "@/components/ProductCard";

export const metadata = {
  title: "Premium Sherwani in Udaipur | Anand Fashion",
  description:
    "Explore premium sherwani collection in Udaipur at Anand Fashion. Wedding sherwani, designer sherwani and festive sherwani available in-store.",
};

export default function PremiumSherwaniPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">

      {/* ================= PAGE HEADER ================= */}
      <div className="space-y-3">
        <h1 className="text-3xl font-bold">Premium Sherwani</h1>

        <p className="text-sm text-gray-600 leading-relaxed max-w-3xl">
          Discover an elegant collection of premium sherwani at Anand Fashion,
          Udaipur. Designed specially for weddings and festive occasions,
          our sherwani range features rich fabrics, intricate work and
          royal styling.
        </p>
      </div>

      {/* ================= WEDDING SHERWANI ================= */}
      <Section title="Wedding Sherwani">

        <ProductRow title="Traditional Wedding Collection">
          <ProductCard
            name="Premium Wedding Sherwani"
            category="Premium / Sherwani"
            image="/products/premium/sherwani/wedding-1.jpg"
          />

          <ProductCard
            name="Designer Wedding Sherwani"
            category="Premium / Sherwani"
            image="/products/premium/sherwani/wedding-2.jpg"
          />
        </ProductRow>

      </Section>

      {/* ================= DESIGNER SHERWANI ================= */}
      <Section title="Designer Sherwani">

        <ProductRow title="Exclusive Designer Styles">
          <ProductCard
            name="Designer Premium Sherwani"
            category="Premium / Sherwani"
            image="/products/premium/sherwani/designer-1.jpg"
          />

          <ProductCard
            name="Embroidered Designer Sherwani"
            category="Premium / Sherwani"
            image="/products/premium/sherwani/designer-2.jpg"
          />
        </ProductRow>

      </Section>

      {/* ================= FESTIVE SHERWANI ================= */}
      <Section title="Festive Sherwani">

        <ProductRow title="Festive & Occasion Wear">
          <ProductCard
            name="Festive Wear Sherwani"
            category="Premium / Sherwani"
            image="/products/premium/sherwani/festive-1.jpg"
          />
        </ProductRow>

      </Section>

      {/* ================= WHATSAPP ENQUIRY ================= */}
      <div className="border rounded-xl p-6 bg-gray-50 space-y-3">
        <h2 className="text-lg font-semibold">
          Enquire About Premium Sherwani
        </h2>

        <p className="text-sm text-gray-600 max-w-2xl">
          Looking for a premium sherwani for your wedding or special occasion?
          Contact Anand Fashion on WhatsApp for designs, fitting options,
          sizes and availability.
        </p>

        <a
          href="https://wa.me/919214456664?text=Hi%20Anand%20Fashion,%20I%20want%20to%20enquire%20about%20premium%20sherwani%20for%20wedding.%20Please%20share%20details.
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
        Anand Fashion is a trusted destination for premium sherwani in Udaipur,
        offering wedding and festive sherwani crafted with premium fabrics
        and detailed workmanship. Visit our store in Bhopalpura for fittings
        and personalised assistance.
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
