import { Link } from 'react-router-dom';
import { company } from '../data/company.js';
import './Footer.css';

const quickLinks = [
  { path: '/about', label: 'About Us' },
  { path: '/services', label: 'Services' },
  { path: '/projects', label: 'Projects' },
  { path: '/team', label: 'Team' },
  { path: '/contact', label: 'Contact' },
];

/**
 * Site footer: logo, description, quick links, contact info and socials.
 */
function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__col footer__col--brand">
          <Link to="/" className="footer__logo">
            Nexovate<span>Tech</span>
          </Link>
          <p>{company.shortDescription}</p>
          <div className="footer__socials">
            {company.socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="footer__social"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>

        <div className="footer__col">
          <h4>Quick Links</h4>
          <ul>
            {quickLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4>Contact</h4>
          <ul>
            <li>{company.address}</li>
            <li>{company.phone}</li>
            <li>{company.email}</li>
            <li>{company.workingHours}</li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <p>
          © {year} {company.name}. All rights reserved. Proudly made in Pakistan 🇵🇰
        </p>
      </div>
    </footer>
  );
}

export default Footer;
