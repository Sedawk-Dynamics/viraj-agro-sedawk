"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Mail, Menu, X, Facebook, Instagram, Linkedin, WhatsApp } from "./Icons";

const links = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Process", href: "/process" },
  { label: "Contact", href: "/contact" },
];

const socials = [
  { Icon: Facebook, href: "https://www.facebook.com/virajnaturals/", label: "Facebook", color: "#1877F2" },
  { Icon: Instagram, href: "https://www.instagram.com/virajagronaturals/", label: "Instagram", color: "#E4405F" },
  { Icon: Linkedin, href: "https://www.linkedin.com/company/viraj-agro-naturals-private-limited", label: "LinkedIn", color: "#0A66C2" },
  { Icon: WhatsApp, href: "https://wa.me/918737958006", label: "WhatsApp", color: "#25D366" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Utility bar */}
      <div className="bg-brand-band text-[#e6f0e8] text-[0.92rem]">
        <div className="mx-auto max-w-[1200px] px-5 py-2.5 flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-1">
            <a href="tel:+918737958006" className="inline-flex items-center gap-2 hover:text-white">
              <Phone size={16} /> +91 8737958006
            </a>
            <a href="mailto:official@virajagronaturals.com" className="inline-flex items-center gap-2 hover:text-white">
              <Mail size={16} /> official@virajagronaturals.com
            </a>
          </div>

          <div className="flex items-center gap-3">
            <span>APEDA | FSSAI | IEC Certified</span>
            <div className="flex items-center gap-2 pl-3 border-l border-white/25">
              <span className="hidden sm:inline">Follow us on</span>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-8 h-8 rounded-full bg-white flex items-center justify-center transition-transform hover:scale-110 hover:shadow"
                  style={{ color: s.color }}
                >
                  <s.Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white shadow-[0_1px_0_#E6E8E0]">
        <div className="mx-auto max-w-[1200px] px-5 h-[74px] flex items-center justify-between gap-4">
          <Link href="/" className="leading-none">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img id="site-logo" src="/images/logo.png" alt="Viraj Agro Naturals" className="h-11 w-auto" />
          </Link>

          <div className="flex items-center gap-8">
            <nav className="hidden lg:flex items-center gap-[30px]">
              {links.map((l) => (
                <Link key={l.label} href={l.href} className="text-[0.95rem] font-medium text-[#27313B] hover:text-brand-deep transition-colors">
                  {l.label}
                </Link>
              ))}
            </nav>

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
          </div>
        )}
      </header>
    </>
  );
}
