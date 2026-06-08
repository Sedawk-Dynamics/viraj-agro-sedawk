import Link from "next/link";
import {
  Leaf,
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
} from "./Icons";

export type ProductSpec = { label: string; value: string };
export type PackOption = { size: string; desc: string };

export type ProductData = {
  name: string;
  heroImage: string;
  heroTagline: string;
  overviewImage: string;
  overviewImageAlt: string;
  overviewTitle: string;
  overviewParagraphs: string[];
  specs: ProductSpec[];
  benefits: string[];
  packOptions: PackOption[];
  ctaTitle: string;
};

export default function ProductPageContent({ product }: { product: ProductData }) {
  return (
    <>
      {/* PRODUCT HERO */}
      <section className="product-hero">
        <div className="product-hero-bg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={product.heroImage} alt={product.name} />
        </div>
        <div className="container-86 product-hero-content">
          <div className="max-w">
            <div className="hero-pill-anim">
              <span className="hero-pill">
                <Leaf size={16} />
                Premium Export Product
              </span>
            </div>
            <h1 className="product-hero-title hero-title-anim">{product.name}</h1>
            <p className="product-hero-tagline hero-text-anim">{product.heroTagline}</p>
            <div className="hero-buttons hero-buttons-anim">
              <Link href="/contact" className="btn btn-primary">
                Send Enquiry
                <ArrowRight size={20} className="arrow" />
              </Link>
              <a href="#overview" className="btn btn-ghost">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT OVERVIEW */}
      <section id="overview" className="bg-white-sec">
        <div className="container-86">
          <div className="grid-2">
            <div className="reveal reveal-left">
              <div className="po-image-wrap">
                <div className="po-image">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={product.overviewImage} alt={product.overviewImageAlt} />
                </div>
                <div className="po-badge">
                  <p>Export Quality</p>
                  <p>Premium Grade</p>
                </div>
              </div>
            </div>

            <div className="po-content">
              <div className="reveal"><span className="story-pill">Product Overview</span></div>
              <div className="reveal" data-delay="0.1">
                <h2 className="story-title">{product.overviewTitle}</h2>
              </div>
              {product.overviewParagraphs.map((para, i) => (
                <div className="reveal" data-delay={`0.${i + 2}`} key={i}>
                  <p>{para}</p>
                </div>
              ))}
              <div className="reveal" data-delay="0.4">
                <div className="specs-grid">
                  {product.specs.map((spec) => (
                    <div className="spec-card" key={spec.label}>
                      <p>{spec.label}</p>
                      <p>{spec.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT BENEFITS */}
      <section className="bg-beige-sec">
        <div className="container-86">
          <div className="section-heading-wrap centered">
            <div className="reveal"><span className="section-label">Benefits</span></div>
            <div className="reveal" data-delay="0.1">
              <h2 className="section-title">Health &amp; Nutritional Benefits</h2>
            </div>
            <div className="reveal" data-delay="0.2">
              <p className="section-description">
                Discover the exceptional properties that make this product a premium choice for
                health-conscious consumers and businesses worldwide.
              </p>
            </div>
          </div>

          <div className="benefits-grid">
            {product.benefits.map((benefit, i) => (
              <div className="reveal" data-delay={i === 0 ? undefined : `0.${i}`} key={benefit}>
                <div className="benefit-card">
                  <div className="benefit-inner">
                    <div className="benefit-icon"><CheckCircle size={20} /></div>
                    <div><h3>{benefit}</h3></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT QUALITY */}
      <section className="section-green-flat">
        <div className="container-86">
          <div className="grid-2">
            <div>
              <div className="reveal"><span className="section-label light">Quality Assurance</span></div>
              <div className="reveal" data-delay="0.1">
                <h2 className="section-title light">Export Quality Standards You Can Trust</h2>
              </div>
              <div className="reveal" data-delay="0.2">
                <p
                  style={{
                    marginTop: "1.5rem",
                    color: "rgba(255,255,255,0.8)",
                    fontSize: "1.125rem",
                    lineHeight: 1.625,
                  }}
                >
                  Every product we export undergoes rigorous quality checks to ensure it meets
                  international standards. From sourcing to shipping, quality is our top priority.
                </p>
              </div>

              <div className="pq-features">
                <div className="reveal" data-delay="0.3">
                  <div className="pq-feature">
                    <div className="pq-feature-icon"><Shield size={24} /></div>
                    <div>
                      <h3>Verified Sourcing</h3>
                      <p>Direct partnerships with certified farms ensuring authentic origin</p>
                    </div>
                  </div>
                </div>
                <div className="reveal" data-delay="0.4">
                  <div className="pq-feature">
                    <div className="pq-feature-icon"><FlaskConical size={24} /></div>
                    <div>
                      <h3>Lab Tested</h3>
                      <p>Every batch tested at NABL accredited laboratories</p>
                    </div>
                  </div>
                </div>
                <div className="reveal" data-delay="0.5">
                  <div className="pq-feature">
                    <div className="pq-feature-icon"><FileCheck size={24} /></div>
                    <div>
                      <h3>Full Traceability</h3>
                      <p>Complete documentation from farm to shipment</p>
                    </div>
                  </div>
                </div>
                <div className="reveal" data-delay="0.6">
                  <div className="pq-feature">
                    <div className="pq-feature-icon"><Truck size={24} /></div>
                    <div>
                      <h3>Export Ready</h3>
                      <p>Compliant with APEDA, FSSAI, and international standards</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="reveal reveal-right">
              <div className="about-image">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/quality-lab.jpg" alt="Quality Testing" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT PACKAGING */}
      <section className="bg-beige-sec">
        <div className="container-86">
          <div className="grid-2">
            <div className="reveal reveal-left">
              <div className="pack-image">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/packaging.jpg" alt="Product Packaging" />
              </div>
            </div>

            <div>
              <div className="reveal"><span className="story-pill">Packaging &amp; Supply</span></div>
              <div className="reveal" data-delay="0.1">
                <h2 className="story-title">Bulk Export Packaging</h2>
              </div>
              <div className="reveal" data-delay="0.2">
                <p
                  style={{
                    marginTop: "1.5rem",
                    color: "var(--muted-foreground)",
                    fontSize: "1.125rem",
                    lineHeight: 1.625,
                  }}
                >
                  We offer flexible packaging options to meet your bulk export requirements. All
                  packaging is food-grade and designed to maintain product quality during
                  international transit.
                </p>
              </div>

              <div className="reveal" data-delay="0.3">
                <div className="pack-options">
                  <h3>Available Packaging:</h3>
                  {product.packOptions.map((opt) => (
                    <div className="pack-option" key={opt.size + opt.desc}>
                      <Package size={24} />
                      <div>
                        <p>{opt.size}</p>
                        <p>{opt.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="reveal" data-delay="0.4">
                <div className="supply-grid">
                  <div className="supply-item"><Truck size={20} /> <span>Bulk orders welcome</span></div>
                  <div className="supply-item"><Globe size={20} /> <span>Worldwide shipping</span></div>
                  <div className="supply-item"><FileText size={20} /> <span>Full documentation</span></div>
                  <div className="supply-item"><Package size={20} /> <span>Custom packaging</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT CTA */}
      <section className="bg-white-sec">
        <div className="container-86">
          <div className="reveal">
            <div className="cta-block-brown">
              <div className="cta-block-glow1"></div>
              <div className="cta-block-glow2"></div>
              <div className="inner" style={{ position: "relative", zIndex: 10 }}>
                <h2 className="cta-title text-balance">{product.ctaTitle}</h2>
                <p className="cta-desc">
                  Get in touch with our export team for pricing, samples, and shipping arrangements.
                  We&apos;re here to help you source premium quality products from India.
                </p>

                <div className="cta-buttons">
                  <Link href="/contact" className="btn btn-white">
                    Send Enquiry
                    <ArrowRight size={20} className="arrow" />
                  </Link>
                  <a href="tel:+918737958006" className="btn btn-ghost">
                    <Phone size={20} />
                    Call Us Now
                  </a>
                </div>

                <div className="cta-contacts">
                  <a href="tel:+918737958006"><Phone size={20} /> +91 8737958006</a>
                  <a href="mailto:enquiry@virajagronaturals.com">
                    <Mail size={20} /> enquiry@virajagronaturals.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
