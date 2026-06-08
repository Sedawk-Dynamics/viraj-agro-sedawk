import type { Metadata } from "next";
import Link from "next/link";
import { Leaf, ArrowRight, CheckCircle, Target, Eye, Heart, Phone, Mail } from "@/components/Icons";

export const metadata: Metadata = {
  title: "About Us | Viraj Agro Naturals - Premium Agricultural Export Company",
  description:
    "Learn about Viraj Agro Naturals, an India-based export trading company specializing in premium agricultural products with verified farm sourcing and complete traceability.",
};

export default function AboutPage() {
  return (
    <>
      {/* ABOUT HERO */}
      <section className="page-hero">
        <div className="page-hero-bg"></div>
        <div className="page-hero-leaf">
          <Leaf size={96} />
        </div>
        <div className="container-86 page-hero-inner">
          <div className="page-hero-content">
            <div className="hero-pill-anim">
              <span className="page-hero-pill">
                <Leaf size={16} />
                About Viraj Agro Naturals
              </span>
            </div>
            <h1 className="page-hero-title hero-title-anim text-balance">
              Your Trusted Partner for{" "}
              <span className="page-hero-title-accent">Agricultural Excellence</span>
            </h1>
            <p className="page-hero-text hero-text-anim">
              We bridge the gap between India&apos;s finest farms and global markets, delivering
              premium agricultural products with complete transparency and unwavering quality
              commitment.
            </p>
          </div>
        </div>
      </section>

      {/* COMPANY STORY */}
      <section className="bg-white-sec">
        <div className="container-86">
          <div className="grid-2">
            <div className="reveal reveal-left">
              <div className="about-image-wrap">
                <div className="about-image">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/hero-farm.jpg" alt="Indian Agricultural Farms" />
                </div>
                <div className="story-stat-card">
                  <p>Established</p>
                  <p>2025</p>
                </div>
              </div>
            </div>

            <div>
              <div className="reveal"><span className="story-pill">Our Story</span></div>
              <div className="reveal" data-delay="0.1">
                <h2 className="story-title">Building Trust Through Quality and Transparency</h2>
              </div>
              <div className="reveal" data-delay="0.2">
                <p
                  className="lead"
                  style={{
                    marginTop: "1.5rem",
                    color: "var(--muted-foreground)",
                    fontSize: "1.125rem",
                    lineHeight: 1.625,
                  }}
                >
                  Viraj Agro Naturals Private Limited is an India-based export trading company founded
                  with a clear mission: to supply premium agricultural products to global markets
                  while maintaining the highest standards of quality and transparency.
                </p>
              </div>
              <div className="reveal" data-delay="0.3">
                <p style={{ marginTop: "1rem", color: "var(--muted-foreground)", lineHeight: 1.625 }}>
                  Based in Kanpur, Uttar Pradesh, we have strategically positioned ourselves at the
                  heart of India&apos;s agricultural belt. This allows us to work directly with
                  verified farms across the country, ensuring authentic sourcing and sustainable
                  practices.
                </p>
              </div>
              <div className="reveal" data-delay="0.4">
                <p style={{ marginTop: "1rem", color: "var(--muted-foreground)", lineHeight: 1.625 }}>
                  We specialize in bulk export of premium products including Moringa Powder and
                  Chicory Roots to the UK, USA, Australia, and Europe. Every shipment we dispatch is
                  backed by complete documentation, accredited lab testing, and full batch
                  traceability from farm to destination.
                </p>
              </div>
              <div className="reveal" data-delay="0.5">
                <div className="story-cert-grid">
                  <div className="story-cert-item">
                    <p>APEDA</p>
                    <p>Registered Exporter</p>
                  </div>
                  <div className="story-cert-item">
                    <p>FSSAI</p>
                    <p>Fully Compliant</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION VISION VALUES */}
      <section className="bg-beige-sec">
        <div className="container-86">
          <div className="section-heading-wrap centered">
            <div className="reveal"><span className="section-label">What Drives Us</span></div>
            <div className="reveal" data-delay="0.1">
              <h2 className="section-title">Mission, Vision &amp; Values</h2>
            </div>
            <div className="reveal" data-delay="0.2">
              <p className="section-description">
                Our commitment to excellence guides every decision we make and every product we
                export.
              </p>
            </div>
          </div>

          <div className="mvv-grid">
            <div className="reveal">
              <div className="mvv-card">
                <div className="mvv-icon"><Target size={32} /></div>
                <h3>Our Mission</h3>
                <p>
                  To be the most trusted source of premium Indian agricultural products for global
                  buyers, ensuring consistent quality, complete transparency, and reliable delivery
                  that exceeds international standards.
                </p>
              </div>
            </div>
            <div className="reveal" data-delay="0.1">
              <div className="mvv-card">
                <div className="mvv-icon"><Eye size={32} /></div>
                <h3>Our Vision</h3>
                <p>
                  To establish India as the preferred origin for premium agricultural exports
                  worldwide, building long-term partnerships with buyers who value quality,
                  traceability, and ethical sourcing practices.
                </p>
              </div>
            </div>
            <div className="reveal" data-delay="0.2">
              <div className="mvv-card">
                <div className="mvv-icon"><Heart size={32} /></div>
                <h3>Our Values</h3>
                <p>
                  Quality without compromise, transparency in every transaction, respect for farming
                  communities, commitment to sustainable practices, and dedication to exceeding
                  customer expectations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUALITY COMMITMENT */}
      <section id="quality" className="bg-white-sec">
        <div className="container-86">
          <div className="grid-2">
            <div>
              <div className="reveal"><span className="story-pill">Quality Assurance</span></div>
              <div className="reveal" data-delay="0.1">
                <h2 className="story-title">Uncompromising Commitment to Quality</h2>
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
                  Quality is not just a promise at Viraj Agro Naturals—it&apos;s embedded in every
                  aspect of our operations. From farm selection to final shipment, we maintain
                  rigorous standards that global buyers can rely on.
                </p>
              </div>

              <div className="q-points">
                <div className="reveal" data-delay="0.3">
                  <div className="q-point">
                    <CheckCircle size={24} />
                    <div>
                      <h4>Verified Farm Sourcing</h4>
                      <p>
                        We work exclusively with certified farms that follow sustainable and ethical
                        farming practices.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="reveal" data-delay="0.4">
                  <div className="q-point">
                    <CheckCircle size={24} />
                    <div>
                      <h4>Accredited Lab Testing</h4>
                      <p>
                        Every batch is tested at NABL accredited laboratories for purity,
                        contamination, and nutritional content.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="reveal" data-delay="0.5">
                  <div className="q-point">
                    <CheckCircle size={24} />
                    <div>
                      <h4>Complete Batch Traceability</h4>
                      <p>
                        Full documentation trail from farm to shipment, ensuring transparency at
                        every step.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="reveal reveal-right">
              <div className="about-image">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/quality-lab.jpg" alt="Quality Testing Laboratory" />
              </div>
            </div>
          </div>

          <div className="q-extra-grid">
            <div className="reveal">
              <div className="q-extra-card">
                <CheckCircle size={32} />
                <h4>International Standards Compliance</h4>
                <p>All products meet FSSAI, APEDA, and destination country import regulations.</p>
              </div>
            </div>
            <div className="reveal" data-delay="0.1">
              <div className="q-extra-card">
                <CheckCircle size={32} />
                <h4>Quality-Controlled Packaging</h4>
                <p>Food-grade packaging that maintains product integrity during international transit.</p>
              </div>
            </div>
            <div className="reveal" data-delay="0.2">
              <div className="q-extra-card">
                <CheckCircle size={32} />
                <h4>Regular Quality Audits</h4>
                <p>Continuous monitoring and improvement of our sourcing and processing standards.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="section-green-flat">
        <div className="container-86">
          <div className="section-heading-wrap centered">
            <div className="reveal"><span className="section-label light">Leadership</span></div>
            <div className="reveal" data-delay="0.1">
              <h2 className="section-title light">Meet Our Team</h2>
            </div>
            <div className="reveal" data-delay="0.2">
              <p className="section-description light">
                Dedicated professionals committed to delivering excellence in agricultural exports.
              </p>
            </div>
          </div>

          <div className="team-grid">
            <div className="reveal">
              <div className="team-card">
                <div className="team-avatar">T</div>
                <h3>Tarun</h3>
                <p className="team-role">Founder &amp; CEO</p>
                <p className="team-desc">
                  Leading the vision of Viraj Agro Naturals with a passion for quality agriculture
                  and global trade.
                </p>
                <a href="mailto:tarun@virajagronaturals.com" className="team-email">
                  <Mail size={16} />
                  tarun@virajagronaturals.com
                </a>
              </div>
            </div>
            <div className="reveal" data-delay="0.1">
              <div className="team-card">
                <div className="team-avatar">R</div>
                <h3>Raj Kumari</h3>
                <p className="team-role">Co-Founder &amp; Director</p>
                <p className="team-desc">
                  Overseeing operations and ensuring excellence in every aspect of our export
                  business.
                </p>
                <a href="mailto:director@virajagronaturals.com" className="team-email">
                  <Mail size={16} />
                  director@virajagronaturals.com
                </a>
              </div>
            </div>
          </div>

          <div className="reveal" data-delay="0.3">
            <div className="team-contact-block">
              <p>Interested in working with us? Get in touch today.</p>
              <div className="team-contact-buttons">
                <Link href="/contact" className="btn btn-primary btn-sm">
                  Contact Us
                  <ArrowRight size={20} className="arrow" />
                </Link>
                <a href="tel:+918737958006" className="btn btn-ghost btn-sm">
                  <Phone size={20} />
                  +91 8737958006
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
