"use client";

export default function WhatsAppFloating() {
  const phoneNumber = "919214456664";

  const message = encodeURIComponent(
    "Hello Anand Fashion 👋\nI visited your website and would like to know more about your collections."
  );

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition"
    >
      {/* Original WhatsApp SVG */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="currentColor"
        className="w-7 h-7"
      >
        <path d="M19.11 17.2c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.67-2.08-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.48-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5s1.07 2.9 1.22 3.1c.15.2 2.1 3.2 5.1 4.5.71.3 1.27.48 1.7.62.71.22 1.36.19 1.87.12.57-.08 1.75-.72 2-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35zM16.04 3C9.4 3 4 8.4 4 15.04c0 2.65.87 5.1 2.34 7.08L4 29l7.08-2.29a12 12 0 005.96 1.52c6.64 0 12.04-5.4 12.04-12.04C29.08 8.4 23.68 3 16.04 3zm0 22.08c-2.36 0-4.56-.69-6.42-1.88l-.46-.27-4.2 1.36 1.38-4.1-.3-.47a9.94 9.94 0 01-1.58-5.38c0-5.5 4.48-9.98 9.98-9.98 5.5 0 9.98 4.48 9.98 9.98 0 5.5-4.48 9.98-9.98 9.98z" />
      </svg>
    </button>
  );
}
