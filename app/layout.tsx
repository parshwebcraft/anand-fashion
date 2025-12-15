import "./globals.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppFloating from "@/components/WhatsAppFloating";

export const metadata = {
  title: {
    default: "Anand Fashion | Men, Women & Premium Wear in Udaipur",
    template: "%s | Anand Fashion Udaipur",
  },
  description:
    "Anand Fashion is a clothing store in Udaipur offering men, women and premium wear.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#FAFAFA] text-gray-800">
        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <main>{children}</main>

        {/* Footer */}
        <Footer />

        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ClothingStore",
              name: "Anand Fashion",
              address: {
                "@type": "PostalAddress",
                streetAddress: "D-2, Bhopalpura, Near Gattani Hospital",
                addressLocality: "Udaipur",
                addressRegion: "Rajasthan",
                postalCode: "313001",
                addressCountry: "IN",
              },
              telephone: "+919214456664",
              url: "https://anandfashion.in",
              openingHours: "Mo-Su 10:00-21:30",
              priceRange: "₹₹",
            }),
          }}
        />

        {/* Global WhatsApp Floating */}
        <WhatsAppFloating />
      </body>
    </html>
  );
}
