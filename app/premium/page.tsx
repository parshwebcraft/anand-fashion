import ProductCard from "@/components/ProductCard";

export const metadata = {
  title: "Premium Wear in Udaipur | Anand Fashion",
  description:
    "Explore premium wear for men and women in Udaipur at Anand Fashion. Blazers, sherwani, party wear and wedding wear available for special occasions.",
};

export default function PremiumPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">

      {/* ================= PAGE HEADER ================= */}
      <div className="space-y-3">
        <h1 className="text-3xl font-bold">Premium Collection</h1>

        <p className="text-sm text-gray-600 leading-relaxed max-w-3xl">
          Discover an exclusive premium wear collection at Anand Fashion,
          Udaipur. Our premium range is curated for weddings, parties and
          special occasions, offering elegant outfits for men and women.
        </p>
      </div>

      {/* ================= MEN – PREMIUM ================= */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold">Premium Wear for Men</h2>

        <div
          className="
            flex gap-4 overflow-x-auto pb-3
            md:grid md:grid-cols-4 md:gap-6 md:overflow-visible
          "
        >
          <ProductCard
            name="Premium Blazers"
            category="Premium / Men"
            image="/products/premium/hubs/blazers.jpg"
            href="/premium/blazers"
          />

          <ProductCard
            name="Sherwani & Groom Wear"
            category="Premium / Men"
            image="/products/premium/hubs/sherwani.jpg"
            href="/premium/sherwani"
          />
        </div>
      </section>

      {/* ================= MEN & WOMEN – PREMIUM ================= */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold">Wedding & Party Wear</h2>

        <div
          className="
            flex gap-4 overflow-x-auto pb-3
            md:grid md:grid-cols-2 md:gap-6 md:overflow-visible
          "
        >
          <ProductCard
            name="Premium Party Wear (Men & Women)"
            category="Premium"
            image="/products/premium/hubs/party-wear.jpg"
            href="/premium/party-wear"
          />

          <ProductCard
            name="Premium Wedding Wear (Men & Women)"
            category="Premium"
            image="/products/premium/hubs/wedding-wear.jpg"
            href="/premium/wedding-wear"
          />
        </div>
      </section>

      {/* ================= STORE NOTE ================= */}
      <p className="text-sm text-gray-600 leading-relaxed max-w-3xl">
        Anand Fashion is a trusted destination for premium wear in Udaipur,
        offering well-fitted blazers, sherwani, party wear and wedding wear for
        men and women. Visit our store in Bhopalpura for trial, fitting and
        personalised styling assistance.
      </p>

    </div>
  );
}
