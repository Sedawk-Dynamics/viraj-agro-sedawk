import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import {
  Leaf,
  ArrowRight,
  FlaskConical,
  Package,
  FileText,
  Globe,
  Heart,
  Shield,
  Phone,
  WhatsApp,
} from "@/components/Icons";

export const metadata: Metadata = {
  title: "Our Products | Premium Moringa Range | Viraj Agro Naturals",
  description:
    "Explore our premium moringa product range — leaf powder, dried leaves, tea cut and custom bulk supply. Lab tested, export-grade, with private-label and custom packaging.",
};

const products = [
  {
    title: "Moringa Leaf Powder",
    desc: "Fine powder, rich green color, 100% pure — ideal for food, beverage, cosmetic and pharma use.",
    img: "/images/moringa-powder.jpg",
    tags: ["80-100 Mesh", "Dark Green", "24 Months"],
    href: "/products/moringa-powder",
    cta: "View Details",
  },
  {
    title: "Moringa Dried Leaves",
    desc: "Carefully shade-dried whole moringa leaves, retaining natural color and nutrition.",
    img: "/images/Moringa%20Dried%20Leaves.jpg",
    tags: ["Whole Leaf", "Shade Dried", "Export Grade"],
    href: "/contact",
    cta: "Request Quote",
  },
  {
    title: "Moringa Tea Cut",
    desc: "Premium tea-cut leaves for infusions, blends and aromatic herbal teas.",
    img: "/images/Moringa%20Tea%20Cut.jpg",
    tags: ["Tea Cut", "Infusion Ready", "Aromatic"],
    href: "/contact",
    cta: "Request Quote",
  },
  {
    title: "Custom Bulk Supply",
    desc: "Bulk orders with private label and custom packaging tailored to your brand.",
    img: "/images/packaging.jpg",
    tags: ["Private Label", "Custom Packaging", "Bulk MOQ"],
    href: "/contact",
    cta: "Request Quote",
  },
];

const stats = [
  { end: 4, suffix: "+", label: "Product Forms" },
  { end: 100, suffix: "%", label: "Pure & Natural" },
  { end: 6, suffix: "+", label: "Global Regions" },
  { end: 24, suffix: " mo", label: "Shelf Life" },
];

const applications = [
  { Icon: Leaf, title: "Food & Beverage", desc: "Smoothies, health drinks, energy bars, bakery and food supplements." },
  { Icon: FlaskConical, title: "Pharmaceutical", desc: "Nutraceutical formulations, capsules, tablets and herbal medicine." },
  { Icon: Heart, title: "Cosmetics", desc: "Skincare, hair care, anti-aging and natural beauty products." },
  { Icon: Shield, title: "Nutraceutical", desc: "Dietary and fiber supplements and prebiotic formulations." },
];

const features = [
  { Icon: FlaskConical, label: "Lab Tested at NABL Labs" },
  { Icon: Package, label: "Export-Grade Packaging" },
  { Icon: FileText, label: "Full Documentation" },
  { Icon: Globe, label: "Worldwide Shipping" },
];

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Products"
        title="Premium Moringa"
        highlight="Product Range"
        subtitle="Carefully sourced, processed and packed for global buyers — explore our full range of export-ready moringa products."
      >
        <Link href="/contact" className="btn-white">Request a Quote <ArrowRight size={18} /></Link>
        <a href="https://wa.me/918737958006" className="btn-ghost-light"><WhatsApp size={18} /> WhatsApp Us</a>
      </PageHero>

      {/* Stats band */}
      <section className="bg-brand-deep text-white">
        <div className="mx-auto max-w-[1200px] px-5 py-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 90} className="text-center">
              <div className="text-3xl lg:text-4xl font-extrabold text-brand-cream">
                <CountUp end={s.end} suffix={s.suffix} />
              </div>
              <div className="mt-1.5 text-sm text-white/75">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Product grid */}
      <section className="bg-white py-[70px]">
        <div className="mx-auto max-w-[1200px] px-5">
          <div className="text-center mb-12">
            <Reveal><span className="inline-block px-4 py-1.5 rounded-full bg-brand-accent/10 text-brand-deep text-sm font-medium">What We Export</span></Reveal>
            <Reveal delay={80}><h2 className="mt-4 text-3xl md:text-4xl font-bold text-brand-deep">Our Moringa Products</h2></Reveal>
            <Reveal delay={140}><p className="mt-3 text-gray-500 max-w-2xl mx-auto">Every product is sourced from verified farms, lab tested and packed to meet international standards.</p></Reveal>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {products.map((p, i) => (
              <Reveal key={p.title} delay={(i % 4) * 90}>
                <div className="group h-full flex flex-col bg-white rounded-2xl overflow-hidden border border-[#E6E8E0] shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-2xl">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                      {p.tags.map((t) => (
                        <span key={t} className="bg-white/90 text-brand-deep text-[0.65rem] font-semibold px-2.5 py-1 rounded-full">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-lg font-bold text-brand-deep">{p.title}</h3>
                    <p className="mt-2 text-sm text-gray-500 leading-relaxed flex-1">{p.desc}</p>
                    <Link href={p.href} className="mt-5 inline-flex items-center gap-2 font-semibold text-brand-accent group-hover:text-brand-deep transition-colors">
                      {p.cta}
                      <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industry applications */}
      <section className="bg-brand-cream py-[70px]">
        <div className="mx-auto max-w-[1200px] px-5">
          <div className="text-center mb-12">
            <Reveal><span className="inline-block px-4 py-1.5 rounded-full bg-brand-accent/10 text-brand-deep text-sm font-medium">Applications</span></Reveal>
            <Reveal delay={80}><h2 className="mt-4 text-3xl md:text-4xl font-bold text-brand-deep">Industry Applications</h2></Reveal>
            <Reveal delay={140}><p className="mt-3 text-gray-500 max-w-2xl mx-auto">Our moringa products serve diverse industries with consistent, export-grade quality.</p></Reveal>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {applications.map(({ Icon, title, desc }, i) => (
              <Reveal key={title} delay={(i % 4) * 90}>
                <div className="h-full bg-white rounded-2xl p-7 text-center transition hover:-translate-y-1.5 hover:shadow-xl">
                  <div className="w-14 h-14 rounded-2xl bg-brand-deep text-white flex items-center justify-center mx-auto mb-5">
                    <Icon size={28} />
                  </div>
                  <h3 className="font-bold text-brand-deep">{title}</h3>
                  <p className="mt-2 text-sm text-gray-500 leading-relaxed">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Export-ready feature band */}
      <section className="bg-gradient-to-br from-brand-band to-[#0f3d20] text-white py-14">
        <div className="mx-auto max-w-[1200px] px-5 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map(({ Icon, label }, i) => (
            <Reveal key={label} delay={i * 90} className="text-center">
              <div className="w-16 h-16 rounded-full border-[1.5px] border-white/35 flex items-center justify-center mx-auto mb-3">
                <Icon size={28} />
              </div>
              <span className="text-sm font-medium block">{label}</span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-[70px]">
        <div className="mx-auto max-w-[1200px] px-5">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-accent to-brand-deep text-white text-center px-6 py-14 md:py-16">
              <div className="pointer-events-none absolute -top-16 -right-10 w-72 h-72 rounded-full bg-white/10 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-16 -left-10 w-72 h-72 rounded-full bg-white/10 blur-3xl" />
              <div className="relative">
                <h2 className="text-3xl md:text-4xl font-bold max-w-3xl mx-auto">Need a Custom Moringa Solution?</h2>
                <p className="mt-4 text-white/85 max-w-2xl mx-auto">Tell us your specifications, quantity and packaging needs — our export team will get back to you with pricing and samples.</p>
                <div className="mt-8 flex flex-wrap gap-4 justify-center">
                  <Link href="/contact" className="btn-white">Request Product Catalog <ArrowRight size={18} /></Link>
                  <a href="tel:+918737958006" className="btn-ghost-light"><Phone size={18} /> Call Us Now</a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
