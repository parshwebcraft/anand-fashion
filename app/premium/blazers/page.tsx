import ProductCard from "@/components/ProductCard";

export const metadata = {
  title: "Premium Blazers in Udaipur | Anand Fashion",
  description:
    "Explore premium blazers in Udaipur at Anand Fashion. Wedding blazers, party wear blazers and designer blazers available in-store.",
};

export default function PremiumBlazersPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">

      {/* ================= PAGE HEADER ================= */}
      <div className="space-y-3">
        <h1 className="text-3xl font-bold">Premium Blazers</h1>

        <p className="text-sm text-gray-600 leading-relaxed max-w-3xl">
          Discover an exclusive range of premium blazers at Anand Fashion,
          Udaipur. Our blazer collection is designed for weddings, parties
          and special occasions, featuring elegant cuts, premium fabrics
          and superior finishing.
        </p>
      </div>

      {/* ================= WEDDING BLAZERS ================= */}
      <Section title="Wedding Blazers">

        <ProductRow title="Elegant Wedding Wear">
          <ProductCard
            name="Premium Wedding Blazer"
            category="Premium / Blazers"
            image="/products/premium/blazers/wedding-1.jpg"
          />

          <ProductCard
            name="Designer Wedding Blazer"
            category="Premium / Blazers"
            image="/products/premium/blazers/wedding-2.jpg"
          />
        </ProductRow>

      </Section>

      {/* ================= PARTY WEAR BLAZERS ================= */}
      <Section title="Party Wear Blazers">

        <ProductRow title="Stylish Party Looks">
          <ProductCard
            name="Party Wear Blazer"
            category="Premium / Blazers"
            image="/products/premium/blazers/party-1.jpg"
          />

          <ProductCard
            name="Premium Evening Blazer"
            category="Premium / Blazers"
            image="/products/premium/blazers/party-2.jpg"
          />
        </ProductRow>

      </Section>

      {/* ================= DESIGNER BLAZERS ================= */}
      <Section title="Designer Blazers">

        <ProductRow title="Exclusive Designer Collection">
          <ProductCard
            name="Designer Premium Blazer"
            category="Premium / Blazers"
            image="/products/premium/blazers/designer-1.jpg"
          />
        </ProductRow>

      </Section>

      {/* ================= WHATSAPP ENQUIRY ================= */}
      <div className="border rounded-xl p-6 bg-gray-50 space-y-3">
        <h2 className="text-lg font-semibold">
          Enquire About Premium Blazers
        </h2>

        <p className="text-sm text-gray-600 max-w-2xl">
          Looking for premium blazers for weddings or special occasions?
          Contact Anand Fashion on WhatsApp for designs, fitting options,
          sizes and availability.
        </p>

        <a
          href="https://wa.me/919214456664?text=Hi%20Anand%20Fashion,%20I%20want%20to%20enquire%20about%20premium%20blazers.%20Please%20share%20availability%20and%20price%20range.
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
        Anand Fashion is a trusted premium wear store in Udaipur offering
        premium blazers crafted with high-quality fabrics and elegant
        designs. Visit our store in Bhopalpura for fittings and custom
        assistance.
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
