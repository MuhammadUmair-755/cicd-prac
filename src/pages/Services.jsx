import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import { services } from '../data/services.js';
import './Services.css';

/**
 * Services page: detailed cards for each service plus an AI capabilities strip.
 */
function Services() {
  return (
    <>
      <PageHeader
        title="Our Services"
        subtitle="Web, mobile and AI — everything you need to take your product from idea to launch."
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="What We Offer"
            title="Full-Cycle Software Development"
            subtitle="Every engagement includes planning, design, development, testing and post-launch support."
          />
          <div className="grid-3">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* AI capabilities highlight */}
      <section className="section section--gray">
        <div className="container ai-highlight">
          <img
            className="ai-highlight__image"
            src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=900&q=70"
            alt="Abstract artificial intelligence illustration"
            loading="lazy"
          />
          <div className="ai-highlight__text">
            <SectionHeading eyebrow="AI at Nexovate" title="Practical AI, Not Buzzwords" />
            <p>
              We focus on AI that pays for itself. Our team ships production-grade AI features that
              plug into the tools your business already uses:
            </p>
            <ul>
              <li>🤖 <strong>AI Chatbots</strong> — 24/7 customer support in English and Urdu</li>
              <li>⚙️ <strong>Automation</strong> — remove hours of repetitive manual work every week</li>
              <li>🎯 <strong>Recommendation Systems</strong> — show users what they want before they search</li>
              <li>📊 <strong>AI-Powered Dashboards</strong> — forecasts and insights, not just charts</li>
            </ul>
            <Link to="/contact" className="btn btn--primary">
              Discuss an AI Project
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
