import ProductCard from "@/components/ProductCard";

export const metadata = {
  title: "Casual Wear Shirts for Men in Udaipur | Anand Fashion",
  description:
    "Explore casual wear shirts for men at Anand Fashion, Udaipur. Stylish and comfortable shirts available in multiple colours and sizes.",
};

export default function CasualWearShirtsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">

      {/* ================= PAGE HEADER ================= */}
      <div className="space-y-3">
        <h1 className="text-3xl font-bold">Casual Wear Shirts</h1>

        <p className="text-sm text-gray-600 leading-relaxed max-w-3xl">
          Discover a stylish range of casual wear shirts for men at Anand Fashion,
          Udaipur. Designed for everyday comfort, casual outings and relaxed
          occasions with modern fits and breathable fabrics.
        </p>
      </div>

      {/* ================= CASUAL SHIRTS ================= */}
      <Section title="Casual Shirt Styles">

        <ProductRow title="Printed & Casual Shirts">
          <ProductCard
            name="Printed Casual Shirt"
            category="Men / Shirts / Casual Wear"
            image="/products/men/shirts/casual/casual-1.jpg"
          />

          <ProductCard
            name="Cotton Casual Shirt"
            category="Men / Shirts / Casual Wear"
            image="/products/men/shirts/casual/casual-2.jpg"
          />
        </ProductRow>

      </Section>

      {/* ================= WHATSAPP ENQUIRY ================= */}
      <div className="border rounded-xl p-6 bg-gray-50 space-y-3">
        <h2 className="text-lg font-semibold">
          Enquire About Casual Wear Shirts
        </h2>

        <p className="text-sm text-gray-600 max-w-2xl">
          Looking for casual wear shirts in a specific size, colour or style?
          Contact Anand Fashion on WhatsApp for availability and pricing details.
        </p>

        <a
          href="https://wa.me/919214456664?text=Hi%20Anand%20Fashion,%20I%20want%20to%20enquire%20about%20men’s%20casual%20wear%20shirts.%20Please%20share%20available%20sizes,%20colours%20and%20price%20range."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-green-600 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-green-700 transition"
        >
          Enquire on WhatsApp
        </a>
      </div>

      {/* ================= STORE NOTE ================= */}
      <p className="text-sm text-gray-600 leading-relaxed max-w-3xl">
        Anand Fashion offers a curated selection of casual wear shirts in
        Udaipur, suitable for daily use and relaxed occasions. Visit our store
        in Bhopalpura to explore the latest casual shirt collections.
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
