import { Fragment } from "react";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import {
  Leaf,
  Shield,
  FileText,
  FileCheck,
  Globe,
  ArrowRight,
  WhatsApp,
  ShieldCheck,
  CheckCircle,
  Truck,
  TrendingUp,
  Package,
  FlaskConical,
  Droplet,
  User,
  ChevronRight,
  type IconProps,
} from "@/components/Icons";

const btnGreen =
  "inline-flex items-center gap-2 bg-brand-accent text-white px-6 py-[0.8rem] rounded-[10px] font-semibold text-[0.95rem] hover:bg-brand-light transition-colors";
const btnOutline =
  "inline-flex items-center gap-2 bg-white text-brand-deep border-[1.5px] border-[#E6E8E0] px-6 py-[0.8rem] rounded-[10px] font-semibold text-[0.95rem] hover:bg-brand-cream transition-colors";

type Feature = { Icon: (p: IconProps) => JSX.Element; label: string };

const heroFeatures: Feature[] = [
  { Icon: Leaf, label: "100% Pure and Natural" },
  { Icon: Shield, label: "Export Quality Products" },
  { Icon: FileText, label: "International Standards" },
  { Icon: Globe, label: "Global Shipping Worldwide" },
];

const certItems: Feature[] = [
  { Icon: ShieldCheck, label: "APEDA Certified" },
  { Icon: CheckCircle, label: "FSSAI Registered" },
  { Icon: Globe, label: "IEC Certified" },
  { Icon: FileText, label: "Export Documentation Support" },
  { Icon: Truck, label: "Global Shipping Worldwide" },
];

const whyCards: { Icon: (p: IconProps) => JSX.Element; title: string; desc: string }[] = [
  { Icon: Leaf, title: "Naturally Nutrient-Dense", desc: "Rich in vitamins, minerals, amino acids and antioxidants." },
  { Icon: TrendingUp, title: "Growing Global Demand", desc: "Moringa is trusted worldwide in wellness, nutrition and food industries." },
  { Icon: ShieldCheck, title: "Sustainably Sourced", desc: "Carefully sourced from the best moringa farms in India." },
  { Icon: CheckCircle, title: "Export Quality", desc: "Hygienically processed and packed to meet international standards." },
  { Icon: Package, title: "Bulk Supply Available", desc: "Consistent quality with custom packaging for bulk orders." },
];

type Product = {
  title: string;
  desc: string;
  img?: string;
  ph?: string;
  grad?: string;
  ondemand?: string;
};

const products: Product[] = [
  { title: "Moringa Leaf Powder", desc: "Fine powder, rich green color, 100% pure.", img: "/images/moringa-powder.jpg" },
  { title: "Moringa Dried Leaves", desc: "Carefully dried moringa leaves, high quality.", img: "/images/Moringa%20Dried%20Leaves.jpg" },
  { title: "Moringa Tea Cut", desc: "Premium tea cut for infusions and blends.", img: "/images/Moringa%20Tea%20Cut.jpg" },
  { title: "Custom Bulk Supply", desc: "Bulk orders with private label & custom packaging.", img: "/images/packaging.jpg" },
];

type Step = { n: number; title: string; desc: string; img?: string; ph?: string; grad?: string };

const steps: Step[] = [
  { n: 1, title: "Sourcing", desc: "Carefully sourced from trusted moringa farms.", img: "/images/hero-farm.jpg" },
  { n: 2, title: "Cleaning & Drying", desc: "Hygienic cleaning & low temperature drying.", ph: "Drying Trays", grad: "from-[#79b97f] to-[#256b31]" },
  { n: 3, title: "Grinding", desc: "Fine grinding to retain maximum nutrition.", img: "/images/moringa-powder.jpg" },
  { n: 4, title: "Quality Check", desc: "Lab tested for purity, moisture & nutrients.", img: "/images/quality-lab.jpg" },
  { n: 5, title: "Packaging & Export", desc: "Export-grade packaging & global shipping.", img: "/images/global-shipping.jpg" },
];

const qaItems: Feature[] = [
  { Icon: FileCheck, label: "Hygienically Processed" },
  { Icon: FlaskConical, label: "Lab Testing Available" },
  { Icon: Droplet, label: "Moisture Controlled" },
  { Icon: Package, label: "Export-Grade Packaging" },
  { Icon: Globe, label: "International Compliance" },
];

const bulkPoints = [
  "Bulk Export Orders",
  "Private Label & Custom Packaging",
  "Competitive MOQ",
  "International Shipping Support",
  "Complete Documentation Support",
];

function SectionHeading({ title, light = false }: { title: string; light?: boolean }) {
  return (
    <div className="text-center mb-12">
      <h2 className={`text-[1.9rem] font-bold ${light ? "text-white" : "text-brand-deep"}`}>{title}</h2>
      <div className={`w-[60px] h-[3px] rounded-full mx-auto mt-3 ${light ? "bg-white" : "bg-brand-light"}`} />
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="bg-white text-[#27313B]">
      <Navbar />

      {/* ============ HERO ============ */}
      <section id="top" className="bg-white pt-16 pb-14">
        <div className="mx-auto max-w-[1200px] px-5 grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-[2.1rem] sm:text-[2.5rem] lg:text-[3.1rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-brand-deep">
              Premium Indian<br />Moringa Exporter
            </h1>
            <p className="mt-[18px] text-gray-500 text-[1.05rem] max-w-[30rem]">
              Sustainably sourced. Carefully processed. Export-ready moringa products for global markets.
            </p>
            <div className="w-[56px] h-[3px] bg-brand-light rounded-full my-[22px]" />

            <div className="flex flex-wrap gap-[26px] mb-8">
              {heroFeatures.map(({ Icon, label }) => (
                <div key={label} className="w-[92px] flex flex-col items-center text-center gap-[9px]">
                  <div className="w-12 h-12 rounded-full border-[1.5px] border-brand-deep/30 flex items-center justify-center text-brand-deep">
                    <Icon size={22} />
                  </div>
                  <span className="text-[0.72rem] text-gray-500 leading-tight">{label}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-[14px]">
              <a href="#footer" className={btnGreen}>
                Request Product Catalog <ArrowRight size={18} />
              </a>
              <a href="https://wa.me/918737958006" target="_blank" rel="noopener noreferrer" className={btnOutline}>
                WhatsApp Us <WhatsApp size={18} />
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2 rounded-[18px] overflow-hidden aspect-[5/4] shadow-[0_10px_25px_-12px_rgba(20,83,45,0.25)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/moringa-powder.jpg"
              alt="Premium Moringa Leaf Powder — wooden bowl of green powder with fresh moringa leaves"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ============ CERTIFICATION STRIP ============ */}
      <div className="bg-brand-band text-white">
        <div className="mx-auto max-w-[1200px] px-5 py-5 flex flex-wrap justify-between gap-[18px]">
          {certItems.map(({ Icon, label }) => (
            <div key={label} className="flex items-center gap-3 text-[0.9rem] font-medium">
              <Icon size={20} /> {label}
            </div>
          ))}
        </div>
      </div>

      {/* ============ WHY MORINGA ============ */}
      <section className="bg-white py-[70px]">
        <div className="mx-auto max-w-[1200px] px-5">
          <SectionHeading title="Why Moringa?" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-[22px]">
            {whyCards.map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="bg-brand-cream border border-brand-deep/[0.06] rounded-[14px] p-[30px_20px] text-center transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="text-brand-deep flex justify-center mb-[18px]">
                  <Icon size={34} />
                </div>
                <h3 className="text-base font-semibold text-brand-deep mb-[10px] leading-tight">{title}</h3>
                <p className="text-[0.82rem] text-gray-500">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ OUR MORINGA PRODUCTS ============ */}
      <section id="products" className="bg-white py-[70px]">
        <div className="mx-auto max-w-[1200px] px-5">
          <SectionHeading title="Our Moringa Products" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[22px]">
            {products.map((p) => (
              <div
                key={p.title}
                className="bg-white border border-[#E6E8E0] rounded-[14px] overflow-hidden shadow-sm transition hover:-translate-y-[5px] hover:shadow-xl"
              >
                {p.img ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={p.img} alt={p.title} className="w-full aspect-[4/3] object-cover" />
                ) : (
                  <div className={`aspect-[4/3] flex items-center justify-center text-white font-semibold text-sm bg-gradient-to-br ${p.grad}`}>
                    {p.ph}
                  </div>
                )}
                <div className="p-[18px_16px_22px] text-center">
                  <h3 className="text-[1.02rem] font-semibold text-brand-deep mb-2">{p.title}</h3>
                  {p.ondemand && (
                    <span className="block text-[0.7rem] font-medium text-brand-light -mt-1 mb-1.5">{p.ondemand}</span>
                  )}
                  <p className="text-[0.8rem] text-gray-500">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ OUR PROCESS ============ */}
      <section id="process" className="bg-brand-cream py-[70px]">
        <div className="mx-auto max-w-[1200px] px-5">
          <SectionHeading title="Our Process" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:flex lg:items-center lg:gap-2">
            {steps.map((s, i) => (
              <Fragment key={s.title}>
                <div className="text-center lg:flex-1">
                  {s.img ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={s.img} alt={`${s.title} step`} className="w-full aspect-square object-cover rounded-xl mb-4 shadow-sm" />
                  ) : (
                    <div className={`aspect-square rounded-xl mb-4 shadow-sm flex items-center justify-center text-white font-semibold text-sm bg-gradient-to-br ${s.grad}`}>
                      {s.ph}
                    </div>
                  )}
                  <h3 className="text-base font-semibold text-brand-deep mb-[7px]">
                    {s.n}. {s.title}
                  </h3>
                  <p className="text-[0.8rem] text-gray-500">{s.desc}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden lg:flex items-center text-brand-light shrink-0" aria-hidden="true">
                    <ChevronRight size={26} />
                  </div>
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ============ QUALITY ASSURANCE ============ */}
      <section id="quality" className="py-16 text-white bg-gradient-to-br from-brand-band to-[#0f3d20]">
        <div className="mx-auto max-w-[1200px] px-5 grid grid-cols-1 lg:grid-cols-[0.9fr_1.4fr] gap-12 items-center">
          <div>
            <h2 className="text-white text-[1.8rem] font-bold inline-block">Quality Assurance</h2>
            <div className="w-[60px] h-[3px] bg-white rounded-full mt-3 mb-5" />
            <p className="text-white/85 max-w-[24rem]">
              We follow strict quality control at every stage to deliver safe, pure and export-quality moringa
              products to our global clients.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-[18px]">
            {qaItems.map(({ Icon, label }) => (
              <div key={label} className="text-center">
                <div className="w-16 h-16 rounded-full border-[1.5px] border-white/35 flex items-center justify-center mx-auto mb-3 text-white">
                  <Icon size={30} />
                </div>
                <span className="block text-[0.78rem] font-medium text-white leading-snug">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ ABOUT + FOR BULK BUYERS ============ */}
      <section id="about" className="bg-white py-[70px]">
        <div className="mx-auto max-w-[1200px] px-5 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr_1fr] gap-10 items-stretch">
          {/* About */}
          <div>
            <h2 className="text-[1.55rem] font-bold text-brand-deep mb-[18px]">About Viraj Agro Naturals</h2>
            <p className="text-gray-500 text-[0.92rem] mb-[14px]">
              Viraj Agro Naturals is a specialized exporter of premium moringa products from India. We are committed
              to quality, transparency and long-term relationships with our global buyers.
            </p>
            <p className="text-gray-500 text-[0.92rem] mb-[14px]">
              With strong sourcing networks, modern processing and export expertise, we ensure consistent quality,
              timely shipments and complete documentation support.
            </p>
            <div className="bg-brand-cream border border-brand-deep/[0.08] rounded-xl p-[18px] mt-1.5 flex gap-[14px]">
              <div className="w-[38px] h-[38px] rounded-full bg-brand-light text-white flex items-center justify-center shrink-0">
                <User size={20} />
              </div>
              <div>
                <h4 className="text-[0.92rem] font-bold text-brand-deep mb-1.5">
                  Founded by Professionals with Global Industry Experience
                </h4>
                <p className="text-[0.76rem] text-gray-500 mb-2">
                  Our founder brings years of international operational experience from the Merchant Navy, ensuring
                  discipline, reliability and a global approach to business.
                </p>
                <svg className="h-[30px] text-brand-deep" viewBox="0 0 160 40" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden="true">
                  <path d="M5 28c8-10 14 6 20-2s8-16 12-10-2 22 6 18 10-20 16-14-2 18 6 16 12-14 18-10 10 10 18 4 20-14 26-10" />
                </svg>
              </div>
            </div>
          </div>

          {/* Truck image */}
          <div className="rounded-[14px] overflow-hidden shadow-[0_10px_25px_-12px_rgba(20,83,45,0.25)] lg:h-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/global-shipping.jpg"
              alt="Viraj Agro Naturals export — shipping containers and truck"
              className="w-full aspect-[4/3] object-cover lg:aspect-auto lg:h-full"
            />
          </div>

          {/* For Bulk Buyers */}
          <div id="bulk" className="lg:flex lg:flex-col lg:justify-center">
            <h2 className="text-[1.55rem] font-bold text-brand-deep mb-5">For Bulk Buyers</h2>
            <ul className="flex flex-col gap-[14px] mb-[26px]">
              {bulkPoints.map((t) => (
                <li key={t} className="flex items-center gap-3 text-[0.92rem] text-[#27313B]">
                  <CheckCircle size={20} className="text-brand-accent shrink-0" /> {t}
                </li>
              ))}
            </ul>
            <a href="#footer" className={btnGreen}>
              Request Product Catalog <ArrowRight size={18} />
            </a>
            <p className="text-[0.8rem] text-gray-500 mt-[14px]">Serious bulk inquiries only.</p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
