import ProductCard from "@/components/ProductCard";

export const metadata = {
  title: "Privilege Jeans for Men in Udaipur | Anand Fashion",
  description:
    "Explore Privilege branded jeans for men in Udaipur at Anand Fashion. Slim fit and regular fit Privilege jeans available in multiple washes and sizes.",
};

export default function PrivilegeJeansPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">

      {/* ================= PAGE HEADER ================= */}
      <div className="space-y-3">
        <h1 className="text-3xl font-bold">Privilege Jeans</h1>

        <p className="text-sm text-gray-600 leading-relaxed max-w-3xl">
          Discover premium Privilege branded jeans for men at Anand Fashion,
          Udaipur. Privilege jeans are known for comfortable fits, reliable
          stitching and stylish everyday designs. Available in slim fit and
          regular fit options with multiple colour and size choices.
        </p>
      </div>

      {/* ================= SLIM FIT JEANS ================= */}
      <Section title="Slim Fit Jeans">

        <ProductRow title="Modern Slim Fit Styles">
          <ProductCard
            name="Privilege Slim Fit Blue Jeans"
            category="Men / Jeans / Privilege"
            image="/products/men/jeans/privilege/slim-1.jpg"
          />

          <ProductCard
            name="Privilege Slim Fit Dark Blue Jeans"
            category="Men / Jeans / Privilege"
            image="/products/men/jeans/privilege/slim-2.jpg"
          />

          <ProductCard
            name="Privilege Slim Fit Black Jeans"
            category="Men / Jeans / Privilege"
            image="/products/men/jeans/privilege/slim-3.jpg"
          />
        </ProductRow>

      </Section>

      {/* ================= REGULAR FIT JEANS ================= */}
      <Section title="Regular Fit Jeans">

        <ProductRow title="Comfort & Daily Wear">
          <ProductCard
            name="Privilege Regular Fit Blue Jeans"
            category="Men / Jeans / Privilege"
            image="/products/men/jeans/privilege/regular-1.jpg"
          />

          <ProductCard
            name="Privilege Regular Fit Mid Blue Jeans"
            category="Men / Jeans / Privilege"
            image="/products/men/jeans/privilege/regular-2.jpg"
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
          href="https://wa.me/919214456664?text=Hi%20Anand%20Fashion,%20I%20saw%20Jeans%20jeans%20on%20your%20website.%20Please%20confirm%20size%20availability%20and%20price%20range.
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
        Anand Fashion is a trusted men’s clothing store in Udaipur offering
        original Privilege jeans with comfortable fitting and durable fabric.
        Visit our store in Bhopalpura or contact us online for size and stock
        availability.
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
