import ProductCard from "@/components/ProductCard";

export const metadata = {
  title: "Premium Party Wear in Udaipur | Anand Fashion",
  description:
    "Explore premium party wear for men and women in Udaipur at Anand Fashion. Stylish outfits for weddings, receptions and special occasions.",
};

export default function PremiumPartyWearPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">

      {/* ================= PAGE HEADER ================= */}
      <div className="space-y-3">
        <h1 className="text-3xl font-bold">Premium Party Wear</h1>

        <p className="text-sm text-gray-600 leading-relaxed max-w-3xl">
          Discover an exclusive collection of premium party wear for men and
          women at Anand Fashion, Udaipur. Our party wear range is designed for
          weddings, receptions, engagements and special celebrations, featuring
          elegant designs and premium fabrics.
        </p>
      </div>

      {/* ================= MEN'S PARTY WEAR ================= */}
      <Section title="Men’s Party Wear">

        <ProductRow title="Blazers & Evening Wear">
          <ProductCard
            name="Premium Party Blazer"
            category="Premium / Party Wear / Men"
            image="/products/premium/party-wear/men/blazer-1.jpg"
          />

          <ProductCard
            name="Designer Evening Blazer"
            category="Premium / Party Wear / Men"
            image="/products/premium/party-wear/men/blazer-2.jpg"
          />
        </ProductRow>

        <ProductRow title="Indo-Western & Designer Wear">
          <ProductCard
            name="Indo-Western Party Outfit"
            category="Premium / Party Wear / Men"
            image="/products/premium/party-wear/men/indo-1.jpg"
          />

          <ProductCard
            name="Designer Party Wear Outfit"
            category="Premium / Party Wear / Men"
            image="/products/premium/party-wear/men/designer-1.jpg"
          />
        </ProductRow>

      </Section>

      {/* ================= WOMEN'S PARTY WEAR ================= */}
      <Section title="Women’s Party Wear">

        <ProductRow title="Designer Gowns & Dresses">
          <ProductCard
            name="Designer Party Gown"
            category="Premium / Party Wear / Women"
            image="/products/premium/party-wear/women/gown-1.jpg"
          />

          <ProductCard
            name="Evening Party Gown"
            category="Premium / Party Wear / Women"
            image="/products/premium/party-wear/women/gown-2.jpg"
          />
        </ProductRow>

        <ProductRow title="Designer Suits & Party Kurtis">
          <ProductCard
            name="Designer Party Suit"
            category="Premium / Party Wear / Women"
            image="/products/premium/party-wear/women/suit-1.jpg"
          />

          <ProductCard
            name="Premium Party Kurti"
            category="Premium / Party Wear / Women"
            image="/products/premium/party-wear/women/kurti-1.jpg"
          />
        </ProductRow>

      </Section>

      {/* ================= WHATSAPP ENQUIRY ================= */}
      <div className="border rounded-xl p-6 bg-gray-50 space-y-3">
        <h2 className="text-lg font-semibold">
          Enquire About Premium Party Wear
        </h2>

        <p className="text-sm text-gray-600 max-w-2xl">
          Looking for premium party wear for men or women for a special event?
          Contact Anand Fashion on WhatsApp for designs, sizes, fitting options
          and availability.
        </p>

        <a
          href="https://wa.me/919214456664?text=Hi%20Anand%20Fashion,%20I%20want%20to%20enquire%20about%20premium%20party%20wear%20for%20men%20and%20women.%20Please%20guide%20me.
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
        Anand Fashion is a trusted destination for premium party wear in Udaipur,
        offering stylish outfits for men and women crafted with premium fabrics
        and elegant detailing. Visit our store in Bhopalpura for personalised
        assistance and fittings.
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
