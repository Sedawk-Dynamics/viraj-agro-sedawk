"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Mail, Menu, X } from "./Icons";

const links = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Process", href: "/#process" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Utility bar */}
      <div className="bg-brand-band text-[#e6f0e8] text-[0.82rem]">
        <div className="mx-auto max-w-[1200px] px-5 py-2 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-5">
            <a href="tel:+918737958006" className="inline-flex items-center gap-2 hover:text-white">
              <Phone size={14} /> +91 8737958006
            </a>
            <a href="mailto:official@virajagronaturals.com" className="inline-flex items-center gap-2 hover:text-white">
              <Mail size={14} /> official@virajagronaturals.com
            </a>
          </div>
          <span>APEDA | FSSAI | IEC Certified</span>
        </div>
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white shadow-[0_1px_0_#E6E8E0]">
        <div className="mx-auto max-w-[1200px] px-5 h-[74px] flex items-center justify-between gap-4">
          <Link href="/" className="leading-none">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/logo.png" alt="Viraj Agro Naturals" className="h-11 w-auto" />
          </Link>

          <nav className="hidden lg:flex items-center gap-[26px]">
            {links.map((l) => (
              <Link key={l.label} href={l.href} className="text-[0.93rem] font-medium text-[#27313B] hover:text-brand-deep transition-colors">
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-2 bg-brand-accent text-white px-6 py-3 rounded-[10px] font-semibold text-[0.95rem] hover:bg-brand-light transition-colors"
            >
              Request Quote
            </Link>
            <button
              className="lg:hidden text-brand-deep"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
            >
              {open ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden bg-white border-t border-[#E6E8E0] px-5 pb-4">
            {links.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-3 border-b border-[#E6E8E0] font-medium text-[#27313B] hover:text-brand-deep"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center gap-2 bg-brand-accent text-white px-6 py-3 rounded-[10px] font-semibold"
            >
              Request Quote
            </Link>
          </div>
        )}
      </header>
    </>
  );
}
