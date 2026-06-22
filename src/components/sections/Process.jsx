import './Process.css';
import SectionHeading from '../ui/SectionHeading';
import { processSteps } from '../../data/processSteps';

// ==========================================================================
// PROCESS — numbered timeline. Maps over data/processSteps.js in order.
// ==========================================================================

export default function Process() {
  return (
    <section className="process section" id="process">
      <div className="container">
        <SectionHeading
          eyebrow="The Journey"
          title="How It Works"
          description="A transparent, five-step path from registration to departure — with no hidden steps."
        />

        <div className="process__timeline">
          {processSteps.map((item) => (
            <div key={item.step} className="process__item">
              <div className="process__marker">
                <span className="process__number">{item.step}</span>
              </div>
              <div className="process__content">
                <h3 className="process__title">{item.title}</h3>
                <p className="process__desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
