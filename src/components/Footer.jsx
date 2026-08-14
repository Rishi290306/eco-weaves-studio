import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/logo.png';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-col brand-col">
          <div className="brand-logo" style={{ marginBottom: '1rem' }}>
            <img src={logoImg} alt="Eco Weaves Studio LLP Logo" style={{ width: '42px', height: '42px', objectFit: 'cover', borderRadius: '50%' }} />
            <div className="brand-text">
              <span className="brand-name">ECO WEAVES STUDIO LLP</span>
              <span className="brand-sub">DESIGN. SUSTAIN. INSPIRE.</span>
            </div>
          </div>
          <p className="footer-desc">
            Established 7th March 2025. Bringing high-quality, durable, stylish & eco-friendly clothing to the market at an affordable price range.
          </p>
          <p className="footer-email">
            <i className="fa-solid fa-envelope gold-icon"></i> <a href="mailto:ECOM.RAVI@YAHOO.COM">ECOM.RAVI@YAHOO.COM</a>
          </p>
        </div>

        <div className="footer-col links-col">
          <h4>Navigation</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/fabrics">50+ Fabric Varieties</Link></li>
            <li><Link to="/products">Product Catalogue</Link></li>
            <li><Link to="/quote-estimator">Price Estimator</Link></li>
            <li><Link to="/sample-request">Free Fabric Swatches</Link></li>
            <li><Link to="/contact">Contact & Map</Link></li>
          </ul>
        </div>

        <div className="footer-col products-col">
          <h4>Product Range</h4>
          <ul>
            <li><Link to="/products">Sports T-Shirts & Sandos</Link></li>
            <li><Link to="/products">Custom & Photo Printed Tees</Link></li>
            <li><Link to="/products">Team Cricket Uniforms</Link></li>
            <li><Link to="/products">Gym Wear & Lowers</Link></li>
            <li><Link to="/products">Winter Jackets</Link></li>
            <li><Link to="/products">Curtains & Cushion Covers</Link></li>
          </ul>
        </div>

        <div className="footer-col eco-col">
          <div className="glass-card" style={{ padding: '1.5rem', textAlign: 'center' }}>
            <i className="fa-solid fa-leaf" style={{ fontSize: '2.2rem', color: '#4CAF50', marginBottom: '0.75rem' }}></i>
            <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>100% Eco-Friendly</h4>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              Non-toxic chemicals, skin-safe colors, and zero-defect fabric craftsmanship.
            </p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container bottom-flex">
          <p>&copy; 2026 Eco Weaves Studio LLP. All Rights Reserved.</p>
          <p>Established March 7, 2025 • Quality Guaranteed</p>
        </div>
      </div>
    </footer>
  );
}
