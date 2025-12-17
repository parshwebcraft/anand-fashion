import ProductCard from "@/components/ProductCard";

export const metadata = {
  title: "Ladies Tops in Udaipur | Anand Fashion",
  description:
    "Explore stylish ladies tops at Anand Fashion, Udaipur. Comfortable and modern tops available for everyday and casual wear.",
};

export default function LadiesTopsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">

      {/* ================= PAGE HEADER ================= */}
      <div className="space-y-3">
        <h1 className="text-3xl font-bold">Ladies Tops</h1>

        <p className="text-sm text-gray-600 leading-relaxed max-w-3xl">
          Discover a stylish collection of ladies tops at Anand Fashion,
          Udaipur. Perfect for daily wear, office use and casual outings with
          comfortable fitting and modern designs.
        </p>
      </div>

      {/* ================= TOPS COLLECTION HUB ================= */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold">Explore Tops Collections</h2>

        <div
          className="
            flex gap-4 overflow-x-auto pb-3
            md:grid md:grid-cols-4 md:gap-6 md:overflow-visible
          "
        >
          <ProductCard
            name="Korean Style Tops"
            category="Women / Tops"
            image="/products/women/tops/tops-korean.jpg"
          />

          <ProductCard
            name="Casual Wear Tops"
            category="Women / Tops"
            image="/products/women/tops/tops-casual.jpg"
          />
        </div>
      </section>

      {/* ================= WHATSAPP ENQUIRY ================= */}
      <div className="border rounded-xl p-6 bg-gray-50 space-y-3">
        <h2 className="text-lg font-semibold">Enquire About Ladies Tops</h2>

        <p className="text-sm text-gray-600 max-w-2xl">
          Looking for ladies tops in a specific size, colour or style?
          Contact Anand Fashion on WhatsApp to check availability and pricing.
        </p>

        <a
          href="https://wa.me/919214456664?text=Hi%20Anand%20Fashion,%20I%20want%20to%20enquire%20about%20ladies%20tops.%20Please%20share%20available%20sizes,%20styles%20and%20price%20range."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-green-600 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-green-700 transition"
        >
          Enquire on WhatsApp
        </a>
      </div>

      {/* ================= NOTE ================= */}
      <p className="text-sm text-gray-600 leading-relaxed max-w-3xl">
        Anand Fashion offers a curated range of ladies tops in Udaipur.
        Brand-wise collections and detailed listings will be added after
        layout approval.
      </p>

    </div>
  );
}
