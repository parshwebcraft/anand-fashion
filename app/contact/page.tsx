"use client";

export default function ContactPage() {
  return (
    <>
      {/* ===== PAGE CONTENT ===== */}
      <div className="max-w-7xl mx-auto px-4 py-12 space-y-10">
        {/* Page Heading */}
        <h1 className="text-3xl font-bold">Contact Anand Fashion</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* ===== ADDRESS + HOURS ===== */}
          <div className="space-y-4 text-gray-700">
            <p className="font-semibold text-lg">Anand Fashion</p>

            <p>
              D-2, Bhopalpura, Near Gattani Hospital,
              <br />
              Udaipur, Rajasthan – 313001
            </p>

            <p>
              <span className="font-medium">Phone:</span>{" "}
              <a href="tel:+919214456664" className="hover:underline">
                +91 9214456664
              </a>
            </p>

            {/* ===== BUSINESS HOURS ===== */}
            <div className="pt-4 border-t border-gray-200">
              <h3 className="text-sm font-semibold text-gray-900 mb-2">
                Business Hours
              </h3>

              <div className="text-sm text-gray-600 space-y-1">
                <div className="flex justify-between max-w-xs">
                  <span>Monday – Saturday</span>
                  <span>11:00 AM – 9:30 PM</span>
                </div>
                <div className="flex justify-between max-w-xs">
                  <span>Sunday</span>
                  <span>Open</span>
                </div>
              </div>
            </div>

            {/* WhatsApp Button (normal) */}
            <a
              href="https://wa.me/919214456664"
              className="inline-block mt-4 bg-black text-white px-6 py-3 rounded-full text-sm hover:bg-gray-900 transition"
            >
              Chat on WhatsApp
            </a>
          </div>

          {/* ===== HELP BOX ===== */}
          <div className="bg-gray-50 rounded-xl p-6">
            <h2 className="text-lg font-semibold mb-2">Need Help?</h2>

            <p className="text-sm text-gray-600 leading-relaxed">
              Have questions about product availability, sizes, pricing, or
              store location?
              <br />
              Feel free to contact us anytime on WhatsApp or phone.
              <br />
              Our team responds as quickly as possible.
            </p>
          </div>
        </div>

        {/* ===== GOOGLE MAP ===== */}
        <div className="rounded-xl overflow-hidden border mt-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d226.7512231385701!2d73.70028153061867!3d24.58852081204805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e558ead0f925%3A0xed856755bbeb0510!2sAnand%20Fashion!5e0!3m2!1sen!2sin!4v1765788231408!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>

      

    </>
  );
}
