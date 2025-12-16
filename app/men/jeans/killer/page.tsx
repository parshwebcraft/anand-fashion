import ProductCard from "@/components/ProductCard";

export const metadata = {
  title: "Killer Jeans for Men in Udaipur | Anand Fashion",
  description:
    "Explore Killer branded jeans for men in Udaipur at Anand Fashion. Slim fit and regular fit Killer jeans available in multiple washes and sizes.",
};

export default function KillerJeansPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">

      {/* ================= PAGE HEADER ================= */}
      <div className="space-y-3">
        <h1 className="text-3xl font-bold">Killer Jeans</h1>

        <p className="text-sm text-gray-600 leading-relaxed max-w-3xl">
          Discover premium Killer branded jeans for men at Anand Fashion,
          Udaipur. Killer jeans are known for modern fits, durable fabric
          and everyday comfort. Available in slim fit and regular fit styles
          with multiple colour and size options.
        </p>
      </div>

      {/* ================= SLIM FIT JEANS ================= */}
      <Section title="Slim Fit Jeans">

        <ProductRow title="Modern Slim Fit Styles">
          <ProductCard
            name="Killer Slim Fit Blue Jeans"
            category="Men / Jeans / Killer"
            image="/products/men/jeans/killer/slim-1.jpg"
          />

          <ProductCard
            name="Killer Slim Fit Dark Blue Jeans"
            category="Men / Jeans / Killer"
            image="/products/men/jeans/killer/slim-2.jpg"
          />

          <ProductCard
            name="Killer Slim Fit Black Jeans"
            category="Men / Jeans / Killer"
            image="/products/men/jeans/killer/slim-3.jpg"
          />
        </ProductRow>

      </Section>

      {/* ================= REGULAR FIT JEANS ================= */}
      <Section title="Regular Fit Jeans">

        <ProductRow title="Comfort & Daily Wear">
          <ProductCard
            name="Killer Regular Fit Blue Jeans"
            category="Men / Jeans / Killer"
            image="/products/men/jeans/killer/regular-1.jpg"
          />

          <ProductCard
            name="Killer Regular Fit Mid Blue Jeans"
            category="Men / Jeans / Killer"
            image="/products/men/jeans/killer/regular-2.jpg"
          />
        </ProductRow>

      </Section>

      {/* ================= WHATSAPP ENQUIRY ================= */}
      <div className="border rounded-xl p-6 bg-gray-50 space-y-3">
        <h2 className="text-lg font-semibold">
          Enquire About Killer Jeans
        </h2>

        <p className="text-sm text-gray-600 max-w-2xl">
          Looking for the right size, fit or colour in Killer jeans?
          Contact Anand Fashion on WhatsApp for latest stock availability
          and pricing details.
        </p>

        <a
          href="https://wa.me/91XXXXXXXXXX?text=Hi%20Anand%20Fashion,%20I%20want%20to%20enquire%20about%20Killer%20Jeans%20for%20men.%20Please%20share%20available%20sizes,%20colours%20and%20price."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-green-600 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-green-700 transition"
        >
          Enquire on WhatsApp
        </a>
      </div>

      {/* ================= STORE NOTE ================= */}
      <p className="text-sm text-gray-600 leading-relaxed max-w-3xl">
        Anand Fashion is a trusted men’s clothing store in Udaipur offering
        original Killer jeans with comfortable fits and durable fabric.
        Visit our store in Bhopalpura or contact us online for current stock
        and size availability.
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
