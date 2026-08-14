import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header className={`glass-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        {/* Brand Logo */}
        <Link to="/" className="brand-logo" onClick={closeMobile}>
          <div className="logo-img-wrap">
            <img src="/logo.png" alt="Eco Weaves Studio LLP Logo" className="logo-img" />
          </div>
          <div className="brand-text">
            <span className="brand-name">ECO WEAVES</span>
            <span className="brand-sub">STUDIO LLP</span>
          </div>
        </Link>

        {/* Multi-Page Navigation Menu */}
        <nav className={`nav-menu ${mobileOpen ? 'active' : ''}`}>
          <ul className="nav-links">
            <li>
              <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMobile} end>
                <i className="fa-solid fa-house"></i> Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMobile}>
                <i className="fa-solid fa-leaf"></i> About
              </NavLink>
            </li>
            <li>
              <NavLink to="/fabrics" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMobile}>
                <i className="fa-solid fa-scroll"></i> Fabrics
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMobile}>
                <i className="fa-solid fa-shirt"></i> Products
              </NavLink>
            </li>
            <li>
              <NavLink to="/quote-estimator" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMobile}>
                <i className="fa-solid fa-calculator"></i> Price Estimator
              </NavLink>
            </li>
            <li>
              <NavLink to="/sample-request" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMobile}>
                <i className="fa-solid fa-box-open"></i> Sample Swatches
              </NavLink>
            </li>
            <li>
              <NavLink to="/why-us" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMobile}>
                <i className="fa-solid fa-award"></i> Why Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/gallery" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMobile}>
                <i className="fa-solid fa-images"></i> Gallery
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMobile}>
                <i className="fa-solid fa-envelope"></i> Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="header-actions">
          <Link to="/contact" className="btn btn-gold btn-sm btn-glow">
            <i className="fa-solid fa-paper-plane"></i> Get Quote
          </Link>
          <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle navigation">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </div>
    </header>
  );
}
