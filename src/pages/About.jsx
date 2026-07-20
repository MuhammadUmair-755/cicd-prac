import PageHeader from '../components/PageHeader.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { stats } from '../data/stats.js';
import './About.css';

const coreValues = [
  { id: 1, icon: '💡', title: 'Innovation', text: 'We stay curious and keep learning so our clients always get modern solutions.' },
  { id: 2, icon: '🤝', title: 'Integrity', text: 'Honest estimates, transparent progress and no hidden surprises — ever.' },
  { id: 3, icon: '⭐', title: 'Excellence', text: 'We sweat the details, because quality is what people remember.' },
  { id: 4, icon: '🌍', title: 'Global Mindset', text: 'Rooted in Pakistan, building for the world with international standards.' },
];

/**
 * About page: company story, mission, vision, core values and statistics.
 */
function About() {
  return (
    <>
      <PageHeader
        title="About Nexovate Technologies"
        subtitle="A software house from Lahore, Pakistan — building for the world since 2018."
      />

      {/* Company story */}
      <section className="section">
        <div className="container about-story">
          <div className="about-story__text">
            <SectionHeading eyebrow="Our Story" title="From a Small Room to a Global Team" />
            <p>
              Nexovate Technologies started in 2018 in a small co-working space in Lahore with just
              three developers and one borrowed whiteboard. Our first project — a billing system for
              a local pharmacy — taught us that great software is not about fancy technology, but
              about solving real problems for real people.
            </p>
            <p>
              Eight years later, we are a team of 40+ engineers, designers and product thinkers
              serving clients across Pakistan, the Middle East, Europe and North America. What has
              not changed is our habit of treating every project like it is our first: with full
              attention, honest communication and pride in our craft.
            </p>
          </div>
          <img
            className="about-story__image"
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=70"
            alt="Nexovate team collaborating in the office"
            loading="lazy"
          />
        </div>
      </section>

      {/* Mission & vision */}
      <section className="section section--gray">
        <div className="container mission-vision">
          <div className="card mv-card">
            <span className="mv-card__icon">🎯</span>
            <h3>Our Mission</h3>
            <p>
              To empower businesses of every size with reliable, affordable and beautifully crafted
              software — while creating world-class career opportunities for tech talent in
              Pakistan.
            </p>
          </div>
          <div className="card mv-card">
            <span className="mv-card__icon">🔭</span>
            <h3>Our Vision</h3>
            <p>
              To become South Asia&apos;s most trusted software partner, known globally for
              engineering excellence, ethical business and products that make everyday life easier.
            </p>
          </div>
        </div>
      </section>

      {/* Core values */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="What Drives Us"
            title="Our Core Values"
            subtitle="Four principles guide every line of code we write and every promise we make."
          />
          <div className="grid-4">
            {coreValues.map((value) => (
              <div key={value.id} className="card value-card">
                <span className="value-card__icon">{value.icon}</span>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="stats-band">
        <div className="container stats-band__grid">
          {stats.map((stat) => (
            <div key={stat.id} className="stats-band__item">
              <span className="stats-band__value">{stat.value}</span>
              <span className="stats-band__label">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Office */}
      <section className="section">
        <div className="container about-office">
          <img
            className="about-office__image"
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=70"
            alt="Nexovate Technologies office space"
            loading="lazy"
          />
          <div className="about-office__text">
            <SectionHeading eyebrow="Where We Work" title="Our Home in Lahore" />
            <p>
              Our headquarters sits in the heart of Lahore&apos;s technology district at Arfa
              Software Technology Park. It is an open, sunlit space designed for deep work and loud
              laughter — complete with a chai corner that fuels most of our best ideas.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
