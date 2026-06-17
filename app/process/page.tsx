import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { ArrowRight, WhatsApp } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Our Process | Farm to Export | Viraj Agro Naturals",
  description:
    "From careful farm sourcing to export-ready packaging — discover the step-by-step process behind every Viraj Agro Naturals moringa product.",
};

const steps = [
  {
    n: 1,
    title: "Sourcing",
    desc: "We source moringa leaves from trusted, verified farms across India that follow responsible and sustainable cultivation practices. Every farm is evaluated for soil quality, farming methods, and consistency of supply before partnering.",
    img: "/images/hero-farm.png",
  },
  {
    n: 2,
    title: "Cleaning & Drying",
    desc: "Freshly harvested leaves are thoroughly cleaned to remove dust and impurities, then shade-dried at controlled temperatures. This gentle process preserves the natural green color, aroma, and heat-sensitive nutrients that high-temperature drying would destroy.",
    img: "/images/Cleaning%20%26%20Drying.webp",
  },
  {
    n: 3,
    title: "Grinding",
    desc: "Dried leaves are finely ground using precision milling equipment to produce a consistent 80–100 mesh powder. The grinding process is designed to retain maximum nutritional value while achieving the fine texture required for food, beverage and pharma applications.",
    img: "/images/moringa-powder.png",
  },
  {
    n: 4,
    title: "Quality Check",
    desc: "Every batch undergoes rigorous quality testing at NABL accredited laboratories — covering moisture content, microbial count, color, mesh size and nutritional profile. Only batches that meet our strict export standards are cleared for packaging.",
    img: "/images/quality-lab.jpg",
  },
  {
    n: 5,
    title: "Packaging & Export",
    desc: "Cleared products are packed in food-grade export packaging — including HDPE bags, multi-layer kraft bags, and custom private-label options. Complete documentation including COA, phytosanitary certificates, and shipping papers are prepared for smooth international delivery.",
    img: "/images/global-shipping.jpg",
  },
];

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Process"
        title="Farm to"
        highlight="Export"
        subtitle="Every Viraj Agro Naturals product follows a rigorous five-step process — from farm sourcing to your doorstep — ensuring consistent quality in every shipment."
      >
        <Link href="/contact" className="btn-white">Request a Quote <ArrowRight size={18} /></Link>
        <a href="https://wa.me/918737958006" className="btn-ghost-light"><WhatsApp size={18} /> WhatsApp Us</a>
      </PageHero>

      {/* Steps — alternating left/right */}
      <section className="bg-white py-[80px]">
        <div className="mx-auto max-w-[1100px] px-5 flex flex-col gap-[80px]">
          {steps.map((step, i) => {
            const isEven = i % 2 === 1;
            return (
              <Reveal key={step.n} delay={60}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${isEven ? "lg:[direction:rtl]" : ""}`}>
                  {/* Image */}
                  <div className={isEven ? "[direction:ltr]" : ""}>
                    <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_50px_-12px_rgba(20,83,45,0.2)] aspect-[4/3]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={step.img} alt={step.title} className="w-full h-full object-cover" />
                      <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-brand-deep text-white flex items-center justify-center text-xl font-extrabold shadow-lg">
                        {step.n}
                      </div>
                    </div>
                  </div>

                  {/* Text */}
                  <div className={isEven ? "[direction:ltr]" : ""}>
                    <span className="inline-block px-3 py-1 rounded-full bg-brand-accent/10 text-brand-deep text-xs font-semibold mb-4">
                      Step {step.n} of {steps.length}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-deep mb-5">{step.title}</h2>
                    <p className="text-gray-500 leading-relaxed text-[1.05rem]">{step.desc}</p>

                    {/* Connector line (not on last step) */}
                    {i < steps.length - 1 && (
                      <div className="hidden lg:flex items-center gap-3 mt-8 text-brand-accent">
                        <div className="h-[2px] w-10 bg-brand-accent/40 rounded-full" />
                        <span className="text-sm font-medium text-gray-400">Next: {steps[i + 1].title}</span>
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-cream py-[70px]">
        <div className="mx-auto max-w-[1100px] px-5">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-accent to-brand-deep text-white text-center px-6 py-14 md:py-16">
              <div className="pointer-events-none absolute -top-16 -right-10 w-72 h-72 rounded-full bg-white/10 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-16 -left-10 w-72 h-72 rounded-full bg-white/10 blur-3xl" />
              <div className="relative">
                <h2 className="text-3xl md:text-4xl font-bold max-w-3xl mx-auto">Ready to Source Premium Moringa?</h2>
                <p className="mt-4 text-white/85 max-w-2xl mx-auto">Our export team is ready to discuss your requirements, share samples, and provide competitive pricing for bulk orders.</p>
                <div className="mt-8 flex flex-wrap gap-4 justify-center">
                  <Link href="/contact" className="btn-white">Get in Touch <ArrowRight size={18} /></Link>
                  <Link href="/products" className="btn-ghost-light">View Products <ArrowRight size={18} /></Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
