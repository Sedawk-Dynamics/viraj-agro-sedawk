import { Phone, Mail, MapPin, WhatsApp, Instagram, Linkedin } from "./Icons";

const quickLinks = [
  { label: "Home", href: "#top" },
  { label: "About Us", href: "#about" },
  { label: "Our Moringa", href: "#products" },
  { label: "Quality", href: "#quality" },
  { label: "Process", href: "#process" },
  { label: "For Bulk Buyers", href: "#bulk" },
  { label: "Contact Us", href: "#footer" },
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
              { Icon: WhatsApp, href: "https://wa.me/918737958006", label: "WhatsApp" },
              { Icon: Instagram, href: "#", label: "Instagram" },
              { Icon: Linkedin, href: "#", label: "LinkedIn" },
              { Icon: Mail, href: "mailto:official@virajagronaturals.com", label: "Email" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/15 transition"
              >
                <Icon size={16} />
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
                <a href={l.href} className="hover:text-white">{l.label}</a>
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
          <a
            href="https://wa.me/918737958006"
            className="mt-1.5 inline-flex items-center gap-2 border-[1.5px] border-white/55 text-white px-6 py-3 rounded-[10px] font-semibold hover:bg-white/10 transition"
          >
            WhatsApp Us <WhatsApp size={16} />
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1200px] px-5 py-[18px] flex flex-wrap justify-between gap-2.5 text-[0.8rem] text-white/60">
          <span>© 2024 Viraj Agro Naturals. All Rights Reserved.</span>
          <span>For Bulk Export Inquiries Only</span>
        </div>
      </div>
    </footer>
  );
}
