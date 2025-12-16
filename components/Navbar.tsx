"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

/* ================= TYPES ================= */

type NavItemProps = {
  href: string;
  active: boolean;
  children: React.ReactNode;
};

type DropdownProps = {
  label: string;
  href: string;
  active: boolean;
  children: React.ReactNode;
};

type MobileLinkProps = {
  href: string;
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
};

/* ================= NAVBAR ================= */

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="bg-[#F7F6EE] border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="text-xl font-bold text-black">
          Anand Fashion
        </Link>

        {/* ================= DESKTOP NAV ================= */}
        <nav className="hidden md:flex items-center gap-2 text-sm font-medium">

          <NavLink href="/" active={isActive("/")}>Home</NavLink>

          <Dropdown label="Men" href="/men" active={isActive("/men")}>
            <DropdownLink href="/men/shirts">Shirts</DropdownLink>
            <DropdownLink href="/men/jeans">Jeans</DropdownLink>
            <DropdownLink href="/men/t-shirts">T-Shirts</DropdownLink>
            <DropdownLink href="/men/cargo-pants">Cargo Pants</DropdownLink>
            <DropdownLink href="/men/winter">Winter Wear</DropdownLink>
          </Dropdown>

          <Dropdown label="Women" href="/women" active={isActive("/women")}>
            <DropdownLink href="/women/suits">Suits</DropdownLink>
            <DropdownLink href="/women/kurtis">Kurtis</DropdownLink>
          </Dropdown>

          <Dropdown label="Premium" href="/premium" active={isActive("/premium")}>
            <DropdownLink href="/premium/blazers">Blazers</DropdownLink>
            <DropdownLink href="/premium/sherwani">Sherwani</DropdownLink>
            <DropdownLink href="/premium/party-wear">Party Wear</DropdownLink>
            <DropdownLink href="/premium/wedding-wear">Wedding Wear</DropdownLink>
          </Dropdown>

          <NavLink href="/contact" active={isActive("/contact")}>Contact</NavLink>
        </nav>

        {/* ================= MOBILE BUTTON ================= */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {open && (
        <div className="md:hidden bg-[#F7F6EE] border-t">
          <nav className="flex flex-col px-4 py-4 gap-2">
            <MobileLink href="/" active={isActive("/")} onClick={() => setOpen(false)}>Home</MobileLink>
            <MobileLink href="/men" active={isActive("/men")} onClick={() => setOpen(false)}>Men</MobileLink>
            <MobileLink href="/women" active={isActive("/women")} onClick={() => setOpen(false)}>Women</MobileLink>
            <MobileLink href="/premium" active={isActive("/premium")} onClick={() => setOpen(false)}>Premium</MobileLink>
            <MobileLink href="/contact" active={isActive("/contact")} onClick={() => setOpen(false)}>Contact</MobileLink>
          </nav>
        </div>
      )}
    </header>
  );
}

/* ================= NAV LINK ================= */

function NavLink({ href, active, children }: NavItemProps) {
  return (
    <Link
      href={href}
      className={`px-3 py-1.5 rounded-md transition ${
        active
          ? "bg-black text-white"
          : "text-gray-600 hover:bg-black/5 hover:text-black"
      }`}
    >
      {children}
    </Link>
  );
}

/* ================= DROPDOWN ================= */

function Dropdown({ label, href, active, children }: DropdownProps) {
  return (
    <div className="relative group">

      {/* LABEL */}
      <Link
        href={href}
        className={`px-3 py-1.5 rounded-md inline-block transition ${
          active
            ? "bg-black text-white"
            : "text-gray-600 hover:bg-black/5 hover:text-black"
        }`}
      >
        {label}
      </Link>

      {/* HOVER BRIDGE */}
      <div className="absolute left-0 top-full h-2 w-full" />

      {/* DROPDOWN */}
      <div
        className="
          absolute left-0 top-full mt-2 w-56
          bg-white border rounded-lg shadow-lg
          opacity-0 invisible
          group-hover:opacity-100 group-hover:visible
          transition
        "
      >
        {children}
      </div>
    </div>
  );
}

/* ================= DROPDOWN LINK ================= */

function DropdownLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
    >
      {children}
    </Link>
  );
}

/* ================= MOBILE LINK ================= */

function MobileLink({
  href,
  active,
  onClick,
  children,
}: MobileLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`px-3 py-2 rounded-md text-sm transition ${
        active
          ? "bg-black text-white"
          : "text-gray-600 hover:bg-black/5"
      }`}
    >
      {children}
    </Link>
  );
}
