import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import { CheckCircle, Target, Eye, Heart, Mail, Phone, ArrowRight, Globe, type IconProps } from "@/components/Icons";

export const metadata: Metadata = {
  title: "About Us | Viraj Agro Naturals — Premium Indian Moringa Exporter",
  description:
    "Viraj Agro Naturals is an India-based exporter of premium moringa products, connecting verified farms with global buyers through quality, transparency and complete traceability.",
};

type Stat =
  | { end: number; suffix: string; label: string }
  | { Icon: (p: IconProps) => JSX.Element; label: string };

const stats: Stat[] = [
  { end: 100, suffix: "%", label: "Quality Assured" },
  { Icon: Globe, label: "Shipping Worldwide" },
  { end: 100, suffix: "%", label: "Batch Traceable" },
];

const certs: { alt: string; label: string; src?: string }[] = [
  { alt: "APEDA", label: "Registered Exporter", src: "/images/apeda.jpg" },
  { alt: "FSSAI", label: "Fully Compliant", src: "/images/fssai.jpg" },
  { alt: "IEC", label: "Import-Export Code", src: "/images/iec.png" },
  { alt: "USFDA", label: "If Required", src: "/images/usfda.jpg" },
  { alt: "Halal", label: "If Required", src: "/images/halal.webp" },
];

const mvv = [
  {
    Icon: Target,
    title: "Our Mission",
    desc: "To be the most trusted source of premium Indian agricultural products for global buyers, ensuring consistent quality, complete transparency, and reliable delivery that exceeds international standards.",
  },
  {
    Icon: Eye,
    title: "Our Vision",
    desc: "To establish India as the preferred origin for premium agricultural exports worldwide, building long-term partnerships with buyers who value quality, traceability, and ethical sourcing practices.",
  },
  {
    Icon: Heart,
    title: "Our Values",
    desc: "Quality without compromise, transparency in every transaction, respect for farming communities, commitment to sustainable practices, and dedication to exceeding customer expectations.",
  },
];

const qPoints = [
  { title: "Verified Farm Sourcing", desc: "We work exclusively with certified farms that follow sustainable and ethical farming practices." },
  { title: "Accredited Lab Testing", desc: "Every batch is tested at NABL accredited laboratories for purity, contamination, and nutritional content." },
  { title: "Complete Batch Traceability", desc: "Full documentation trail from farm to shipment, ensuring transparency at every step." },
];

const qExtra = [
  { title: "International Standards Compliance", desc: "All products meet FSSAI, APEDA, and destination country import regulations." },
  { title: "Quality-Controlled Packaging", desc: "Food-grade packaging that maintains product integrity during international transit." },
  { title: "Regular Quality Audits", desc: "Continuous monitoring and improvement of our sourcing and processing standards." },
];

const team = [
  { initial: "T", name: "Tarun", role: "Founder & CEO", desc: "Leading the vision of Viraj Agro Naturals with a passion for quality agriculture and global trade.", email: "tarun@virajagronaturals.com" },
  { initial: "R", name: "Raj Kumari", role: "Co-Founder & Director", desc: "Overseeing operations and ensuring excellence in every aspect of our export business.", email: "director@virajagronaturals.com" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Viraj Agro Naturals"
        title="Premium Moringa Export Solutions for"
        highlight="Global Markets"
        subtitle="We bridge the gap between India's finest farms and global markets, delivering premium moringa products with complete transparency and unwavering quality commitment."
      />

      {/* Stats band */}
      <section className="bg-brand-deep text-white">
        <div className="mx-auto max-w-[1200px] px-5 py-12 grid grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 90} className="text-center">
              <div className="text-4xl lg:text-5xl font-extrabold text-brand-cream flex items-center justify-center">
                {"Icon" in s ? <s.Icon size={52} /> : <CountUp end={s.end} suffix={s.suffix} />}
              </div>
              <div className="mt-2 text-sm text-white/75">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Company story */}
      <section className="bg-white py-[70px]">
        <div className="mx-auto max-w-[1200px] px-5 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal from="right" className="relative">
            <div className="rounded-2xl overflow-hidden shadow-[0_25px_50px_-12px_rgba(20,83,45,0.25)] aspect-[4/3]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/hero-farm.png" alt="Indian agricultural farms" className="w-full h-full object-cover object-top" />
            </div>
            <div className="hidden md:block absolute -bottom-7 -right-5 bg-brand-accent text-white px-6 py-5 rounded-2xl shadow-xl">
              <p className="text-sm text-white/85">Established</p>
              <p className="text-3xl font-extrabold">2025</p>
            </div>
          </Reveal>

          <div>
            <Reveal><span className="inline-block px-4 py-1.5 rounded-full bg-brand-accent/10 text-brand-deep text-sm font-medium">Our Story</span></Reveal>
            <Reveal delay={80}><h2 className="mt-4 text-4xl md:text-5xl font-bold text-brand-deep leading-tight">Building Trust Through Quality and Transparency</h2></Reveal>
            <Reveal delay={140}><p className="mt-5 text-gray-500 text-lg leading-relaxed">Viraj Agro Naturals Private Limited is an India-based export trading company specializing in premium moringa products for international markets. We are committed to delivering consistent quality through transparent sourcing, rigorous quality control, and reliable export practices.</p></Reveal>
            <Reveal delay={200}><p className="mt-4 text-gray-500 text-lg leading-relaxed">Headquartered in Kanpur, Uttar Pradesh, we work with carefully verified farms and processing partners to source high-quality moringa products that meet international buyer requirements. Our focus is on building long-term partnerships through consistency, reliability, and professional service.</p></Reveal>
            <Reveal delay={260}><p className="mt-4 text-gray-500 text-lg leading-relaxed">Every shipment is supported by complete export documentation, accredited laboratory testing, and full batch traceability from farm to destination, ensuring confidence, compliance, and transparency at every stage of the supply chain.</p></Reveal>
            <Reveal delay={320}>
              <div className="mt-7 flex flex-wrap justify-center gap-4">
                {certs.map((c) => (
                  <div
                    key={c.alt}
                    className="w-[calc(50%-8px)] sm:w-[calc(33.333%-11px)] p-5 rounded-2xl bg-white border border-brand-deep/10 shadow-[0_2px_10px_-4px_rgba(20,83,45,0.15)] flex flex-col items-center text-center gap-3 transition hover:shadow-md"
                  >
                    <div className="h-14 flex items-center justify-center">
                      {c.src ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={c.src} alt={c.alt} className="max-h-14 max-w-full w-auto object-contain" />
                      ) : (
                        <span className="text-xl font-extrabold text-brand-deep tracking-wide">{c.alt.toUpperCase()}</span>
                      )}
                    </div>
                    <p className="text-sm font-medium text-gray-500 leading-tight">{c.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="bg-brand-cream py-[70px]">
        <div className="mx-auto max-w-[1200px] px-5">
          <div className="text-center mb-12">
            <Reveal><span className="inline-block px-4 py-1.5 rounded-full bg-brand-accent/10 text-brand-deep text-sm font-medium">What Drives Us</span></Reveal>
            <Reveal delay={80}><h2 className="mt-4 text-4xl md:text-5xl font-bold text-brand-deep">Mission, Vision &amp; Values</h2></Reveal>
            <Reveal delay={140}><p className="mt-3 text-gray-500 max-w-2xl mx-auto">Our commitment to excellence guides every decision we make and every product we export.</p></Reveal>
          </div>
          <div className="grid md:grid-cols-3 gap-7">
            {mvv.map(({ Icon, title, desc }, i) => (
              <Reveal key={title} delay={i * 110}>
                <div className="h-full bg-white rounded-2xl p-8 transition hover:-translate-y-1.5 hover:shadow-xl">
                  <div className="w-16 h-16 rounded-2xl bg-brand-deep text-white flex items-center justify-center mb-6">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-deep mb-3">{title}</h3>
                  <p className="text-gray-500 text-lg leading-relaxed">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quality commitment */}
      <section className="bg-white py-[70px]">
        <div className="mx-auto max-w-[1200px] px-5 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Reveal><span className="inline-block px-4 py-1.5 rounded-full bg-brand-accent/10 text-brand-deep text-sm font-medium">Quality Assurance</span></Reveal>
            <Reveal delay={80}><h2 className="mt-4 text-4xl md:text-5xl font-bold text-brand-deep leading-tight">Uncompromising Commitment to Quality</h2></Reveal>
            <Reveal delay={140}><p className="mt-5 text-gray-500 text-lg leading-relaxed">Quality is not just a promise at Viraj Agro Naturals—it&apos;s embedded in every aspect of our operations. From farm selection to final shipment, we maintain rigorous standards that global buyers can rely on.</p></Reveal>
            <div className="mt-7 space-y-4">
              {qPoints.map((q, i) => (
                <Reveal key={q.title} delay={i * 100} from="left">
                  <div className="flex gap-4">
                    <CheckCircle size={24} className="text-brand-accent shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-brand-deep">{q.title}</h4>
                      <p className="text-base text-gray-500 mt-0.5">{q.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal from="left">
            <div className="rounded-2xl overflow-hidden shadow-[0_25px_50px_-12px_rgba(20,83,45,0.25)] aspect-[4/3]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/quality-lab.jpg" alt="Quality testing laboratory" className="w-full h-full object-cover" />
            </div>
          </Reveal>
        </div>

        <div className="mx-auto max-w-[1200px] px-5 mt-12 grid md:grid-cols-3 gap-7">
          {qExtra.map((q, i) => (
            <Reveal key={q.title} delay={i * 110}>
              <div className="h-full bg-brand-cream rounded-xl p-6">
                <CheckCircle size={32} className="text-brand-accent mb-4" />
                <h4 className="font-semibold text-brand-deep mb-2">{q.title}</h4>
                <p className="text-base text-gray-500">{q.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="bg-gradient-to-br from-brand-band to-[#0f3d20] text-white py-[70px]">
        <div className="mx-auto max-w-[1200px] px-5">
          <div className="text-center mb-12">
            <Reveal><span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white text-sm font-medium">Leadership</span></Reveal>
            <Reveal delay={80}><h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">Meet Our Team</h2></Reveal>
            <Reveal delay={140}><p className="mt-3 text-white/80 max-w-2xl mx-auto">Dedicated professionals committed to delivering excellence in agricultural exports.</p></Reveal>
          </div>
          <div className="grid md:grid-cols-2 gap-7 max-w-4xl mx-auto">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 120}>
                <div className="h-full bg-white/10 backdrop-blur rounded-2xl p-8 transition hover:bg-white/[0.16]">
                  <div className="w-16 h-16 rounded-full bg-brand-accent flex items-center justify-center text-2xl font-extrabold mb-6">{m.initial}</div>
                  <h3 className="text-xl font-bold">{m.name}</h3>
                  <p className="text-brand-cream font-medium">{m.role}</p>
                  <p className="mt-4 text-sm text-white/75 leading-relaxed">{m.desc}</p>
                  <a href={`mailto:${m.email}`} className="mt-4 inline-flex items-center gap-2 text-sm text-white/85 hover:text-white">
                    <Mail size={16} /> {m.email}
                  </a>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <div className="mt-12 text-center">
              <p className="text-white/80 text-lg mb-6">Interested in working with us? Get in touch today.</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/contact" className="btn-white">
                  Contact Us <ArrowRight size={18} />
                </Link>
                <a href="tel:+918737958006" className="btn-ghost-light">
                  <Phone size={18} /> +91 8737958006
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
