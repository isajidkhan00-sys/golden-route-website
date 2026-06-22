import { useState } from 'react';
import './Contact.css';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import Icon from '../ui/Icon';
import { siteConfig } from '../../data/siteConfig';

// ==========================================================================
// CONTACT — inquiry form + contact details. Form currently submits via
// mailto: (no backend wired up). Swap handleSubmit to call an API route
// later without touching the markup.
// ==========================================================================

const TRADE_OPTIONS = [
  'Select your trade / skill category',
  'Construction & Labour',
  'Electrician',
  'Plumber',
  'Driver',
  'Welder / Fabricator',
  'Hospitality & Catering',
  'Domestic Staff',
  'Office / Administrative',
  'Other',
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', trade: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sent

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Job Inquiry — ${form.name || 'New Candidate'}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nTrade/Skill: ${form.trade}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:${siteConfig.contact.email}?subject=${subject}&body=${body}`;
    setStatus('sent');
  };

  return (
    <section className="contact section" id="contact">
      <div className="container contact__grid">
        <div className="contact__info">
          <SectionHeading
            eyebrow="Get In Touch"
            align="left"
            title="Start Your Application Today"
            description="Fill in your details and our team will contact you with verified job openings matching your skill category."
          />

          <div className="contact__details">
            <a href={`tel:${siteConfig.contact.phones[0].number.replace(/\s/g, '')}`} className="contact__detail-card">
              <Icon name="phone" size={20} />
              <div>
                <span className="contact__detail-label">Call Us</span>
                <span className="contact__detail-value">{siteConfig.contact.phones[0].number}</span>
              </div>
            </a>
            <a href={siteConfig.social.whatsapp} target="_blank" rel="noopener noreferrer" className="contact__detail-card">
              <Icon name="whatsapp" size={20} />
              <div>
                <span className="contact__detail-label">WhatsApp</span>
                <span className="contact__detail-value">Chat with us directly</span>
              </div>
            </a>
            <a href={`mailto:${siteConfig.contact.email}`} className="contact__detail-card">
              <Icon name="mail" size={20} />
              <div>
                <span className="contact__detail-label">Email</span>
                <span className="contact__detail-value">{siteConfig.contact.email}</span>
              </div>
            </a>
            <div className="contact__detail-card">
              <Icon name="pin" size={20} />
              <div>
                <span className="contact__detail-label">Office</span>
                <span className="contact__detail-value">{siteConfig.contact.address}</span>
              </div>
            </div>
          </div>
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="contact__form-row">
            <label className="contact__field">
              <span>Full Name</span>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your full name"
              />
            </label>
            <label className="contact__field">
              <span>Phone Number</span>
              <input
                type="tel"
                name="phone"
                required
                value={form.phone}
                onChange={handleChange}
                placeholder="03XX XXXXXXX"
              />
            </label>
          </div>

          <label className="contact__field">
            <span>Trade / Skill Category</span>
            <select name="trade" required value={form.trade} onChange={handleChange}>
              {TRADE_OPTIONS.map((opt, i) => (
                <option key={opt} value={i === 0 ? '' : opt} disabled={i === 0}>
                  {opt}
                </option>
              ))}
            </select>
          </label>

          <label className="contact__field">
            <span>Message (optional)</span>
            <textarea
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us about your experience or preferred destination country..."
            />
          </label>

          <Button type="submit" variant="primary" size="lg" icon="arrow-right" className="contact__submit">
            Submit Application
          </Button>

          {status === 'sent' && (
            <p className="contact__success">
              <Icon name="check-badge" size={16} /> Your email client should now open — please send the message to complete your inquiry.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
