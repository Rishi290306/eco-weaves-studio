import React from 'react';
import { Link } from 'react-router-dom';

export default function WhyUs() {
  const pillars = [
    { num: '01', title: '50+ Fabric Selections', desc: 'From micro-mesh to combed cotton, modal, fleece, and jacquard — we stock over 50 fabric varieties for any custom apparel specification.' },
    { num: '02', title: '100% Eco-Friendly Dyes', desc: 'We use non-toxic, skin-safe colors free from harsh chemicals, protecting both your wearers and the environment.' },
    { num: '03', title: 'Strict Zero-Defect Policy', desc: 'Every garment undergoes rigorous quality inspection — guaranteed 100% free from odor, stains, or stitching defects.' },
    { num: '04', title: 'In-House Skilled Designers', desc: 'Our expert design team converts your ideas into high-definition digital proofs, logo embroidery, or sublimated patterns.' },
    { num: '05', title: 'Direct Factory Pricing', desc: 'By eliminating middleman markups, we deliver luxury-grade finishing at reasonable and affordable pricing.' },
    { num: '06', title: 'Fast Turnaround & Bulk Shipping', desc: 'Streamlined production lines ensure on-time delivery for sports marathons, school sessions, and political rallies.' }
  ];

  return (
    <div>
      <section className="page-hero">
        <div className="container">
          <span className="section-subtitle"><i className="fa-solid fa-award"></i> UNMATCHED COMPETITIVE ADVANTAGE</span>
          <h1 className="section-title">Why Choose <span className="gold-gradient-text">Eco Weaves Studio</span></h1>
          <p className="section-desc">Established March 7, 2025. Our commitment to fabric selection, non-toxic eco dyes, and flawless stitching sets us apart.</p>
          <div className="title-underline"></div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="grid-3">
            {pillars.map((p, idx) => (
              <div key={idx} className="glass-card" style={{ padding: '2.2rem', position: 'relative' }}>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '3.5rem', fontWeight: 900, color: 'rgba(212, 175, 55, 0.15)', position: 'absolute', top: '1rem', right: '1.5rem', lineHeight: 1 }}>
                  {p.num}
                </span>
                <h3 style={{ fontSize: '1.35rem', color: 'var(--gold-light)', marginBottom: '0.75rem' }}>{p.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.65 }}>{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center" style={{ marginTop: '3.5rem' }}>
            <Link to="/contact" className="btn btn-gold btn-lg">
              <i className="fa-solid fa-paper-plane"></i> Start Your Custom Order With Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
