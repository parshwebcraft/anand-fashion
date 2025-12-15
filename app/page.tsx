import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-20">
      {/* ================= HERO SECTION ================= */}
      <section
        className="relative min-h-[80vh] overflow-hidden"
        style={{
          backgroundImage: "url(/hero.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Light overlay */}
        <div className="absolute inset-0 bg-white/60"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-gray-900">
          {/* Heading */}
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Anand Fashion
            </h1>
            <p className="mt-4 text-lg text-gray-800">
              Trusted Clothing Store in Udaipur for Men, Women & Premium Wear
            </p>
          </div>

          {/* Category Boxes */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <CollectionBox
              title="Men’s Wear"
              subtitle="Shirts, Jeans, T-Shirts, Winter Wear"
              href="/men"
            />

            <CollectionBox
              title="Women’s Wear"
              subtitle="Suits, Kurtis, Co-ord Sets & Winter Wear"
              href="/women"
            />

            <CollectionBox
              title="Premium Wear"
              subtitle="Blazers, Sherwani & Party Wear"
              href="/premium"
            />
          </div>
        </div>
      </section>

      {/* ================= TRUST BADGES ================= */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <TrustBadge title="10+ Years Experience" />
          <TrustBadge title="Udaipur Local Store" />
          <TrustBadge title="Quality Fabrics" />
          <TrustBadge title="Trusted by Families" />
        </div>
      </section>

      {/* ================= FEATURED PRODUCTS ================= */}
      <section className="max-w-7xl mx-auto px-6 space-y-6">
        <div>
          <h2 className="text-2xl font-semibold">Featured Collections</h2>
          <p className="text-sm text-gray-600 mt-1">
            Popular picks from our store
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <FeaturedCard title="Men Shirts" price="Starting ₹999" />
          <FeaturedCard title="Women Suits" price="Starting ₹1,499" />
          <FeaturedCard title="Winter Wear" price="Starting ₹1,799" />
          <FeaturedCard title="Premium Blazers" price="Starting ₹4,999" />
        </div>
      </section>

      {/* ================= WHATSAPP CTA ================= */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="bg-[#F3F2EA] rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-700">
            Want to check latest arrivals or product availability?
          </p>

          <a
            href="https://wa.me/919214456664"
            target="_blank"
            className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full text-sm hover:bg-gray-900 transition"
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>

      {/* ================= LOCAL SEO TEXT ================= */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl text-sm text-gray-600 leading-relaxed space-y-4">
          <p>
            Anand Fashion is a well-known clothing store in Udaipur offering a
            wide range of men’s wear, women’s wear and premium clothing. Located
            in Bhopalpura near Gattani Hospital, our store has been serving local
            families for over a decade with quality fabrics and latest fashion
            trends.
          </p>

          <p>
            From stylish shirts, jeans and winter wear for men to elegant suits,
            kurtis and co-ord sets for women, Anand Fashion is a trusted choice
            for everyday wear as well as special occasions. Our premium
            collection includes blazers, sherwani and party wear suitable for
            weddings and celebrations in Udaipur.
          </p>
        </div>
      </section>
    </div>
  );
}

/* ================= COLLECTION BOX ================= */

function CollectionBox({
  title,
  subtitle,
  href,
}: {
  title: string;
  subtitle: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="
        group rounded-2xl bg-white/95 text-black p-6
        border border-black/5 hover:bg-white
        transition shadow-sm hover:shadow-md
      "
    >
      <div className="text-lg font-semibold">{title}</div>
      <div className="mt-1 text-sm text-gray-600">{subtitle}</div>

      <div className="mt-4 text-sm font-medium text-black">
        View Collection →
      </div>
    </Link>
  );
}

/* ================= TRUST BADGE ================= */

function TrustBadge({ title }: { title: string }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 py-6 text-sm font-medium">
      {title}
    </div>
  );
}

/* ================= FEATURED CARD ================= */

function FeaturedCard({
  title,
  price,
}: {
  title: string;
  price: string;
}) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md transition">
      <div className="h-32 rounded-lg bg-gray-100 flex items-center justify-center text-sm text-gray-400 mb-3">
        Product Image
      </div>
      <div className="font-medium">{title}</div>
      <div className="text-sm text-gray-600">{price}</div>
    </div>
  );
}
