import Link from "next/link";
import {
  Leaf,
  ArrowRight,
  Shield,
  Globe,
  CheckCircle,
  ShieldCheck,
  FlaskConical,
  FileText,
  Truck,
  Users,
  MapPin,
  Phone,
  Mail,
} from "@/components/Icons";

export default function HomePage() {
  return (
    <>
      {/* ============================ HERO ============================ */}
      <section className="hero">
        <div className="hero-bg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/hero-farm.jpg" alt="Agricultural farmland" />
        </div>

        <div className="hero-leaf-1">
          <Leaf size={128} />
        </div>
        <div className="hero-leaf-2">
          <Leaf size={96} />
        </div>

        <div className="container-86 hero-content">
          <div className="hero-inner">
            <div className="hero-pill-anim">
              <span className="hero-pill">
                <Leaf size={16} />
                Premium Agricultural Exports from India
              </span>
            </div>

            <h1 className="hero-title hero-title-anim text-balance">
              From Indian Farms to <span className="hero-title-accent">Global Markets</span>
            </h1>

            <p className="hero-text hero-text-anim">
              We supply premium agricultural products to the UK, USA, Australia, and Europe through
              verified farm sourcing, ensuring complete traceability from farm to shipment.
            </p>

            <div className="hero-buttons hero-buttons-anim">
              <Link href="/contact" className="btn btn-primary">
                Request a Quote
                <ArrowRight size={20} className="arrow" />
              </Link>
              <Link href="/products/moringa-powder" className="btn btn-ghost">
                Explore Products
              </Link>
            </div>

            <div className="trust-badges trust-badges-anim">
              <div className="trust-badge">
                <div className="trust-badge-icon">
                  <Shield size={24} />
                </div>
                <div>
                  <p>APEDA Registered</p>
                  <p>Export Certified</p>
                </div>
              </div>
              <div className="trust-badge">
                <div className="trust-badge-icon">
                  <Leaf size={24} />
                </div>
                <div>
                  <p>FSSAI Compliant</p>
                  <p>Food Safety Assured</p>
                </div>
              </div>
              <div className="trust-badge">
                <div className="trust-badge-icon">
                  <Globe size={24} />
                </div>
                <div>
                  <p>IEC Certified</p>
                  <p>Global Trade Ready</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="scroll-indicator scroll-indicator-anim">
          <div className="scroll-indicator-dot"></div>
        </div>
      </section>

      {/* ============================ ABOUT SECTION ============================ */}
      <section className="bg-white-sec">
        <div className="container-86">
          <div className="grid-2">
            <div className="reveal reveal-left">
              <div className="about-image-wrap">
                <div className="about-image">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/about-team.jpg" alt="Viraj Agro Naturals Team" />
                </div>
                <div className="about-stats-card">
                  <p>100%</p>
                  <p>Quality Assured</p>
                </div>
                <div className="about-deco"></div>
              </div>
            </div>

            <div className="about-content">
              <div className="reveal">
                <span className="section-label">About Us</span>
              </div>
              <div className="reveal" data-delay="0.1">
                <h2 className="section-title">
                  Your Trusted Partner for Premium Agricultural Exports
                </h2>
              </div>
              <div className="reveal" data-delay="0.2">
                <p className="lead">
                  Viraj Agro Naturals is an India-based export trading company specializing in
                  premium agricultural products. We connect quality farms in India with global
                  buyers in the UK, USA, Australia, and Europe.
                </p>
              </div>
              <div className="reveal" data-delay="0.3">
                <p className="body">
                  Fully compliant with APEDA, FSSAI, and IEC regulations, we ensure every shipment
                  meets international quality standards with complete documentation and traceability.
                </p>
              </div>
              <div className="reveal" data-delay="0.4">
                <ul className="highlights">
                  <li><CheckCircle size={20} /> Verified farm sourcing across India</li>
                  <li><CheckCircle size={20} /> Complete batch traceability</li>
                  <li><CheckCircle size={20} /> Accredited lab testing</li>
                  <li><CheckCircle size={20} /> Reliable supply chain management</li>
                </ul>
              </div>
              <div className="reveal" data-delay="0.5">
                <Link href="/about" className="link-arrow mt-8">
                  Learn More About Us
                  <ArrowRight size={20} className="arrow" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================ PRODUCTS SECTION ============================ */}
      <section className="bg-beige-sec">
        <div className="container-86">
          <div className="section-heading-wrap centered">
            <div className="reveal"><span className="section-label">Our Products</span></div>
            <div className="reveal" data-delay="0.1">
              <h2 className="section-title">Premium Agricultural Products for Global Export</h2>
            </div>
            <div className="reveal" data-delay="0.2">
              <p className="section-description">
                We specialize in bulk export of carefully sourced, quality-tested agricultural
                products that meet international standards.
              </p>
            </div>
          </div>

          <div className="products-grid">
            <div className="reveal">
              <div className="product-card">
                <div className="product-card-img">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/moringa-powder.jpg" alt="Moringa Powder" />
                  <div className="product-tags">
                    <span className="product-tag">Organic Certified</span>
                    <span className="product-tag">Lab Tested</span>
                    <span className="product-tag">Bulk Available</span>
                  </div>
                </div>
                <div className="product-card-body">
                  <h3>Moringa Powder</h3>
                  <p>
                    Premium quality moringa oleifera leaf powder, rich in nutrients and antioxidants.
                    Ideal for food, pharmaceutical, and cosmetic industries.
                  </p>
                  <Link href="/products/moringa-powder" className="link-arrow">
                    View Product Details
                    <ArrowRight size={20} className="arrow" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="reveal" data-delay="0.1">
              <div className="product-card">
                <div className="product-card-img">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/chicory-roots.jpg" alt="Chicory Roots" />
                  <div className="product-tags">
                    <span className="product-tag">Premium Grade</span>
                    <span className="product-tag">Export Quality</span>
                    <span className="product-tag">Consistent Supply</span>
                  </div>
                </div>
                <div className="product-card-body">
                  <h3>Chicory Roots</h3>
                  <p>
                    High-quality chicory roots for food processing and coffee substitutes. Sourced
                    from premium farms with complete traceability.
                  </p>
                  <Link href="/products/chicory-roots" className="link-arrow">
                    View Product Details
                    <ArrowRight size={20} className="arrow" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================ WHY CHOOSE US ============================ */}
      <section className="bg-white-sec">
        <div className="container-86">
          <div className="section-heading-wrap centered">
            <div className="reveal"><span className="section-label">Why Choose Us</span></div>
            <div className="reveal" data-delay="0.1">
              <h2 className="section-title">Reducing Sourcing Risk for Global Buyers</h2>
            </div>
            <div className="reveal" data-delay="0.2">
              <p className="section-description">
                We bridge the gap between Indian farms and international markets through transparency,
                consistent quality, and dependable delivery.
              </p>
            </div>
          </div>

          <div className="features-grid">
            <div className="reveal">
              <div className="feature-card">
                <div className="feature-icon"><ShieldCheck size={28} /></div>
                <h3>Verified Farm Sourcing</h3>
                <p>
                  We work directly with certified farms across India, ensuring authentic origin and
                  sustainable farming practices.
                </p>
              </div>
            </div>

            <div className="reveal" data-delay="0.1">
              <div className="feature-card">
                <div className="feature-icon"><FlaskConical size={28} /></div>
                <h3>Accredited Lab Testing</h3>
                <p>
                  Every batch undergoes rigorous quality testing at accredited laboratories to meet
                  international standards.
                </p>
              </div>
            </div>

            <div className="reveal" data-delay="0.2">
              <div className="feature-card">
                <div className="feature-icon"><FileText size={28} /></div>
                <h3>Complete Traceability</h3>
                <p>
                  Full documentation and batch traceability from farm to shipment, ensuring
                  transparency at every step.
                </p>
              </div>
            </div>

            <div className="reveal">
              <div className="feature-card">
                <div className="feature-icon"><Truck size={28} /></div>
                <h3>Reliable Supply Chain</h3>
                <p>
                  Dependable delivery schedules with efficient logistics management for timely global
                  shipments.
                </p>
              </div>
            </div>

            <div className="reveal" data-delay="0.1">
              <div className="feature-card">
                <div className="feature-icon"><Globe size={28} /></div>
                <h3>Export Compliance</h3>
                <p>
                  Fully compliant with APEDA, FSSAI, and IEC regulations. All documentation handled
                  professionally.
                </p>
              </div>
            </div>

            <div className="reveal" data-delay="0.2">
              <div className="feature-card">
                <div className="feature-icon"><Users size={28} /></div>
                <h3>Dedicated Support</h3>
                <p>
                  Personalized service with dedicated account managers for seamless communication and
                  order handling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================ CERTIFICATIONS ============================ */}
      <section className="section-green">
        <div className="bg-glow"></div>
        <div className="container-86">
          <div className="section-heading-wrap centered">
            <div className="reveal"><span className="section-label light">Certifications</span></div>
            <div className="reveal" data-delay="0.1">
              <h2 className="section-title light">Fully Compliant with International Standards</h2>
            </div>
            <div className="reveal" data-delay="0.2">
              <p className="section-description light">
                Our certifications ensure that every product meets the highest quality and safety
                standards for global export.
              </p>
            </div>
          </div>

          <div className="cert-grid">
            <div className="reveal">
              <div className="cert-card">
                <div className="cert-badge"><span>APEDA</span></div>
                <h3>Agricultural and Processed Food Products Export Development Authority</h3>
                <p>Registered exporter under APEDA for agricultural products</p>
              </div>
            </div>
            <div className="reveal" data-delay="0.1">
              <div className="cert-card">
                <div className="cert-badge"><span>FSSAI</span></div>
                <h3>Food Safety and Standards Authority of India</h3>
                <p>Compliant with all food safety regulations and standards</p>
              </div>
            </div>
            <div className="reveal" data-delay="0.2">
              <div className="cert-card">
                <div className="cert-badge"><span>IEC</span></div>
                <h3>Importer Exporter Code</h3>
                <p>Licensed for international import-export trade operations</p>
              </div>
            </div>
            <div className="reveal" data-delay="0.3">
              <div className="cert-card">
                <div className="cert-badge"><span>Lab Tested</span></div>
                <h3>Accredited Laboratory Testing</h3>
                <p>All products tested at NABL accredited laboratories</p>
              </div>
            </div>
          </div>

          <div className="reveal" data-delay="0.3">
            <div className="quality-block">
              <div className="quality-block-image">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/quality-lab.jpg" alt="Quality Testing Laboratory" />
              </div>
              <div>
                <h3>Rigorous Quality Assurance</h3>
                <p>
                  Every batch of our products undergoes comprehensive testing at NABL accredited
                  laboratories. We test for purity, contamination, nutritional content, and
                  compliance with international food safety standards.
                </p>
                <p>
                  Our quality assurance process ensures that what reaches our global buyers is
                  nothing but the finest agricultural produce from India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================ EXPORT MARKETS ============================ */}
      <section className="bg-beige-sec">
        <div className="container-86">
          <div className="grid-2">
            <div>
              <div className="reveal"><span className="section-label">Global Reach</span></div>
              <div className="reveal" data-delay="0.1">
                <h2 className="section-title">Exporting Premium Products Worldwide</h2>
              </div>
              <div className="reveal" data-delay="0.2">
                <p className="section-description">
                  We serve discerning buyers across continents, delivering consistent quality and
                  reliable service to major global markets.
                </p>
              </div>

              <div className="markets-grid">
                {[
                  "Asia",
                  "Africa",
                  "North America",
                  "South America",
                  "Europe",
                  "Australia",
                ].map((name, i) => (
                  <div className="reveal" data-delay={i === 0 ? undefined : `0.${i}`} key={name}>
                    <div className="market-item">
                      <span className="market-flag"><CheckCircle size={24} /></span>
                      <span className="market-name">{name}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="reveal" data-delay="0.4">
                <div className="location-card">
                  <div className="location-icon">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4>Headquartered in India</h4>
                    <p>EWS 429 A Double Storey, Barra 2, Kanpur, Uttar Pradesh</p>
                    <p>Strategic location for pan-India sourcing</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="reveal reveal-right">
              <div className="markets-image-wrap">
                <div className="markets-image">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/global-shipping.jpg" alt="Global Shipping Operations" />
                </div>
                <div className="stats-overlay">
                  <div className="stat">
                    <p className="stat-value">6+</p>
                    <p className="stat-label">Global Regions</p>
                  </div>
                  <div className="stat-divider"></div>
                  <div className="stat">
                    <p className="stat-value">100%</p>
                    <p className="stat-label">Traceable</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================ CTA SECTION ============================ */}
      <section className="bg-white-sec">
        <div className="container-86">
          <div className="reveal">
            <div className="cta-block">
              <div className="cta-block-glow1"></div>
              <div className="cta-block-glow2"></div>
              <div className="inner">
                <span className="cta-pill">Start Your Export Journey</span>
                <h2 className="cta-title text-balance">
                  Ready to Source Premium Agricultural Products from India?
                </h2>
                <p className="cta-desc">
                  Connect with us for bulk export inquiries. Our team is ready to assist you with
                  pricing, samples, and shipping arrangements.
                </p>

                <div className="cta-buttons">
                  <Link href="/contact" className="btn btn-primary">
                    Send Enquiry
                    <ArrowRight size={20} className="arrow" />
                  </Link>
                  <a href="tel:+918737958006" className="btn btn-ghost">
                    <Phone size={20} />
                    Call Us Now
                  </a>
                </div>

                <div className="cta-contacts">
                  <a href="tel:+918737958006">
                    <Phone size={20} />
                    +91 8737958006
                  </a>
                  <a href="mailto:enquiry@virajagronaturals.com">
                    <Mail size={20} />
                    enquiry@virajagronaturals.com
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
