import { useState, useEffect } from 'react';
import './Header.css';
import Logo from '../ui/Logo';
import Button from '../ui/Button';
import Icon from '../ui/Icon';
import { siteConfig } from '../../data/siteConfig';

// ==========================================================================
// HEADER — sticky nav. Add/remove a nav link by editing NAV_LINKS below.
// ==========================================================================

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'How It Works', href: '#process' },
  { label: 'About', href: '#about' },
  { label: 'FAQ', href: '#faq' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
  }, [isMenuOpen]);

  const handleLinkClick = () => setIsMenuOpen(false);

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="container header__inner">
        <a href="#top" className="header__logo-link" aria-label="Golden Route — home">
          <Logo size={42} />
        </a>

        <nav className="header__nav" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="header__nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header__actions">
          <a href={`tel:${siteConfig.contact.phones[0].number.replace(/\s/g, '')}`} className="header__phone">
            <Icon name="phone" size={16} />
            <span>{siteConfig.contact.phones[0].number}</span>
          </a>
          <Button href="#contact" variant="primary" size="sm">
            Apply Now
          </Button>
        </div>

        <button
          className="header__menu-toggle"
          onClick={() => setIsMenuOpen((v) => !v)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
        >
          <Icon name={isMenuOpen ? 'close' : 'menu'} size={26} />
        </button>
      </div>

      {/* ---- Mobile menu overlay ---- */}
      <div className={`header__mobile-menu ${isMenuOpen ? 'header__mobile-menu--open' : ''}`}>
        <nav aria-label="Mobile">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={handleLinkClick} className="header__mobile-link">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="header__mobile-footer">
          <a href={`tel:${siteConfig.contact.phones[0].number.replace(/\s/g, '')}`} className="header__mobile-phone">
            <Icon name="phone" size={18} />
            {siteConfig.contact.phones[0].number}
          </a>
          <Button href="#contact" variant="primary" size="lg" onClick={handleLinkClick} className="header__mobile-cta">
            Apply Now
          </Button>
        </div>
      </div>
    </header>
  );
}
