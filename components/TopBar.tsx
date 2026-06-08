import { Phone, Mail, Facebook, Instagram, Linkedin, WhatsApp, Youtube } from "./Icons";

export default function TopBar() {
  return (
    <div className="top-bar">
      <div className="container-max top-bar-inner">
        <div className="top-bar-left">
          <a href="tel:+918737958006">
            <Phone size={16} />
            +91 8737958006
          </a>
          <a href="mailto:official@virajagronaturals.com">
            <Mail size={16} />
            official@virajagronaturals.com
          </a>
        </div>
        <div className="top-bar-right">
          APEDA | FSSAI | IEC Certified
          <div className="top-bar-socials">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-icon">
              <Facebook size={15} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-icon">
              <Instagram size={15} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon">
              <Linkedin size={15} />
            </a>
            <a href="https://wa.me/918737958006" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="social-icon">
              <WhatsApp size={15} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="social-icon">
              <Youtube size={15} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
