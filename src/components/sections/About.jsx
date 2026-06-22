import './About.css';
import SectionHeading from '../ui/SectionHeading';
import Icon from '../ui/Icon';
import { siteConfig } from '../../data/siteConfig';

// ==========================================================================
// ABOUT — company story + leadership + credential strip.
// ==========================================================================

const COMMITMENTS = [
  'Every employer and job order verified before reaching a candidate',
  'No hidden charges beyond what is disclosed in writing',
  'Full BE&OE Protector of Emigrants compliance on every placement',
  'Direct, reachable support before and after deployment',
];

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container about__grid">
        <div className="about__copy">
          <SectionHeading
            eyebrow="About Golden Route"
            align="left"
            title="Built on Licensing, Trust, and Follow-Through"
          />
          <p className="about__paragraph">
            Golden Route Overseas Employment Promoters operates from Main Murree Road,
            Bhara Kahu, Islamabad, under Bureau of Emigration & Overseas Employment
            license <strong>{siteConfig.licenseNumber}</strong>. We work exclusively with
            verified overseas employers, so every candidate we place steps into a role
            that has already been checked — not just promised.
          </p>

          <ul className="about__commitments">
            {COMMITMENTS.map((item) => (
              <li key={item}>
                <Icon name="check-badge" size={18} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="about__leadership">
          <span className="about__leadership-label">Leadership</span>
          {siteConfig.team.map((member) => (
            <div key={member.name} className="about__leader-card">
              <div className="about__leader-avatar">
                {member.name.split(' ').map((n) => n[0]).join('')}
              </div>
              <div>
                <h3 className="about__leader-name">{member.name}</h3>
                <p className="about__leader-role">{member.role}</p>
                <a href={`tel:${member.phone.replace(/\s/g, '')}`} className="about__leader-phone">
                  <Icon name="phone" size={14} />
                  {member.phone}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
