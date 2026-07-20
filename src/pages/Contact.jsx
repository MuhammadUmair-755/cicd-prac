import { useState } from 'react';
import PageHeader from '../components/PageHeader.jsx';
import { company } from '../data/company.js';
import './Contact.css';

/**
 * Contact page: static form (no real submission) plus company contact details.
 * On submit we only prevent the default action and show a thank-you message.
 */
function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Tell us about your project — we usually reply within one business day."
      />

      <section className="section">
        <div className="container contact-grid">
          {/* Contact details */}
          <div className="contact-info">
            <h2>Let&apos;s Talk</h2>
            <p>
              Whether you have a detailed spec or just a rough idea, we would love to hear from
              you. Reach out through the form or any of the channels below.
            </p>
            <ul>
              <li>
                <span className="contact-info__icon">📍</span>
                <div>
                  <strong>Address</strong>
                  <p>{company.address}</p>
                </div>
              </li>
              <li>
                <span className="contact-info__icon">📞</span>
                <div>
                  <strong>Phone</strong>
                  <p>{company.phone}</p>
                </div>
              </li>
              <li>
                <span className="contact-info__icon">✉️</span>
                <div>
                  <strong>Email</strong>
                  <p>{company.email}</p>
                </div>
              </li>
              <li>
                <span className="contact-info__icon">🕒</span>
                <div>
                  <strong>Working Hours</strong>
                  <p>{company.workingHours}</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact form */}
          <div className="card contact-form-card">
            {submitted ? (
              <div className="contact-success">
                <span className="contact-success__icon">✅</span>
                <h3>Thank you! We will contact you soon.</h3>
                <button className="btn btn--primary" onClick={() => setSubmitted(false)}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <h3>Send Us a Message</h3>

                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />

                <button type="submit" className="btn btn--primary">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
