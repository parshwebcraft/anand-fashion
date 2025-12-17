import ProductCard from "@/components/ProductCard";

export const metadata = {
  title: "Men’s Cargo Pants in Udaipur | Anand Fashion",
  description:
    "Explore stylish and comfortable men’s cargo pants at Anand Fashion, Udaipur. Multiple brands and fits available. Visit store or enquire on WhatsApp.",
};

export default function MenCargoPantsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">
      {/* ================= PAGE HEADER ================= */}
      <div className="space-y-3">
        <h1 className="text-3xl font-bold">Men’s Cargo Pants</h1>

        <p className="text-sm text-gray-600 leading-relaxed max-w-3xl">
          Discover a versatile range of men’s cargo pants at Anand Fashion,
          Udaipur. Designed for comfort and utility, our cargo pants are
          suitable for casual wear, travel and everyday styling.
        </p>
      </div>

      {/* ================= CARGO PANTS HUB ================= */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold">Cargo Pants Collection</h2>

        <div
          className="
            flex gap-4 overflow-x-auto pb-3
            md:grid md:grid-cols-4 md:gap-6 md:overflow-visible
          "
        >
          <ProductCard
            name="Six Pocket Cargo Pants"
            category="Men / Cargo Pants"
            image="/products/men/cargo/cargo-1.jpg"
          />

          <ProductCard
            name="Slim Fit Cargo Pants"
            category="Men / Cargo Pants"
            image="/products/men/cargo/cargo-2.jpg"
          />
        </div>
      </section>
      {/* ================= WHATSAPP ENQUIRY ================= */}
      <div className="border rounded-xl p-6 bg-gray-50 space-y-3">
        <h2 className="text-lg font-semibold">Enquire About Cargo Pants</h2>

        <p className="text-sm text-gray-600 max-w-2xl">
          Looking for Cargo Pants in a specific size, colour or style? Contact
          Anand Fashion on WhatsApp for availability and pricing details.
        </p>

        <a
          href="https://wa.me/919214456664?text=Hi%20Anand%20Fashion,%20I%20want%20to%20enquire%20about%20Charcoal%20shirts%20for%20men.%20Please%20share%20available%20sizes,%20colours%20and%20price."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-green-600 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-green-700 transition"
        >
          Enquire on WhatsApp
        </a>
      </div>

      {/* ================= NOTE FOR CLIENT ================= */}
      <p className="text-sm text-gray-600 leading-relaxed max-w-3xl">
        Cargo pants from multiple brands are available at Anand Fashion in
        Udaipur. Brand-wise collections, detailed product listings and enquiry
        options will be added after layout approval.
      </p>
    </div>
  );
}
