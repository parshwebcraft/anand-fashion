import ProductCard from "@/components/ProductCard";

export const metadata = {
  title: "Premium Wedding Wear in Udaipur | Anand Fashion",
  description:
    "Explore premium wedding wear for men and women in Udaipur at Anand Fashion. Exclusive outfits for weddings and special ceremonies.",
};

export default function PremiumWeddingWearPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">

      {/* ================= PAGE HEADER ================= */}
      <div className="space-y-3">
        <h1 className="text-3xl font-bold">Premium Wedding Wear</h1>

        <p className="text-sm text-gray-600 leading-relaxed max-w-3xl">
          Discover an exclusive collection of premium wedding wear for men and
          women at Anand Fashion, Udaipur. Our wedding wear range is crafted for
          brides, grooms and family members, featuring rich fabrics, elegant
          designs and timeless craftsmanship.
        </p>
      </div>

      {/* ================= MEN'S WEDDING WEAR ================= */}
      <Section title="Men’s Wedding Wear">

        <ProductRow title="Sherwani & Groom Wear">
          <ProductCard
            name="Premium Wedding Sherwani"
            category="Premium / Wedding Wear / Men"
            image="/products/premium/wedding-wear/men/sherwani-1.jpg"
          />

          <ProductCard
            name="Designer Groom Sherwani"
            category="Premium / Wedding Wear / Men"
            image="/products/premium/wedding-wear/men/sherwani-2.jpg"
          />
        </ProductRow>

        <ProductRow title="Indo-Western & Designer Wear">
          <ProductCard
            name="Indo-Western Wedding Outfit"
            category="Premium / Wedding Wear / Men"
            image="/products/premium/wedding-wear/men/indo-1.jpg"
          />

          <ProductCard
            name="Designer Wedding Outfit"
            category="Premium / Wedding Wear / Men"
            image="/products/premium/wedding-wear/men/designer-1.jpg"
          />
        </ProductRow>

      </Section>

      {/* ================= WOMEN'S WEDDING WEAR ================= */}
      <Section title="Women’s Wedding Wear">

        <ProductRow title="Bridal & Designer Suits">
          <ProductCard
            name="Designer Bridal Suit"
            category="Premium / Wedding Wear / Women"
            image="/products/premium/wedding-wear/women/bridal-suit-1.jpg"
          />

          <ProductCard
            name="Premium Wedding Suit"
            category="Premium / Wedding Wear / Women"
            image="/products/premium/wedding-wear/women/bridal-suit-2.jpg"
          />
        </ProductRow>

        <ProductRow title="Designer Gowns & Occasion Wear">
          <ProductCard
            name="Designer Wedding Gown"
            category="Premium / Wedding Wear / Women"
            image="/products/premium/wedding-wear/women/gown-1.jpg"
          />

          <ProductCard
            name="Premium Occasion Wear Gown"
            category="Premium / Wedding Wear / Women"
            image="/products/premium/wedding-wear/women/gown-2.jpg"
          />
        </ProductRow>

      </Section>

      {/* ================= WHATSAPP ENQUIRY ================= */}
      <div className="border rounded-xl p-6 bg-gray-50 space-y-3">
        <h2 className="text-lg font-semibold">
          Enquire About Premium Wedding Wear
        </h2>

        <p className="text-sm text-gray-600 max-w-2xl">
          Looking for premium wedding wear for men or women?
          Contact Anand Fashion on WhatsApp for designs, sizes, fitting options
          and availability for your special day.
        </p>

        <a
          href="https://wa.me/919214456664?text=Hi%20Anand%20Fashion,%20I%20want%20to%20enquire%20about%20premium%20wedding%20wear%20for%20men%20and%20women.%20Please%20guide%20me.
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
        Anand Fashion is a trusted premium wedding wear destination in Udaipur,
        offering elegant outfits for men and women crafted with premium fabrics
        and detailed workmanship. Visit our store in Bhopalpura for fittings and
        personalised assistance.
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
