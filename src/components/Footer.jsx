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
              <span className="brand-sub">YOUR FASHION. YOUR VISION. OUR CRAFT.</span>
            </div>
          </div>
          <p className="footer-desc">
            At Eco Weaves Studio, we create customised fashion T-Shirts and decorative Cushions using eco-friendly fabrics. You bring your ideas, and we bring them to life.
          </p>
          <p className="footer-email">
            <i className="fa-solid fa-location-dot gold-icon"></i> Sec 37-C, Gurugram, Pincode 122006
          </p>
          <p className="footer-email" style={{ marginTop: '0.4rem' }}>
            <i className="fa-solid fa-phone gold-icon"></i> <a href="tel:+918851589090">+91 8851589090</a>
          </p>
          <p className="footer-email" style={{ marginTop: '0.4rem' }}>
            <i className="fa-solid fa-envelope gold-icon"></i> <a href="mailto:ecom.ravi@yahoo.com">ecom.ravi@yahoo.com</a>
          </p>
        </div>

        <div className="footer-col links-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us & Leadership</Link></li>
            <li><Link to="/products">Product Range</Link></li>
            <li><Link to="/services">Services & Customization</Link></li>
            <li><Link to="/contact">Contact Head Office</Link></li>
          </ul>
        </div>

        <div className="footer-col products-col">
          <h4>Our 2 Core Categories</h4>
          <ul>
            <li><Link to="/products">Custom T-Shirts</Link></li>
            <li><Link to="/products">Group & Event T-Shirts</Link></li>
            <li><Link to="/products">Sports & Athletic T-Shirts</Link></li>
            <li><Link to="/products">Custom Printed Cushion Covers</Link></li>
            <li><Link to="/products">Velvet Luxury Cushion Covers</Link></li>
            <li><Link to="/products">Self-Photo & Graphic Cushions</Link></li>
          </ul>
        </div>

        <div className="footer-col eco-col">
          <div className="glass-card" style={{ padding: '1.5rem', textAlign: 'center' }}>
            <i className="fa-solid fa-leaf" style={{ fontSize: '2.2rem', color: '#4CAF50', marginBottom: '0.75rem' }}></i>
            <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Sustainable & Custom</h4>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              Bio-washed cotton, heavy Jacquard weaves, non-toxic eco dyes & zero-defect craftsmanship.
            </p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container bottom-flex">
          <p>&copy; 2026 Eco Weaves Studio LLP. All Rights Reserved.</p>
          <p>Established March 7, 2025 • Gurugram, India</p>
        </div>
      </div>
    </footer>
  );
}
