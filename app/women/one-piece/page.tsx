import ProductCard from "@/components/ProductCard";

export const metadata = {
  title: "Ladies One-Piece Dresses in Udaipur | Anand Fashion",
  description:
    "Explore stylish ladies one-piece dresses at Anand Fashion, Udaipur. Elegant and comfortable options available for casual and party wear.",
};

export default function LadiesOnePiecePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">

      {/* ================= PAGE HEADER ================= */}
      <div className="space-y-3">
        <h1 className="text-3xl font-bold">Ladies One-Piece Dresses</h1>

        <p className="text-sm text-gray-600 leading-relaxed max-w-3xl">
          Discover a stylish range of ladies one-piece dresses at Anand Fashion,
          Udaipur. Perfect for casual outings, parties and special occasions.
        </p>
      </div>

      {/* ================= ONE-PIECE COLLECTION HUB ================= */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold">Explore One-Piece Collections</h2>

        <div
          className="
            flex gap-4 overflow-x-auto pb-3
            md:grid md:grid-cols-4 md:gap-6 md:overflow-visible
          "
        >
          <ProductCard
            name="Korean Style One-Piece"
            category="Women / One-Piece"
            image="/products/women/one-piece/onepiece-korean.jpg"
          />

          <ProductCard
            name="Long One-Piece Dresses"
            category="Women / One-Piece"
            image="/products/women/one-piece/onepiece-long.jpg"
          />

          <ProductCard
            name="Short One-Piece Dresses"
            category="Women / One-Piece"
            image="/products/women/one-piece/onepiece-short.jpg"
          />
        </div>
      </section>

      {/* ================= WHATSAPP ENQUIRY ================= */}
      <div className="border rounded-xl p-6 bg-gray-50 space-y-3">
        <h2 className="text-lg font-semibold">Enquire About One-Piece Dresses</h2>

        <p className="text-sm text-gray-600 max-w-2xl">
          Looking for ladies one-piece dresses in a specific size, colour or
          style? Contact Anand Fashion on WhatsApp to check availability and
          pricing.
        </p>

        <a
          href="https://wa.me/919214456664?text=Hi%20Anand%20Fashion,%20I%20want%20to%20enquire%20about%20ladies%20one-piece%20dresses.%20Please%20share%20available%20sizes,%20styles%20and%20price%20range."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-green-600 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-green-700 transition"
        >
          Enquire on WhatsApp
        </a>
      </div>

      {/* ================= NOTE ================= */}
      <p className="text-sm text-gray-600 leading-relaxed max-w-3xl">
        Anand Fashion offers a stylish collection of ladies one-piece dresses
        in Udaipur. Detailed brand-wise collections will be added after layout
        approval.
      </p>

    </div>
  );
}
