import './Footer.css';
import Logo from '../ui/Logo';
import Icon from '../ui/Icon';
import CredentialBadge from '../ui/CredentialBadge';
import { siteConfig } from '../../data/siteConfig';
import { services } from '../../data/services';

// ==========================================================================
// FOOTER — bottom-of-page block. Sourced entirely from siteConfig + services.
// ==========================================================================

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__top">
        <div className="footer__brand">
          <Logo variant="light" size={46} />
          <p className="footer__about">
            A licensed overseas employment promoter based in Islamabad, connecting
            skilled Pakistani workers with verified employers abroad.
          </p>
          <CredentialBadge variant="inverse" />
        </div>

        <div className="footer__col">
          <h3 className="footer__heading">Services</h3>
          <ul>
            {services.slice(0, 5).map((s) => (
              <li key={s.id}>
                <a href="#services">{s.title}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h3 className="footer__heading">Quick Links</h3>
          <ul>
            <li><a href="#process">How It Works</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#faq">FAQs</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer__col">
          <h3 className="footer__heading">Contact</h3>
          <ul className="footer__contact-list">
            <li>
              <Icon name="pin" size={16} />
              <span>{siteConfig.contact.address}</span>
            </li>
            <li>
              <Icon name="mail" size={16} />
              <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
            </li>
            {siteConfig.contact.phones.map((p) => (
              <li key={p.number}>
                <Icon name="phone" size={16} />
                <a href={`tel:${p.number.replace(/\s/g, '')}`}>{p.number}</a>
              </li>
            ))}
          </ul>

          <div className="footer__socials">
            <a href={siteConfig.social.whatsapp} aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
              <Icon name="whatsapp" size={18} />
            </a>
            <a href={siteConfig.social.facebook} aria-label="Facebook">
              <Icon name="facebook" size={18} />
            </a>
            <a href={siteConfig.social.instagram} aria-label="Instagram">
              <Icon name="instagram" size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <span>© {year} Golden Route Overseas Employment Promoters. All rights reserved.</span>
          <span className="footer__license-text">License No. {siteConfig.licenseNumber}</span>
        </div>
      </div>
    </footer>
  );
}
