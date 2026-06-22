import './SectionHeading.css';

// ==========================================================================
// SECTION HEADING — consistent eyebrow + title + optional description
// pattern used at the top of every major section.
// ==========================================================================

export default function SectionHeading({ eyebrow, title, description, align = 'center' }) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      {eyebrow && <span className="section-heading__eyebrow">{eyebrow}</span>}
      <h2 className="section-heading__title">{title}</h2>
      {description && <p className="section-heading__description">{description}</p>}
    </div>
  );
}
