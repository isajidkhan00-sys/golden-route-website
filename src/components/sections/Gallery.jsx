import './Gallery.css';
import SectionHeading from '../ui/SectionHeading';

// ==========================================================================
// GALLERY — showcases the skilled workforce Golden Route deploys across the
// oil, gas & energy sector. Add/remove an image by editing GALLERY_ITEMS.
// Images live in /public/images and are referenced by absolute path.
// ==========================================================================

const GALLERY_ITEMS = [
  { src: '/images/worker-offshore.png', label: 'Offshore Operations', caption: 'Rig crews & platform technicians' },
  { src: '/images/worker-oilfield.png', label: 'Oilfield Services', caption: 'On-site supervisors & field engineers' },
  { src: '/images/worker-refinery.png', label: 'Refinery & Plant', caption: 'Process & maintenance specialists' },
  { src: '/images/field-offshore-crew.jpg', label: 'Platform Maintenance', caption: 'Certified safety-trained teams' },
  { src: '/images/field-rig-sunset.jpg', label: 'Drilling & Rigs', caption: 'Round-the-clock rig manpower' },
  { src: '/images/field-safety-hose.jpg', label: 'HSE & Safety', caption: 'Fire, safety & emergency response' },
];

export default function Gallery() {
  return (
    <section className="gallery section" id="workforce">
      <div className="container">
        <SectionHeading
          eyebrow="Our Workforce"
          title="Skilled Hands for Oil, Gas & Energy"
          description="We recruit, screen and deploy verified skilled and semi-skilled professionals across offshore platforms, oilfields, refineries and energy plants worldwide."
        />

        <div className="gallery__grid">
          {GALLERY_ITEMS.map((item, i) => (
            <figure
              key={item.src}
              className="gallery__item"
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <img src={item.src} alt={item.label} loading="lazy" />
              <figcaption className="gallery__overlay">
                <span className="gallery__label">{item.label}</span>
                <span className="gallery__caption">{item.caption}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
