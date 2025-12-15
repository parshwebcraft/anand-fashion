import ProductCard from "@/components/ProductCard";
import ProductRow from "@/components/ProductRow";

export const metadata = {
  title: "Men’s Clothing Store in Udaipur",
  description:
    "Shop men’s clothing in Udaipur at Anand Fashion. Explore shirts, jeans, t-shirts, cargo pants, jackets and winter wear.",
};

export default function MenPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-20">
      
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold">Men’s Collection</h1>
        <p className="text-sm text-gray-600 leading-relaxed max-w-3xl">
  Anand Fashion is a trusted men’s clothing with exclusive branded summer and winter wear for men
</p>

      </div>

      {/* ===== SUMMER WEAR ===== */}
      <Section title="Summer Wear">
        
        <ProductRow title="Shirts">
          <ProductCard
            name="Men Cotton Shirt"
            price="₹1,299"
            category="Men / Shirts"
            image="/products/men/Shirt.jpg"
          />
          <ProductCard
            name="Formal White Shirt"
            price="₹1,499"
            category="Men / Shirts"
            image="/products/men/Shirt.jpg"
          />
        </ProductRow>

        <ProductRow title="Jeans">
          <ProductCard
            name="Slim Fit Denim Jeans"
            price="₹1,799"
            category="Men / Jeans"
            image="/products/men/Jeans-1.jpg"
          />
          <ProductCard
            name="Regular Blue Jeans"
            price="₹1,699"
            category="Men / Jeans"
            image="/products/men/Jeans-1.jpg"
          />
        </ProductRow>

        <ProductRow title="T-Shirts">
          <ProductCard
            name="Printed T-Shirt"
            price="₹899"
            category="Men / T-Shirts"
            image="/products/men/T-Shirt-2.jpg"
          />
          <ProductCard
            name="Plain Cotton T-Shirt"
            price="₹799"
            category="Men / T-Shirts"
            image="/products/men/T-Shirt-1.jpg"
          />
        </ProductRow>

        <ProductRow title="Cargo Pants">
          <ProductCard
            name="Men Cargo Pants"
            price="₹1,599"
            category="Men / Cargo Pants"
            image="/products/men/cargo-1.jpg"
          />
          <ProductCard
            name="Slim Fit Cargo"
            price="₹1,699"
            category="Men / Cargo Pants"
            image="/products/men/cargo-1.jpg"
          />
        </ProductRow>

      </Section>

      {/* ===== WINTER WEAR ===== */}
      <Section title="Winter Wear">
        <ProductRow title="Jackets, Hoodies & Sweaters">
          <ProductCard
  name="Men Cotton Shirt"
  price="₹1,299"
  category="Men / Shirts"
  image="/products/men/shirt-1.jpg"
/>

          <ProductCard
  name="Hodded Sweat Shirt"
  price="₹1,599"
  category="Men / Shirts"
  image="/products/men/shirt-2.jpg"
/>
     <ProductCard
  name="Men Full Shirt"
  price="₹1,299"
  category="Men / Shirts"
  image="/products/men/shirt-1.jpg"
/>

        </ProductRow>
      </Section>

    </div>
  );
}
 <p className="text-sm text-gray-600 leading-relaxed max-w-3xl">
  Anand Fashion is a trusted men’s clothing store in Udaipur offering a wide
  range of shirts, jeans, t-shirts, cargo pants, and winter wear. Located in
  Bhopalpura, we are known for quality clothing and affordable pricing.
</p>
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



