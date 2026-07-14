import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
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
  title: "Moringa Tea Cut | Bulk Export | Viraj Agro Naturals",
  description:
    "Premium moringa tea-cut leaves for bulk export. Ideal for herbal teas, infusions and aromatic blends. Lab tested, export-grade, with custom packaging support.",
  keywords: [
    "moringa tea cut",
    "moringa tea cut leaves",
    "moringa herbal tea supplier",
    "moringa infusion leaves",
    "moringa tea bulk export",
    "cut and sifted moringa",
  ],
  alternates: { canonical: "/products/moringa-tea-cut" },
  openGraph: {
    title: "Moringa Tea Cut | Bulk Export | Viraj Agro Naturals",
    description:
      "Premium moringa tea-cut leaves for bulk export. Ideal for herbal teas, infusions and aromatic blends. Lab tested and export-grade.",
    url: "https://www.virajagronaturals.com/products/moringa-tea-cut",
    type: "website",
    images: [{ url: "/images/Moringa%20Tea%20Cut.jpg", alt: "Moringa Tea Cut" }],
  },
};

const specs = [
  { label: "Botanical Name", value: "Moringa Oleifera" },
  { label: "Part Used", value: "Leaves" },
  { label: "Processing", value: "Shade Dried & Cut" },
  { label: "Cut Size", value: "Tea Cut (2–4 mm)" },
  { label: "Color", value: "Natural Green" },
];

const benefits = [
  "Aromatic & Flavourful",
  "Rich in Antioxidants",
  "Natural Detox Support",
  "Ideal for Herbal Blends",
  "Uniform Tea-Cut Size",
  "Low Moisture Content",
];

const quality = [
  { Icon: Shield, title: "Verified Sourcing", desc: "Sourced from certified moringa farms across India with complete traceability." },
  { Icon: FlaskConical, title: "Lab Tested", desc: "Tested at NABL accredited labs for moisture, microbial count and purity." },
  { Icon: FileCheck, title: "Full Documentation", desc: "COA, phytosanitary, and all export documents provided with every shipment." },
  { Icon: Truck, title: "Export Ready", desc: "Packed and certified to meet APEDA, FSSAI, and international tea standards." },
];

const packOptions = [
  { size: "25 KG", desc: "Food Grade HDPE / Poly Bags" },
  { size: "50 KG", desc: "Multi-layer Craft Paper Bags" },
  { size: "Custom", desc: "Private label & custom packaging available" },
];

const supply = [
  { Icon: Truck, label: "Bulk orders welcome" },
  { Icon: Globe, label: "Worldwide shipping" },
  { Icon: FileText, label: "Full documentation" },
  { Icon: Package, label: "Custom packaging" },
];

const customPack = [
  { title: "Private Label Ready", desc: "We support full private label packaging — your brand on our premium product." },
  { title: "Custom Bag Sizes", desc: "Available in 1 KG, 5 KG, 10 KG, 25 KG and 50 KG to match your requirements." },
  { title: "Branded Outer Cartons", desc: "Cartons printed to your specifications for professional shelf presentation." },
  { title: "Vacuum-Sealed Options", desc: "Nitrogen-flushed, vacuum-sealed packaging for extended shelf freshness." },
  { title: "Retail-Ready Packs", desc: "Consumer-ready packaging suitable for direct retail placement." },
  { title: "OEM Bulk Supply", desc: "Unbranded bulk supply for in-house packing and private processing." },
];

export default function MoringaTeaCutPage() {
  const productLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Moringa Tea Cut",
    image: "https://www.virajagronaturals.com/images/Moringa%20Tea%20Cut.jpg",
    description:
      "Premium moringa tea-cut leaves for bulk export. Ideal for herbal teas, infusions and aromatic blends. Lab tested, export-grade, with custom packaging support.",
    category: "Moringa Products",
    brand: { "@type": "Brand", name: "Viraj Agro Naturals" },
    manufacturer: { "@id": "https://www.virajagronaturals.com/#organization" },
    countryOfOrigin: "IN",
    url: "https://www.virajagronaturals.com/products/moringa-tea-cut",
  };
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.virajagronaturals.com/" },
      { "@type": "ListItem", position: 2, name: "Products", item: "https://www.virajagronaturals.com/products" },
      { "@type": "ListItem", position: 3, name: "Moringa Tea Cut", item: "https://www.virajagronaturals.com/products/moringa-tea-cut" },
    ],
  };
  return (
    <>
      <JsonLd data={productLd} />
      <JsonLd data={breadcrumbLd} />
      <PageHero
        eyebrow="Premium Export Product"
        title="Moringa Tea Cut"
        subtitle="Premium tea-cut Moringa Oleifera leaves — aromatic, infusion-ready, and packed to international standards for herbal tea producers worldwide."
        image="/images/moringa-tea-cut-hero.png"
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
              <img src="/images/Moringa%20Tea%20Cut.jpg" alt="Premium Moringa Tea Cut Leaves" className="w-full h-full object-cover" />
            </div>
            <div className="hidden md:block absolute -bottom-6 -right-5 bg-brand-deep text-white px-5 py-4 rounded-xl shadow-xl">
              <p className="text-sm font-medium">Infusion Ready</p>
              <p className="text-2xl font-extrabold">Export Grade</p>
            </div>
          </Reveal>

          <div>
            <Reveal><span className="inline-block px-4 py-1.5 rounded-full bg-brand-accent/10 text-brand-deep text-sm font-medium">Product Overview</span></Reveal>
            <Reveal delay={80}><h2 className="mt-4 text-4xl md:text-5xl font-bold text-brand-deep leading-tight">Premium Moringa Tea Cut Leaves</h2></Reveal>
            <Reveal delay={140}><p className="mt-5 text-gray-500 leading-relaxed">Our moringa tea cut is produced from shade-dried whole moringa leaves that are precisely cut to a uniform 2–4 mm size — ideal for tea bags, loose-leaf herbal teas, and herbal infusion blends.</p></Reveal>
            <Reveal delay={200}><p className="mt-4 text-gray-500 leading-relaxed">The tea-cut process preserves the leaves&apos; natural aroma, green color, and nutritional properties. It is widely used by herbal tea brands, wellness companies, and private label tea producers across Europe, the USA, and Asia.</p></Reveal>
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
            <Reveal delay={80}><h2 className="mt-4 text-4xl md:text-5xl font-bold text-brand-deep">Health &amp; Product Benefits</h2></Reveal>
            <Reveal delay={140}><p className="mt-3 text-gray-500 max-w-2xl mx-auto">Moringa tea cut is a versatile, high-demand ingredient for herbal tea, health drink and wellness product manufacturers worldwide.</p></Reveal>
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
            <Reveal delay={140}><p className="mt-5 text-white/85 text-lg leading-relaxed">Every batch of moringa tea cut is tested for moisture content, microbial load, and visual grade before packing — ensuring consistent quality in every shipment.</p></Reveal>
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
              <img src="/images/quality-lab.jpg" alt="Quality testing lab" className="w-full h-full object-cover" />
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
            <Reveal delay={140}><p className="mt-5 text-gray-500 text-lg leading-relaxed">We offer flexible, food-grade packaging options designed to maintain the aroma, moisture level, and quality of moringa tea cut throughout international transit.</p></Reveal>
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
                <h2 className="text-3xl md:text-4xl font-bold max-w-3xl mx-auto">Interested in Bulk Moringa Tea Cut?</h2>
                <p className="mt-4 text-white/85 max-w-2xl mx-auto">Contact our export team for pricing, samples, and shipping arrangements. We supply consistent, export-grade moringa tea cut to herbal tea brands worldwide.</p>
                <div className="mt-8 flex flex-wrap gap-4 justify-center">
                  <Link href="/contact" className="btn-white">Send Enquiry <ArrowRight size={18} /></Link>
                  <a href="tel:+918737958006" className="btn-ghost-light"><Phone size={18} /> Call Us Now</a>
                </div>
                <div className="mt-8 flex flex-wrap gap-6 justify-center text-white/80 text-sm">
                  <a href="tel:+918737958006" className="inline-flex items-center gap-2 hover:text-white"><Phone size={18} /> +91 8737958006</a>
                  <a href="https://wa.me/918737958006" className="inline-flex items-center gap-2 hover:text-white"><WhatsApp size={18} /> WhatsApp Us</a>
                  <a href="mailto:enquiry@virajagronaturals.in" className="inline-flex items-center gap-2 hover:text-white"><Mail size={18} /> enquiry@virajagronaturals.in</a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
