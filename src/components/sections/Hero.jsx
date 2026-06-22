import './Hero.css';
import Button from '../ui/Button';
import CredentialBadge from '../ui/CredentialBadge';
import Icon from '../ui/Icon';
import { stats } from '../../data/stats';

// ==========================================================================
// HERO — first viewport. The bordered panel echoes the business card's
// navy frame; the credential badge foregrounds the license up front.
// ==========================================================================

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__frame">
        <div className="container hero__inner">
          <div className="hero__content">
            <CredentialBadge />

            <h1 className="hero__headline">
              Your Trusted Route to a <span className="hero__accent">Verified Career</span> Abroad
            </h1>

            <p className="hero__subline">
              Golden Route is a licensed overseas employment promoter based in Islamabad,
              connecting skilled and semi-skilled Pakistani workers with verified employers
              across the Gulf and Middle East — every step handled with full transparency.
            </p>

            <div className="hero__cta-group">
              <Button href="#contact" variant="primary" size="lg" icon="arrow-right">
                Register Your Profile
              </Button>
              <Button href="#process" variant="secondary" size="lg">
                See How It Works
              </Button>
            </div>
          </div>

          <div className="hero__visual" aria-hidden="true">
            <div className="hero__visual-ring hero__visual-ring--outer" />
            <div className="hero__visual-ring hero__visual-ring--inner" />
            <div className="hero__visual-core">
              <Icon name="spark" size={30} />
            </div>
            <div className="hero__visual-chip hero__visual-chip--1">
              <Icon name="check-badge" size={16} />
              <span>Employer Verified</span>
            </div>
            <div className="hero__visual-chip hero__visual-chip--2">
              <Icon name="shield" size={16} />
              <span>BE&OE Compliant</span>
            </div>
          </div>
        </div>

        {/* ---- Stats bar ---- */}
        <div className="container">
          <div className="hero__stats">
            {stats.map((stat) => (
              <div key={stat.label} className="hero__stat">
                <span className="hero__stat-value">
                  {stat.value}
                  <span className="hero__stat-suffix">{stat.suffix}</span>
                </span>
                <span className="hero__stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
