import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { Mail, Phone, MapPin, Clock, Globe, Shield } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Contact Us | Viraj Agro Naturals - Get Export Quotes",
  description:
    "Contact Viraj Agro Naturals for bulk agricultural export inquiries. Get quotes for Moringa Powder and Chicory Roots. Reach us via phone, email, or our contact form.",
};

export default function ContactPage() {
  return (
    <>
      {/* CONTACT HERO */}
      <section className="page-hero" style={{ paddingBlock: "6rem" }}>
        <div className="page-hero-bg"></div>
        <div className="container-86 page-hero-inner">
          <div className="page-hero-content centered">
            <div className="hero-pill-anim">
              <span className="page-hero-pill">
                <Mail size={16} />
                Get In Touch
              </span>
            </div>
            <h1 className="page-hero-title hero-title-anim text-balance">
              Let&apos;s Start Your <span className="page-hero-title-accent">Export Journey</span>
            </h1>
            <p className="page-hero-text hero-text-anim">
              Ready to source premium agricultural products from India? Our team is here to assist you
              with quotes, samples, and shipping arrangements.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT FORM + INFO */}
      <section className="bg-white-sec">
        <div className="container-86">
          <div className="contact-grid">
            {/* Form Column */}
            <div>
              <ContactForm />
            </div>

            {/* Info Column */}
            <div className="contact-info-stack">
              <div className="reveal" data-delay="0.1">
                <div className="contact-info-card-green">
                  <h3>Contact Information</h3>
                  <div className="contact-info-list">
                    <div className="contact-info-row">
                      <div className="contact-info-icon"><Phone size={20} /></div>
                      <div>
                        <p>Phone</p>
                        <a href="tel:+918737958006">+91 8737958006</a>
                      </div>
                    </div>
                    <div className="contact-info-row">
                      <div className="contact-info-icon"><Mail size={20} /></div>
                      <div>
                        <p>General Enquiries</p>
                        <a href="mailto:official@virajagronaturals.com">official@virajagronaturals.com</a>
                      </div>
                    </div>
                    <div className="contact-info-row">
                      <div className="contact-info-icon"><Mail size={20} /></div>
                      <div>
                        <p>Export Enquiries</p>
                        <a href="mailto:enquiry@virajagronaturals.com">enquiry@virajagronaturals.com</a>
                      </div>
                    </div>
                    <div className="contact-info-row">
                      <div className="contact-info-icon"><MapPin size={20} /></div>
                      <div>
                        <p>Office Address</p>
                        <p>EWS 429 A Double Storey, Barra 2, Kanpur, Uttar Pradesh, India</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="reveal" data-delay="0.2">
                <div className="contact-biz-card">
                  <h3>Business Information</h3>
                  <div className="contact-biz-list">
                    <div className="contact-info-row">
                      <div className="contact-biz-icon"><Clock size={20} /></div>
                      <div>
                        <p>Business Hours</p>
                        <p>Mon - Sat: 9:00 AM - 6:00 PM IST</p>
                      </div>
                    </div>
                    <div className="contact-info-row">
                      <div className="contact-biz-icon"><Globe size={20} /></div>
                      <div>
                        <p>Export Markets</p>
                        <p>We cover almost all major international markets.</p>
                      </div>
                    </div>
                    <div className="contact-info-row">
                      <div className="contact-biz-icon"><Shield size={20} /></div>
                      <div>
                        <p>GST Number</p>
                        <p>9AAMCV0085D1Z8</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="reveal" data-delay="0.3">
                <div className="contact-promise-card">
                  <h3>Quick Response Guarantee</h3>
                  <p>
                    We understand the importance of timely communication in export business. Our team
                    commits to responding to all enquiries within 24-48 business hours.
                  </p>
                  <div className="contact-promise-status">
                    <span className="dot"></span>
                    <span>Available for international calls</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
