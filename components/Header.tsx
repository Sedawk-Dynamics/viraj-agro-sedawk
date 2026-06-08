"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Phone, Mail, ChevronDown, Menu, X } from "./Icons";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopProductsOpen, setDesktopProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  /* Sticky header shadow on scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close desktop dropdown on outside click */
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDesktopProductsOpen(false);
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileProductsOpen(false);
  };

  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}`}>
      <nav className="container-max">
        <div className="nav">
          <Link href="/" className="nav-logo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/logo.png" alt="Viraj Agro Naturals" />
          </Link>

          <div className="nav-desktop">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/about" className="nav-link">About Us</Link>
            <div className={`nav-dropdown${desktopProductsOpen ? " open" : ""}`} ref={dropdownRef}>
              <button
                className="nav-dropdown-btn"
                aria-haspopup="true"
                aria-expanded={desktopProductsOpen}
                onClick={(e) => {
                  e.preventDefault();
                  setDesktopProductsOpen((v) => !v);
                }}
              >
                Products
                <ChevronDown size={16} className="chev" />
              </button>
              <div className="nav-dropdown-menu" role="menu">
                <Link href="/products/moringa-powder">Moringa Powder</Link>
                <Link href="/products/chicory-roots">Chicory Roots</Link>
              </div>
            </div>
            <Link href="/contact" className="nav-link">Contact</Link>
            <Link href="/contact" className="nav-cta">Get Quote</Link>
          </div>

          <button
            className={`nav-mobile-btn${mobileOpen ? " open" : ""}`}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <div className={`nav-mobile${mobileOpen ? " open" : ""}`}>
        <div className="container-max nav-mobile-inner">
          <Link href="/" onClick={closeMobile}>Home</Link>
          <Link href="/about" onClick={closeMobile}>About Us</Link>
          <div>
            <button
              className={`dropdown-btn${mobileProductsOpen ? " open" : ""}`}
              aria-expanded={mobileProductsOpen}
              onClick={(e) => {
                e.preventDefault();
                setMobileProductsOpen((v) => !v);
              }}
            >
              <span>Products</span>
              <ChevronDown size={16} className="chev" />
            </button>
            <div className={`sub${mobileProductsOpen ? " open" : ""}`}>
              <Link href="/products/moringa-powder" onClick={closeMobile}>Moringa Powder</Link>
              <Link href="/products/chicory-roots" onClick={closeMobile}>Chicory Roots</Link>
            </div>
          </div>
          <Link href="/contact" onClick={closeMobile}>Contact</Link>
          <Link href="/contact" className="nav-mobile-cta" onClick={closeMobile}>Get Quote</Link>
          <div className="nav-mobile-contact">
            <a href="tel:+918737958006">
              <Phone size={16} />
              +91 8737958006
            </a>
            <a href="mailto:official@virajagronaturals.com">
              <Mail size={16} />
              official@virajagronaturals.com
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
