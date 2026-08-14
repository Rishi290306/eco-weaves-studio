import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div>
      {/* Page Header */}
      <section className="page-hero">
        <div className="container">
          <span className="section-subtitle"><i className="fa-solid fa-crown"></i> ESTABLISHED 7TH MARCH 2025</span>
          <h1 className="section-title">About <span className="gold-gradient-text">Eco Weaves Studio LLP</span></h1>
          <p className="section-desc">Delivering high-quality, stylish, durable, and comfortable clothing at a reasonable and affordable price range.</p>
          <div className="title-underline"></div>
        </div>
      </section>

      {/* Main Story Content */}
      <section className="section-padding">
        <div className="container grid-2">
          <div className="glass-card" style={{ padding: '1.25rem' }}>
            <img
              src="https://images.unsplash.com/photo-1604014237800-1c9102c219da?q=80&w=1000&auto=format&fit=crop"
              alt="Fabric Selection & Craftsmanship"
              style={{ width: '100%', height: '420px', objectFit: 'cover', borderRadius: '12px' }}
            />
          </div>

          <div>
            <h2 style={{ fontSize: '2.2rem', lineHeight: 1.25, marginBottom: '1.25rem' }}>
              Redefining Apparel Manufacturing with Utmost Quality Care
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginBottom: '1.25rem', lineHeight: 1.7 }}>
              <strong>Eco Weaves Studio LLP</strong> was established on <strong>7th March 2025</strong> with a clear and uncompromising vision — to bring high-quality, stylish, durable, and comfortable clothing to the market at a reasonable and affordable price range.
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginBottom: '1.5rem', lineHeight: 1.7 }}>
              From the very beginning, our company has focused on selecting fabrics with the utmost care. Every single material is chosen to ensure superior quality — guaranteed free from odor, stains, stitching defects, or any compromise in finishing. Our core goal is to deliver only the best to our valued customers.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '2rem' }}>
              <div className="glass-card" style={{ padding: '1.25rem' }}>
                <i className="fa-solid fa-leaf" style={{ fontSize: '1.8rem', color: '#4CAF50', marginBottom: '0.5rem' }}></i>
                <h4 style={{ fontSize: '1.05rem', color: 'var(--gold-light)', marginBottom: '0.3rem' }}>100% Eco Safety</h4>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Non-toxic, skin-safe colors free from harsh chemicals.</p>
              </div>

              <div className="glass-card" style={{ padding: '1.25rem' }}>
                <i className="fa-solid fa-scissors" style={{ fontSize: '1.8rem', color: 'var(--gold-bright)', marginBottom: '0.5rem' }}></i>
                <h4 style={{ fontSize: '1.05rem', color: 'var(--gold-light)', marginBottom: '0.3rem' }}>Expert Craftsmanship</h4>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Highly skilled designers and modern tailoring infrastructure.</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/fabrics" className="btn btn-gold">
                <i className="fa-solid fa-scroll"></i> Explore 50+ Fabrics
              </Link>
              <a href="mailto:ECOM.RAVI@YAHOO.COM" className="btn btn-glass">
                <i className="fa-solid fa-envelope"></i> Contact Management
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
