import './FloatingWhatsApp.css';
import Icon from './Icon';
import { siteConfig } from '../../data/siteConfig';

// ==========================================================================
// FLOATING WHATSAPP — fixed chat button shown on every page (bottom-right).
// Link is sourced from siteConfig.social.whatsapp.
// ==========================================================================

export default function FloatingWhatsApp() {
  return (
    <a
      className="floating-whatsapp"
      href={siteConfig.social.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
      <Icon name="whatsapp" size={32} />
      <span className="floating-whatsapp__label">Chat with us</span>
    </a>
  );
}
