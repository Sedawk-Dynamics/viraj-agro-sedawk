import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { Phone, Mail, MapPin, Clock, Globe, Shield } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Contact Us | Request a Quote | Viraj Agro Naturals",
  description:
    "Contact Viraj Agro Naturals for bulk moringa export inquiries. Request quotes, samples and shipping arrangements via phone, email, or our enquiry form.",
};

const info = [
  { Icon: Phone, label: "Phone", value: "+91 8737958006", href: "tel:+918737958006" },
  { Icon: Mail, label: "General Enquiries", value: "official@virajagronaturals.com", href: "mailto:official@virajagronaturals.com" },
  { Icon: Mail, label: "Export Enquiries", value: "enquiry@virajagronaturals.com", href: "mailto:enquiry@virajagronaturals.com" },
  { Icon: MapPin, label: "Office Address", value: "429 A Double Storey, Barra 2, Kanpur, Uttar Pradesh, India" },
];

const business = [
  { Icon: Clock, label: "Business Hours", value: "Mon - Sat: 9:00 AM - 6:00 PM IST" },
  { Icon: Globe, label: "Export Markets", value: "We cover almost all major international markets." },
  { Icon: Shield, label: "GST Number", value: "9AAMCV0085D1Z8" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Let's Start Your"
        highlight="Export Journey"
        subtitle="Ready to source premium moringa products from India? Our team is here to assist you with quotes, samples, and shipping arrangements."
      />

      <section className="bg-white py-[70px]">
        <div className="mx-auto max-w-[1200px] px-5 grid lg:grid-cols-[3fr_2fr] gap-12 items-start">
          {/* Form */}
          <Reveal>
            <ContactForm />
          </Reveal>

          {/* Info column */}
          <div className="space-y-7">
            <Reveal delay={80}>
              <div className="bg-gradient-to-br from-brand-band to-[#0f3d20] text-white rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {info.map((r) => (
                    <div key={r.label} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                        <r.Icon size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-white/70">{r.label}</p>
                        {r.href ? (
                          <a href={r.href} className="font-medium hover:text-brand-cream break-words">{r.value}</a>
                        ) : (
                          <p className="font-medium">{r.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="bg-brand-cream rounded-2xl p-8">
                <h3 className="text-xl font-bold text-brand-deep mb-6">Business Information</h3>
                <div className="space-y-6">
                  {business.map((r) => (
                    <div key={r.label} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-brand-accent/10 text-brand-deep flex items-center justify-center shrink-0">
                        <r.Icon size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">{r.label}</p>
                        <p className="font-medium text-brand-deep">{r.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={240}>
              <div className="bg-brand-accent text-white rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-3">Quick Response Guarantee</h3>
                <p className="text-white/85 leading-relaxed">
                  We understand the importance of timely communication in export business. Our team commits to
                  responding to all enquiries within 24-48 business hours.
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-green-300 animate-pulse" />
                  <span className="text-sm text-white/85">Available for international calls</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
