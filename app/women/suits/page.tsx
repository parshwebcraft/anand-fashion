import ProductCard from "@/components/ProductCard";

export const metadata = {
  title: "Women’s Suits in Udaipur | Anand Fashion",
  description:
    "Explore women’s suits at Anand Fashion, Udaipur. Elegant suit sets available from multiple brands.",
};

export default function WomenSuitsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">
      {/* ================= PAGE HEADER ================= */}
      <div className="space-y-3">
        <h1 className="text-3xl font-bold">Women’s Suits</h1>

        <p className="text-sm text-gray-600 leading-relaxed max-w-3xl">
          Explore a stylish range of women’s suits at Anand Fashion, Udaipur.
          Perfect for daily wear, office use and festive occasions.
        </p>
      </div>

      {/* ================= SUITS HUB ================= */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold">Suit Collections</h2>

        <div
          className="
            flex gap-4 overflow-x-auto pb-3
            md:grid md:grid-cols-4 md:gap-6 md:overflow-visible
          "
        >
          <ProductCard
            name="Cotton Wear Suits"
            category="Women / Suits"
            image="/products/women/suits/suit-1.jpg"
          />

          <ProductCard
            name="Party Wear Suits"
            category="Women / Suits"
            image="/products/women/suits/suit-2.jpg"
          />

          <ProductCard
            name="Festive Suits"
            category="Women / Suits"
            image="/products/women/suits/suit-3.jpg"
          />

          <ProductCard
            name="Designer Suits"
            category="Women / Suits"
            image="/products/women/suits/suit-4.jpg"
          />
        </div>
      </section>
      {/* ================= WHATSAPP ENQUIRY ================= */}
      <div className="border rounded-xl p-6 bg-gray-50 space-y-3">
        <h2 className="text-lg font-semibold">Enquire About Women’s Suits</h2>

        <p className="text-sm text-gray-600 max-w-2xl">
          Looking for women’s suits in a specific design, size or colour?
          Contact Anand Fashion on WhatsApp for latest suit collections and
          availability.
        </p>

        <a
          href="https://wa.me/919214456664?text=Hi%20Anand%20Fashion,%20I%20saw%20women’s%20suits%20on%20your%20website.%20I%20want%20to%20check%20size%20availability,%20price%20range%20and%20current%20stock.%20Please%20guide%20me.
"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-green-600 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-green-700 transition"
        >
          Enquire on WhatsApp
        </a>
      </div>

      {/* ================= NOTE ================= */}
      <p className="text-sm text-gray-600 leading-relaxed max-w-3xl">
        Women’s suit collections from multiple brands are available at Anand
        Fashion, Udaipur. Brand-wise pages and enquiry options will be added
        after layout approval.
      </p>
    </div>
  );
}
