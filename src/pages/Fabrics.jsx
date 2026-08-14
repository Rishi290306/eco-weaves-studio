import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FABRIC_CATEGORIES, FABRICS_LIST } from '../data/productsData';

export default function Fabrics() {
  const [selectedCat, setSelectedCat] = useState('all');

  const filteredFabrics = selectedCat === 'all'
    ? FABRICS_LIST
    : FABRICS_LIST.filter(f => f.category === selectedCat);

  return (
    <div>
      <section className="page-hero">
        <div className="container">
          <span className="section-subtitle"><i className="fa-solid fa-layer-group"></i> MATERIAL EXCELLENCE</span>
          <h1 className="section-title">50+ Varieties of <span className="gold-gradient-text">Comfortable Fabrics</span></h1>
          <p className="section-desc">We offer more than 50 varieties of comfortable fabrics. All our colors and chemicals are completely eco-friendly, ensuring safety and sustainability.</p>
          <div className="title-underline"></div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          {/* Filter Buttons */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
            {FABRIC_CATEGORIES.map(cat => (
              <button
                key={cat.id}
                className={`btn ${selectedCat === cat.id ? 'btn-gold' : 'btn-glass'}`}
                onClick={() => setSelectedCat(cat.id)}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Fabrics Grid */}
          <div className="grid-3">
            {filteredFabrics.map(fabric => (
              <div key={fabric.id} className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
                <div style={{ background: 'rgba(212, 175, 55, 0.15)', border: '1px solid var(--border-gold)', width: '52px', height: '52px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem', color: 'var(--gold-bright)', marginBottom: '1.25rem' }}>
                  <i className="fa-solid fa-scroll"></i>
                </div>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--text-light)', marginBottom: '0.75rem' }}>{fabric.name}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem', flexGrow: 1 }}>{fabric.desc}</p>

                <div style={{ background: 'rgba(4, 18, 14, 0.6)', border: '1px solid var(--border-gold)', padding: '0.85rem', borderRadius: '10px', marginBottom: '1.5rem' }}>
                  <h4 style={{ fontSize: '0.85rem', color: 'var(--gold-light)', marginBottom: '0.4rem' }}>Key Specifications:</h4>
                  <ul style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    {fabric.specs.map((s, idx) => (
                      <li key={idx}><i className="fa-solid fa-check gold-icon" style={{ marginRight: '0.3rem' }}></i> {s}</li>
                    ))}
                  </ul>
                </div>

                <Link to="/sample-request" className="btn btn-gold btn-sm">
                  <i className="fa-solid fa-box-open"></i> Request Swatch Sample
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
