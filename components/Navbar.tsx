"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Men", href: "/men" },
    { name: "Women", href: "/women" },
    { name: "Premium", href: "/premium" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="bg-[#F7F6EE] border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          Anand Fashion
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const active = isActive(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative group text-sm font-medium transition ${
                  active ? "text-black" : "text-gray-600 hover:text-black"
                }`}
              >
                {link.name}

                {/* Underline */}
                <span
                  className={`
                    absolute left-0 -bottom-1 h-[2px] w-full bg-black
                    transform transition-transform duration-300
                    ${active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}
                    origin-left
                  `}
                />
              </Link>
            );
          })}
        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#F7F6EE] border-t">
          <nav className="flex flex-col px-4 py-4 gap-4">
            {navLinks.map((link) => {
              const active = isActive(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`text-sm font-medium ${
                    active ? "text-black underline" : "text-gray-600"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
