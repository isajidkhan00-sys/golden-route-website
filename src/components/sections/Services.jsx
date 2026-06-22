import './Services.css';
import SectionHeading from '../ui/SectionHeading';
import Icon from '../ui/Icon';
import { services } from '../../data/services';

// ==========================================================================
// SERVICES — grid of service cards. Maps directly over data/services.js,
// so adding/removing a service is a data change only, no JSX edits needed.
// ==========================================================================

export default function Services() {
  return (
    <section className="services section" id="services">
      <div className="container">
        <SectionHeading
          eyebrow="What We Offer"
          title="Complete Overseas Employment Services"
          description="From recruitment to post-deployment support, every step is handled in-house by our licensed team."
        />

        <div className="services__grid">
          {services.map((service, i) => (
            <div
              key={service.id}
              className="services__card"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="services__icon">
                <Icon name={service.icon} size={26} />
              </div>
              <h3 className="services__card-title">{service.title}</h3>
              <p className="services__card-desc">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
