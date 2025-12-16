import ProductCard from "@/components/ProductCard";

export const metadata = {
  title: "Women’s Kurtis in Udaipur | Anand Fashion",
  description:
    "Explore stylish women’s kurtis at Anand Fashion, Udaipur. Comfortable and elegant kurtis available from multiple brands.",
};

export default function WomenKurtisPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">
      {/* ================= PAGE HEADER ================= */}
      <div className="space-y-3">
        <h1 className="text-3xl font-bold">Women’s Kurtis</h1>

        <p className="text-sm text-gray-600 leading-relaxed max-w-3xl">
          Discover a beautiful collection of women’s kurtis at Anand Fashion,
          Udaipur. Ideal for everyday wear, office and casual outings.
        </p>
      </div>

      {/* ================= KURTIS HUB ================= */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold">Kurti Collections</h2>

        <div
          className="
            flex gap-4 overflow-x-auto pb-3
            md:grid md:grid-cols-4 md:gap-6 md:overflow-visible
          "
        >
          <ProductCard
            name="Cotton Kurtis"
            category="Women / Kurtis"
            image="/products/women/kurtis/kurti-1.jpg"
          />

          <ProductCard
            name="Printed Kurtis"
            category="Women / Kurtis"
            image="/products/women/kurtis/kurti-2.jpg"
          />

          <ProductCard
            name="Straight Fit Kurtis"
            category="Women / Kurtis"
            image="/products/women/kurtis/kurti-3.jpg"
          />

          <ProductCard
            name="Designer Kurtis"
            category="Women / Kurtis"
            image="/products/women/kurtis/kurti-4.jpg"
          />
        </div>
      </section>
      {/* ================= WHATSAPP ENQUIRY ================= */}
      <div className="border rounded-xl p-6 bg-gray-50 space-y-3">
        <h2 className="text-lg font-semibold">Enquire About Kurtis</h2>

        <p className="text-sm text-gray-600 max-w-2xl">
          Looking for Women’s kurti collections in a specific size, colour or style? Contact Anand
          Fashion on WhatsApp for availability and pricing details.
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

      {/* ================= NOTE ================= */}
      <p className="text-sm text-gray-600 leading-relaxed max-w-3xl">
        Women’s kurti collections from multiple brands are available at Anand
        Fashion, Udaipur. Brand-wise pages and detailed listings will be added
        after layout approval.
      </p>
    </div>
  );
}
