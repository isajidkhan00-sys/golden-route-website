import './CredentialBadge.css';
import { siteConfig } from '../../data/siteConfig';

// ==========================================================================
// CREDENTIAL BADGE — the site's signature element. Treats the license
// number like an official seal rather than burying it in fine print.
// This is the trust anchor referenced across the hero, footer, and
// anywhere legitimacy needs to be foregrounded.
// ==========================================================================

export default function CredentialBadge({ variant = 'default' }) {
  return (
    <div className={`credential-badge credential-badge--${variant}`}>
      <div className="credential-badge__seal" aria-hidden="true">
        <svg viewBox="0 0 40 40" width="34" height="34">
          <circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="20" cy="20" r="13.5" fill="none" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2.2 2.4" />
          <path d="M13 21l4.2 4.2L28 14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div className="credential-badge__text">
        <span className="credential-badge__label">{siteConfig.licenseLabel}</span>
        <span className="credential-badge__number">{siteConfig.licenseNumber}</span>
      </div>
    </div>
  );
}
