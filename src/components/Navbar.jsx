import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { company } from '../data/company.js';
import './Navbar.css';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/services', label: 'Services' },
  { path: '/projects', label: 'Projects' },
  { path: '/team', label: 'Team' },
  { path: '/contact', label: 'Contact' },
];

/**
 * Sticky top navigation bar with a hamburger menu on mobile.
 * NavLink automatically applies the "active" class to the current route.
 */
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="container navbar__inner">
        <Link to="/" className="navbar__logo" onClick={closeMenu}>
          Nexovate<span>Tech</span>
        </Link>

        <button
          className="navbar__toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive ? 'navbar__link navbar__link--active' : 'navbar__link'
                }
                onClick={closeMenu}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <li>
            <a href={`mailto:${company.email}`} className="btn btn--primary navbar__cta">
              Get a Quote
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
