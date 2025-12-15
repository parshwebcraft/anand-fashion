import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 bg-[#F3F2EA]">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Shop Info */}
        <div>
          <div className="text-xl font-bold mb-2">Anand Fashion</div>

          <p className="text-sm text-gray-600 mb-3">
            Proprietor: Anand Goswani
          </p>

          <p className="text-sm text-gray-600 mb-4">
            Men, Women & Kids Wear · Winter, Summer & Premium Clothing
          </p>

          <div className="space-y-2 text-sm text-gray-600">
            <div>
              <span className="font-medium">Phone:</span>{" "}
              <a href="tel:+919214456664" className="hover:underline">
                +91 9214456664
              </a>
            </div>

            <div>
              <span className="font-medium">Address:</span>
              <br />
              Anand Fashion,
              <br />
              D-2, Bhopalpura, Near Gattani Hospital,
              <br />
              Udaipur, Rajasthan – 313001
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <div className="text-sm font-semibold mb-3">Quick Links</div>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/winter" className="hover:underline">Winter Collection</Link></li>
            <li><Link href="/summer" className="hover:underline">Summer Collection</Link></li>
            <li><Link href="/premium" className="hover:underline">Premium Collection</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* Map + WhatsApp CTA */}
        <div>
          <div className="text-sm font-semibold mb-3">Find Us</div>

          <div className="rounded-xl overflow-hidden border mb-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d226.7512231385701!2d73.70028153061867!3d24.58852081204805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e558ead0f925%3A0xed856755bbeb0510!2sAnand%20Fashion!5e0!3m2!1sen!2sin!4v1765788231408!5m2!1sen!2sin"
              width="100%"
              height="200"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <a
            href="https://www.google.com/maps/place/Anand+Fashion+Udaipur"
            target="_blank"
            className="block text-sm text-gray-600 hover:underline mb-4"
          >
            View on Google Maps →
          </a>

          <a
            href="https://wa.me/919214456664"
            className="inline-block bg-black text-white px-6 py-3 rounded-full text-sm hover:bg-gray-900 transition"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div> {/* ✅ THIS WAS MISSING */}

      {/* Bottom bar */}
      <div className="border-t border-gray-300/40">
        <div className="max-w-7xl mx-auto px-4 py-4 text-xs text-center text-gray-500">
          © {new Date().getFullYear()} Anand Fashion · Website by{" "}
          <span className="font-medium">ParshWebCraft</span>
        </div>
      </div>
    </footer>
  );
}
