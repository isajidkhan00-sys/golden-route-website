import './FAQ.css';
import SectionHeading from '../ui/SectionHeading';
import Icon from '../ui/Icon';
import { faqs } from '../../data/faqs';
import { useAccordion } from '../../hooks/useAccordion';

// ==========================================================================
// FAQ — accordion list. Maps over data/faqs.js; add a question there only.
// ==========================================================================

export default function FAQ() {
  const { toggle, isOpen } = useAccordion(faqs[0]?.id ?? null);

  return (
    <section className="faq section" id="faq">
      <div className="container faq__container">
        <SectionHeading eyebrow="Common Questions" title="Frequently Asked Questions" />

        <div className="faq__list">
          {faqs.map((item) => {
            const open = isOpen(item.id);
            return (
              <div key={item.id} className={`faq__item ${open ? 'faq__item--open' : ''}`}>
                <button
                  className="faq__question"
                  onClick={() => toggle(item.id)}
                  aria-expanded={open}
                >
                  <span>{item.question}</span>
                  <Icon name="chevron-down" size={20} className="faq__chevron" />
                </button>
                <div className="faq__answer-wrap">
                  <p className="faq__answer">{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
