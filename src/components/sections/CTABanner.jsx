import './CTABanner.css';
import Button from '../ui/Button';

// ==========================================================================
// CTA BANNER — standalone conversion push between Process and About.
// Self-contained; can be removed by deleting its <CTABanner /> line in App.
// ==========================================================================

export default function CTABanner() {
  return (
    <section className="cta-banner">
      <div className="container cta-banner__inner">
        <div>
          <h2 className="cta-banner__title">Ready to take the first step?</h2>
          <p className="cta-banner__subtitle">
            Register today and our team will match you with verified job openings within your trade.
          </p>
        </div>
        <Button href="#contact" variant="primary" size="lg" icon="arrow-right">
          Apply Now
        </Button>
      </div>
    </section>
  );
}
