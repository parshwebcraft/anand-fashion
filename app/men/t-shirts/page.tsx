import Link from "next/link";
import ProductCard from "@/components/ProductCard";

export const metadata = {
  title: "Men’s T-Shirts in Udaipur | Anand Fashion",
  description:
    "Explore branded men’s T-shirts at Anand Fashion, Udaipur. Browse XYZ T-Shirts and ABC T-Shirts in multiple styles and fits.",
};

export default function MenTshirtsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">

      {/* ================= PAGE HEADER ================= */}
      <div className="space-y-3">
        <h1 className="text-3xl font-bold">Men’s T-Shirts</h1>

        <p className="text-sm text-gray-600 leading-relaxed max-w-3xl">
          Discover a stylish range of men’s T-shirts at Anand Fashion, Udaipur.
          Choose from trusted brands offering comfortable fabrics, modern
          designs and perfect fitting for everyday wear.
        </p>
      </div>

      {/* ================= T-SHIRTS BRANDS HUB ================= */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold">T-Shirt Brands</h2>

        <div
          className="
            flex gap-4 overflow-x-auto pb-3
            md:grid md:grid-cols-4 md:gap-6 md:overflow-visible
          "
        >
          <Link href="/men/t-shirts/xyz" className="block">
            <ProductCard
              name="XYZ T-Shirts"
              category="Men / T-Shirts"
              image="/products/men/tshirts/brands/xyz.jpg"
            />
          </Link>

          <Link href="/men/t-shirts/abc" className="block">
            <ProductCard
              name="ABC T-Shirts"
              category="Men / T-Shirts"
              image="/products/men/tshirts/brands/abc.jpg"
            />
          </Link>
        </div>
      </section>

      {/* ================= STORE NOTE ================= */}
      <p className="text-sm text-gray-600 leading-relaxed max-w-3xl">
        Anand Fashion is a trusted men’s clothing store in Udaipur offering
        branded T-shirts in regular and slim fits. Visit our store in
        Bhopalpura or browse individual brands to enquire about sizes,
        colours and availability.
      </p>

    </div>
  );
}
