import Link from "next/link";
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

type Product = { title: string; desc: string; img: string; href: string };

const products: Product[] = [
  { title: "Moringa Leaf Powder", desc: "Fine powder, rich green color, 100% pure.", img: "/images/moringa-powder.png", href: "/products/moringa-powder" },
  { title: "Moringa Dried Leaves", desc: "Carefully dried moringa leaves, high quality.", img: "/images/Moringa%20Dried%20Leaves.jpg", href: "/products/moringa-dried-leaves" },
  { title: "Moringa Tea Cut", desc: "Premium tea cut for infusions and blends.", img: "/images/Moringa%20Tea%20Cut.jpg", href: "/products/moringa-tea-cut" },
  { title: "Custom Packaging", desc: "Bulk orders with private label & custom packaging.", img: "/images/packaging.jpg", href: "/contact" },
];


const qaItems: Feature[] = [
  { Icon: FileCheck, label: "Hygienically Processed" },
  { Icon: FlaskConical, label: "Lab Testing Available" },
  { Icon: Droplet, label: "Moisture Controlled" },
  { Icon: Package, label: "Custom Packaging" },
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
      <h2 className={`text-[2.3rem] font-bold ${light ? "text-white" : "text-brand-deep"}`}>{title}</h2>
      <div className={`w-[60px] h-[3px] rounded-full mx-auto mt-3 ${light ? "bg-white" : "bg-brand-light"}`} />
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section id="top" className="bg-white pt-16 pb-14">
        <div className="mx-auto max-w-[1200px] px-5 grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-[2.5rem] sm:text-[3rem] lg:text-[3.8rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-brand-deep">
              Premium Indian<br />Moringa Exporter
            </h1>
            <p className="mt-[18px] text-gray-500 text-lg max-w-[30rem]">
              Sustainably sourced. Carefully processed. Export-ready moringa products for global markets.
            </p>
            <div className="w-[56px] h-[3px] bg-brand-light rounded-full my-[22px]" />

            <div className="flex flex-wrap gap-[26px] mb-8">
              {heroFeatures.map(({ Icon, label }) => (
                <div key={label} className="w-[110px] flex flex-col items-center text-center gap-[10px]">
                  <div className="w-16 h-16 rounded-full border-[1.5px] border-brand-deep/30 flex items-center justify-center text-brand-deep">
                    <Icon size={30} />
                  </div>
                  <span className="text-sm text-gray-500 leading-tight">{label}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-[14px]">
              <a href="https://wa.me/918737958006" target="_blank" rel="noopener noreferrer" className={btnOutline}>
                WhatsApp Us <WhatsApp size={18} />
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2 rounded-[18px] overflow-hidden aspect-[4/3] shadow-[0_10px_25px_-12px_rgba(20,83,45,0.25)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/moringa-powder.jpg"
              alt="Premium Moringa Leaf Powder — wooden bowl of green powder with fresh moringa leaves"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </section>

      {/* ============ CERTIFICATION STRIP ============ */}
      <div className="bg-brand-band text-white">
        <div className="mx-auto max-w-[1200px] px-5 py-5 flex flex-wrap justify-between gap-[18px]">
          {certItems.map(({ Icon, label }) => (
            <div key={label} className="flex items-center gap-3 text-[0.95rem] font-medium">
              <Icon size={26} /> {label}
            </div>
          ))}
        </div>
      </div>

      {/* ============ WHY MORINGA ============ */}
      <section className="bg-white py-[70px]">
        <div className="mx-auto max-w-[1200px] px-5">
          <SectionHeading title="Why Us?" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-[22px]">
            {whyCards.map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="bg-brand-cream border border-brand-deep/[0.06] rounded-[14px] p-[30px_20px] text-center transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="text-brand-deep flex justify-center mb-[18px]">
                  <Icon size={48} />
                </div>
                <h3 className="text-lg font-semibold text-brand-deep mb-[10px] leading-tight">{title}</h3>
                <p className="text-sm text-gray-500">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ OUR MORINGA PRODUCTS ============ */}
      <section id="products" className="bg-white pt-10 pb-[70px]">
        <div className="mx-auto max-w-[1200px] px-5">
          <div className="text-center mb-10">
            <h2 className="text-[2.3rem] font-bold text-brand-deep">Our Moringa Products</h2>
            <div className="w-[60px] h-[3px] rounded-full mx-auto mt-3 bg-brand-light" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[28px]">
            {products.map((p) => (
              <Link
                key={p.title}
                href={p.href}
                className="group block bg-white border border-[#E6E8E0] rounded-[18px] overflow-hidden shadow-sm transition hover:-translate-y-[6px] hover:shadow-2xl"
              >
                <div className="aspect-square overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-brand-deep mb-2">{p.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

{/* ============ QUALITY ASSURANCE ============ */}
      <section id="quality" className="py-16 text-white bg-gradient-to-br from-brand-band to-[#0f3d20]">
        <div className="mx-auto max-w-[1200px] px-5 grid grid-cols-1 lg:grid-cols-[0.9fr_1.4fr] gap-12 items-center">
          <div>
            <h2 className="text-white text-[2.1rem] font-bold inline-block">Quality Assurance</h2>
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
                <span className="block text-sm font-medium text-white leading-snug">{label}</span>
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
            <h2 className="text-[1.8rem] font-bold text-brand-deep mb-[18px]">About Viraj Agro Naturals</h2>
            <p className="text-gray-500 text-base mb-[14px]">
              Viraj Agro Naturals is a specialized exporter of premium moringa products from India. We are committed
              to quality, transparency and long-term relationships with our global buyers.
            </p>
            <p className="text-gray-500 text-base mb-[14px]">
              With strong sourcing networks, modern processing and export expertise, we ensure consistent quality,
              timely shipments and complete documentation support.
            </p>
            <div className="bg-brand-cream border border-brand-deep/[0.08] rounded-xl p-[18px] mt-1.5 flex gap-[14px]">
              <div className="w-[38px] h-[38px] rounded-full bg-brand-light text-white flex items-center justify-center shrink-0">
                <User size={20} />
              </div>
              <div>
                <h4 className="text-base font-bold text-brand-deep mb-1.5">
                  Founded by Professionals with Global Industry Experience
                </h4>
                <p className="text-sm text-gray-500 mb-2">
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
          <div className="relative rounded-[14px] overflow-hidden shadow-[0_10px_25px_-12px_rgba(20,83,45,0.25)] lg:h-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/viraj-truck.png"
              alt="Viraj Agro Naturals branded truck"
              className="w-full aspect-[4/3] object-cover object-top lg:aspect-auto lg:h-full"
            />
            <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-white to-transparent pointer-events-none" />
          </div>

          {/* For Bulk Buyers */}
          <div id="bulk" className="lg:flex lg:flex-col lg:justify-center">
            <h2 className="text-[1.8rem] font-bold text-brand-deep mb-5">For Bulk Buyers</h2>
            <ul className="flex flex-col gap-[14px] mb-[26px]">
              {bulkPoints.map((t) => (
                <li key={t} className="flex items-center gap-3 text-base text-[#27313B]">
                  <CheckCircle size={20} className="text-brand-accent shrink-0" /> {t}
                </li>
              ))}
            </ul>
            <p className="text-sm text-gray-500 mt-[14px]">Serious bulk inquiries only.</p>
          </div>
        </div>
      </section>

    </>
  );
}
