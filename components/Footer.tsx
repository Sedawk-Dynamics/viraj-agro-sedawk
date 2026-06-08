import Link from "next/link";
import { ArrowRight, Phone, Mail, MapPin } from "./Icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-cta">
        <div className="container-max footer-cta-inner">
          <div>
            <h3>Ready to Source Premium Agricultural Products?</h3>
            <p>Get in touch with us for bulk export inquiries</p>
          </div>
          <Link href="/contact">
            Send Enquiry
            <ArrowRight size={20} className="arrow" />
          </Link>
        </div>
      </div>

      <div className="container-max footer-main">
        <div className="footer-grid">
          <div className="footer-brand">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/logo.png" alt="Viraj Agro Naturals" />
            <p className="footer-brand-text">
              India-based export trading company supplying premium agricultural products globally
              through verified farm sourcing and reliable supply chains.
            </p>
            <div className="footer-contacts">
              <a href="tel:+918737958006">
                <Phone size={20} /> +91 8737958006
              </a>
              <a href="mailto:official@virajagronaturals.com">
                <Mail size={20} /> official@virajagronaturals.com
              </a>
              <div>
                <MapPin size={20} />{" "}
                <span>EWS 429 A Double Storey, Barra 2, Kanpur, Uttar Pradesh, India</span>
              </div>
            </div>
          </div>

          <div>
            <h4>Company</h4>
            <ul className="footer-links">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/products/moringa-powder">Our Products</Link></li>
              <li><Link href="/about#quality">Quality Assurance</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4>Our Products</h4>
            <ul className="footer-links">
              <li><Link href="/products/moringa-powder">Moringa Powder</Link></li>
              <li><Link href="/products/chicory-roots">Chicory Roots</Link></li>
            </ul>
            <h4 style={{ marginTop: "2rem" }}>Certifications</h4>
            <ul className="footer-cert-list">
              <li>APEDA Registered</li>
              <li>FSSAI Compliant</li>
              <li>IEC Certified</li>
              <li>Lab Tested</li>
            </ul>
          </div>

          <div>
            <h4>Export Markets</h4>
            <div className="footer-markets-grid">
              <span>United Kingdom</span><span>United States</span><span>Australia</span>
              <span>Europe</span><span>Middle East</span><span>Asia Pacific</span>
            </div>
            <div className="footer-gst">
              <p>GST Number</p>
              <p>9AAMCV0085D1Z8</p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container-max footer-bottom-inner">
          <p>&copy; {year} Viraj Agro Naturals Private Limited. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link href="/contact">Privacy Policy</Link>
            <Link href="/contact">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
