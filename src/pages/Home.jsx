import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import { company } from '../data/company.js';
import { services } from '../data/services.js';
import { technologies, whyChooseUs } from '../data/technologies.js';
import './Home.css';

/**
 * Landing page: hero, intro, featured services, why choose us and tech stack.
 */
function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero__overlay">
          <div className="container hero__content">
            <span className="hero__badge">🇵🇰 Headquartered in Lahore, Pakistan</span>
            <h1>{company.tagline}</h1>
            <p>
              We design and develop web platforms, mobile apps and AI-powered solutions that help
              startups and enterprises grow — delivered by a passionate team of 40+ engineers.
            </p>
            <div className="hero__actions">
              <Link to="/contact" className="btn btn--primary">
                Start Your Project
              </Link>
              <Link to="/projects" className="btn btn--outline">
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Short introduction */}
      <section className="section">
        <div className="container intro">
          <SectionHeading
            eyebrow="Who We Are"
            title="Your Technology Partner in Pakistan"
            subtitle={company.shortDescription}
          />
          <div className="intro__cta">
            <Link to="/about" className="btn btn--primary">
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Featured services */}
      <section className="section section--gray">
        <div className="container">
          <SectionHeading
            eyebrow="What We Do"
            title="Our Core Services"
            subtitle="Three specialities, one goal: software that actually moves your business forward."
          />
          <div className="grid-3">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="What Makes Nexovate Different"
            subtitle="We combine world-class engineering with honest communication and fair pricing."
          />
          <div className="grid-4">
            {whyChooseUs.map((reason) => (
              <div key={reason.id} className="card why-card">
                <span className="why-card__icon">{reason.icon}</span>
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="section section--gray">
        <div className="container">
          <SectionHeading
            eyebrow="Our Toolbox"
            title="Technologies We Work With"
            subtitle="Modern, battle-tested tools chosen for reliability and speed."
          />
          <div className="tech-grid">
            {technologies.map((tech) => (
              <div key={tech.id} className="tech-item">
                <span className="tech-item__icon">{tech.icon}</span>
                <span className="tech-item__name">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="cta-strip">
        <div className="container cta-strip__inner">
          <h2>Have an idea? Let&apos;s build it together.</h2>
          <Link to="/contact" className="btn btn--primary">
            Get In Touch
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;
