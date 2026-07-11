import Link from "next/link";
import { Phone, Mail, MapPin, Instagram, Linkedin, Facebook, WhatsApp } from "./Icons";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Process", href: "/process" },
  { label: "For Bulk Buyers", href: "/#bulk" },
  { label: "Contact Us", href: "/contact" },
];

export default function SiteFooter() {
  return (
    <footer id="footer" className="bg-brand-deep text-white/80">
      <div className="mx-auto max-w-[1200px] px-5 py-[54px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr] gap-10">
        {/* Brand */}
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/logo.png" alt="Viraj Agro Naturals" className="h-12 w-auto brightness-0 invert" />
          <p className="text-[0.85rem] mt-4 text-white/70 leading-relaxed">
            Specialized in premium moringa products exported from India to global markets with quality,
            integrity and commitment.
          </p>
          <div className="flex gap-3 mt-5">
            {[
              { Icon: Facebook, href: "https://www.facebook.com/virajnaturals/", label: "Facebook", color: "#1877F2" },
              { Icon: Instagram, href: "https://www.instagram.com/virajagronaturals/", label: "Instagram", color: "#E4405F" },
              { Icon: Linkedin, href: "https://www.linkedin.com/company/viraj-agro-naturals-private-limited", label: "LinkedIn", color: "#0A66C2" },
              { Icon: WhatsApp, href: "https://wa.me/918737958006", label: "WhatsApp", color: "#25D366" },
            ].map(({ Icon, href, label, color }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white flex items-center justify-center transition-transform hover:scale-110 hover:shadow"
                style={{ color }}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="text-white text-base font-bold mb-[18px]">Quick Links</h4>
          <ul className="space-y-[11px] text-[0.88rem] text-white/70">
            {quickLinks.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="hover:text-white">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Certifications */}
        <div>
          <h4 className="text-white text-base font-bold mb-[18px]">Certifications</h4>
          <ul className="space-y-[11px] text-[0.88rem] text-white/70">
            <li>APEDA Certified</li>
            <li>FSSAI Registered</li>
            <li>IEC Certified</li>
            <li>USFDA Registered</li>
          </ul>
          <div className="flex gap-2.5 mt-4">
            {[
              { src: "/images/apeda.jpg", alt: "APEDA Certified" },
              { src: "/images/fssai.jpg", alt: "FSSAI Registered" },
              { src: "/images/iec.png", alt: "IEC Certified" },
            ].map((b) => (
              <div
                key={b.src}
                className="w-[68px] h-[52px] rounded-xl bg-white flex items-center justify-center p-1.5 shadow-sm overflow-hidden"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={b.src} alt={b.alt} className="max-w-full max-h-full object-contain" />
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white text-base font-bold mb-[18px]">Contact Us</h4>
          <div className="flex items-center gap-2.5 text-[0.88rem] mb-[13px]">
            <Phone size={16} /> <a href="tel:+918737958006" className="hover:text-white">+91 8737958006</a>
          </div>
          <div className="flex items-center gap-2.5 text-[0.88rem] mb-[13px]">
            <Mail size={16} />{" "}
            <a href="mailto:official@virajagronaturals.com" className="hover:text-white">
              official@virajagronaturals.com
            </a>
          </div>
          <div className="flex items-center gap-2.5 text-[0.88rem] mb-[13px]">
            <MapPin size={16} /> India
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1200px] px-5 py-[18px] flex flex-wrap justify-between gap-2.5 text-[0.8rem] text-white/60">
          <span>© 2025 Viraj Agro Naturals. All Rights Reserved.</span>
          <span>Designed by <a href="https://webel.io/" target="_blank" rel="noopener noreferrer" className="hover:text-white underline underline-offset-2">Webelio</a></span>
        </div>
      </div>
    </footer>
  );
}
