import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import {
  ArrowRight,
  CheckCircle,
  Shield,
  FlaskConical,
  FileCheck,
  Truck,
  Package,
  Globe,
  FileText,
  Phone,
  Mail,
  WhatsApp,
} from "@/components/Icons";

export const metadata: Metadata = {
  title: "Moringa Capsules | Premium Bulk Export | Viraj Agro Naturals",
  description:
    "Premium quality Moringa Oleifera leaf capsules for bulk export. Convenient, nutrient-dense supplement form. Lab tested, APEDA certified, with complete traceability from farm to shipment.",
};

const specs = [
  { label: "Botanical Name", value: "Moringa Oleifera" },
  { label: "Part Used", value: "Leaves" },
  { label: "Capsule Type", value: "Vegetarian / HPMC" },
  { label: "Fill Weight", value: "500 mg" },
  { label: "Color", value: "Dark Green Powder Fill" },
];

const benefits = [
  "Rich in Nutrients",
  "Powerful Antioxidants",
  "Anti-inflammatory Properties",
  "Blood Sugar Support",
  "Heart Health",
  "Convenient Daily Dosage",
];

const quality = [
  { Icon: Shield, title: "Verified Sourcing", desc: "Direct partnerships with certified farms ensuring authentic origin." },
  { Icon: FlaskConical, title: "Lab Tested", desc: "Every batch tested at NABL accredited laboratories." },
  { Icon: FileCheck, title: "Full Traceability", desc: "Complete documentation from farm to shipment." },
  { Icon: Truck, title: "Export Ready", desc: "Compliant with APEDA, FSSAI, and international standards." },
];

const packOptions = [
  { size: "60 Capsules", desc: "HDPE Bottles" },
  { size: "100 Capsules", desc: "HDPE Bottles" },
  { size: "Custom", desc: "As per buyer requirements" },
];

const supply = [
  { Icon: Truck, label: "Bulk orders welcome" },
  { Icon: Globe, label: "Worldwide shipping" },
  { Icon: FileText, label: "Full documentation" },
  { Icon: Package, label: "Custom packaging" },
];

const customPack = [
  { title: "Private Label Ready", desc: "We support full private label packaging — your brand on our premium product." },
  { title: "Custom Bottle Sizes", desc: "Available in 30, 60, 100 and 120 count bottles to match your requirements." },
  { title: "Branded Outer Cartons", desc: "Cartons printed to your specifications for professional shelf presentation." },
  { title: "Blister Pack Options", desc: "Moisture-resistant blister packaging for extended shelf freshness." },
  { title: "Retail-Ready Packs", desc: "Consumer-ready packaging suitable for direct retail placement." },
  { title: "OEM Bulk Supply", desc: "Unbranded bulk supply for in-house packing and private processing." },
];

export default function MoringaCapsulePage() {
  return (
    <>
      <PageHero
        eyebrow="Premium Export Product"
        title="Moringa Capsules"
        subtitle="Nature's Superfood from India — premium Moringa Oleifera leaf capsules, sustainably sourced and export-ready."
        image="/images/moringa-capsule-hero.png"
        align="left"
      >
        <Link href="/contact" className="btn-primary">Send Enquiry <ArrowRight size={18} /></Link>
        <a href="#overview" className="btn-ghost-light">Learn More</a>
      </PageHero>

      {/* Overview */}
      <section id="overview" className="bg-white py-[70px]">
        <div className="mx-auto max-w-[1200px] px-5 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal from="right" className="relative">
            <div className="rounded-2xl overflow-hidden shadow-[0_25px_50px_-12px_rgba(20,83,45,0.25)] aspect-square">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/moringa-capsule.png" alt="Premium Moringa Oleifera leaf capsules" className="w-full h-full object-cover object-top" />
            </div>
            <div className="hidden md:block absolute -bottom-6 -right-5 bg-brand-deep text-white px-5 py-4 rounded-xl shadow-xl">
              <p className="text-sm font-medium">Export Quality</p>
              <p className="text-2xl font-extrabold">Premium Grade</p>
            </div>
          </Reveal>

          <div>
            <Reveal><span className="inline-block px-4 py-1.5 rounded-full bg-brand-accent/10 text-brand-deep text-sm font-medium">Product Overview</span></Reveal>
            <Reveal delay={80}><h2 className="mt-4 text-4xl md:text-5xl font-bold text-brand-deep leading-tight">Premium Moringa Oleifera Leaf Capsules</h2></Reveal>
            <Reveal delay={140}><p className="mt-5 text-gray-500 leading-relaxed">Moringa Oleifera, known as the &apos;Miracle Tree,&apos; is one of the most nutrient-dense plants on earth. Our premium moringa capsules are made from carefully selected, organically grown moringa leaves, encapsulated to preserve their exceptional nutritional profile in a convenient daily dosage.</p></Reveal>
            <Reveal delay={200}><p className="mt-4 text-gray-500 leading-relaxed">We source our moringa from verified farms across India, ensuring sustainable cultivation practices and complete traceability. Each batch undergoes rigorous testing at NABL accredited laboratories to meet international quality and safety standards.</p></Reveal>
            <Reveal delay={260}>
              <div className="mt-7 grid grid-cols-2 gap-4">
                {specs.map((s) => (
                  <div key={s.label} className="p-4 rounded-xl bg-brand-cream">
                    <p className="text-base text-gray-500">{s.label}</p>
                    <p className="font-semibold text-brand-deep">{s.value}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-brand-cream py-[70px]">
        <div className="mx-auto max-w-[1200px] px-5">
          <div className="text-center mb-12">
            <Reveal><span className="inline-block px-4 py-1.5 rounded-full bg-brand-accent/10 text-brand-deep text-sm font-medium">Benefits</span></Reveal>
            <Reveal delay={80}><h2 className="mt-4 text-4xl md:text-5xl font-bold text-brand-deep">Health &amp; Nutritional Benefits</h2></Reveal>
            <Reveal delay={140}><p className="mt-3 text-gray-500 max-w-2xl mx-auto">Discover the exceptional properties that make moringa a premium choice for health-conscious consumers and businesses worldwide.</p></Reveal>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <Reveal key={b} delay={(i % 3) * 100}>
                <div className="h-full bg-white rounded-2xl p-6 flex items-center gap-4 transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="w-12 h-12 rounded-xl bg-brand-accent/10 text-brand-deep flex items-center justify-center shrink-0">
                    <CheckCircle size={22} />
                  </div>
                  <h3 className="text-xl font-semibold text-brand-deep">{b}</h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quality standards */}
      <section className="bg-gradient-to-br from-brand-band to-[#0f3d20] text-white py-[70px]">
        <div className="mx-auto max-w-[1200px] px-5 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Reveal><span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white text-sm font-medium">Quality Assurance</span></Reveal>
            <Reveal delay={80}><h2 className="mt-4 text-4xl md:text-5xl font-bold text-white leading-tight">Export Quality Standards You Can Trust</h2></Reveal>
            <Reveal delay={140}><p className="mt-5 text-white/85 text-lg leading-relaxed">Every product we export undergoes rigorous quality checks to ensure it meets international standards. From sourcing to shipping, quality is our top priority.</p></Reveal>
            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              {quality.map((q, i) => (
                <Reveal key={q.title} delay={i * 100}>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                      <q.Icon size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold">{q.title}</h3>
                      <p className="text-sm text-white/70 mt-0.5">{q.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal from="left">
            <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/quality-lab.jpg" alt="Quality testing" className="w-full h-full object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Packaging */}
      <section className="bg-white py-[70px]">
        <div className="mx-auto max-w-[1200px] px-5 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal from="right">
            <div className="rounded-2xl overflow-hidden shadow-[0_25px_50px_-12px_rgba(20,83,45,0.25)] aspect-[4/3]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/packaging.jpg" alt="Bulk export packaging" className="w-full h-full object-cover" />
            </div>
          </Reveal>
          <div>
            <Reveal><span className="inline-block px-4 py-1.5 rounded-full bg-brand-accent/10 text-brand-deep text-sm font-medium">Packaging &amp; Supply</span></Reveal>
            <Reveal delay={80}><h2 className="mt-4 text-4xl md:text-5xl font-bold text-brand-deep leading-tight">Bulk Export Packaging</h2></Reveal>
            <Reveal delay={140}><p className="mt-5 text-gray-500 text-lg leading-relaxed">We offer flexible packaging options to meet your bulk export requirements. All packaging is food-grade and designed to maintain product quality during international transit.</p></Reveal>
            <div className="mt-7 space-y-3">
              {packOptions.map((p, i) => (
                <Reveal key={p.size} delay={i * 90} from="left">
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-brand-cream">
                    <Package size={24} className="text-brand-accent shrink-0" />
                    <div>
                      <p className="font-semibold text-brand-deep">{p.size}</p>
                      <p className="text-base text-gray-500">{p.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={120}>
              <div className="mt-6 grid grid-cols-2 gap-4">
                {supply.map(({ Icon, label }) => (
                  <div key={label} className="flex items-center gap-2.5 text-base text-gray-500">
                    <Icon size={20} className="text-brand-accent shrink-0" /> {label}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Custom Packaging */}
      <section className="bg-brand-cream py-[70px]">
        <div className="mx-auto max-w-[1200px] px-5">
          <div className="text-center mb-12">
            <Reveal><span className="inline-block px-4 py-1.5 rounded-full bg-brand-accent/10 text-brand-deep text-sm font-medium">Custom Packaging</span></Reveal>
            <Reveal delay={80}><h2 className="mt-4 text-4xl md:text-5xl font-bold text-brand-deep">Tailored Packaging for Your Brand</h2></Reveal>
            <Reveal delay={140}><p className="mt-3 text-gray-500 max-w-2xl mx-auto">We offer complete custom packaging solutions — from private label to retail-ready packs — designed to meet your exact brand and market requirements.</p></Reveal>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {customPack.map((item, i) => (
              <Reveal key={item.title} delay={(i % 3) * 100}>
                <div className="h-full bg-white rounded-2xl p-6 transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="w-12 h-12 rounded-xl bg-brand-accent/10 text-brand-deep flex items-center justify-center mb-4">
                    <Package size={22} />
                  </div>
                  <h3 className="font-semibold text-brand-deep mb-2">{item.title}</h3>
                  <p className="text-base text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white pb-[70px]">
        <div className="mx-auto max-w-[1200px] px-5">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-accent to-brand-deep text-white text-center px-6 py-14 md:py-16">
              <div className="pointer-events-none absolute -top-16 -right-10 w-72 h-72 rounded-full bg-white/10 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-16 -left-10 w-72 h-72 rounded-full bg-white/10 blur-3xl" />
              <div className="relative">
                <h2 className="text-3xl md:text-4xl font-bold max-w-3xl mx-auto">Interested in Bulk Moringa Capsules?</h2>
                <p className="mt-4 text-white/85 max-w-2xl mx-auto">Get in touch with our export team for pricing, samples, and shipping arrangements. We&apos;re here to help you source premium quality products from India.</p>
                <div className="mt-8 flex flex-wrap gap-4 justify-center">
                  <Link href="/contact" className="btn-white">Send Enquiry <ArrowRight size={18} /></Link>
                  <a href="tel:+918737958006" className="btn-ghost-light"><Phone size={18} /> Call Us Now</a>
                </div>
                <div className="mt-8 flex flex-wrap gap-6 justify-center text-white/80 text-sm">
                  <a href="tel:+918737958006" className="inline-flex items-center gap-2 hover:text-white"><Phone size={18} /> +91 8737958006</a>
                  <a href="https://wa.me/918737958006" className="inline-flex items-center gap-2 hover:text-white"><WhatsApp size={18} /> WhatsApp Us</a>
                  <a href="mailto:enquiry@virajagronaturals.com" className="inline-flex items-center gap-2 hover:text-white"><Mail size={18} /> enquiry@virajagronaturals.com</a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
