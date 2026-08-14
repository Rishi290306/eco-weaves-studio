import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductModal({ product, onClose }) {
  if (!product) return null;

  const waMsg = encodeURIComponent(`Hi Eco Weaves Studio, I want to inquire about ${product.name}. Please share fabric samples and factory pricing.`);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content glass-card" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        <div className="modal-grid">
          <div className="modal-img-box">
            <img src={product.img} alt={product.name} />
          </div>
          <div className="modal-details">
            <span className="card-badge" style={{ position: 'static', display: 'inline-block', marginBottom: '0.75rem' }}>
              {product.categoryName}
            </span>
            <h2 style={{ fontSize: '2.2rem', color: 'var(--gold-light)', marginBottom: '0.75rem' }}>{product.name}</h2>
            <p style={{ fontWeight: 600, color: 'var(--gold-bright)', marginBottom: '1.25rem', fontSize: '1rem', letterSpacing: '0.5px' }}>
              <i className="fa-solid fa-tag gold-icon" style={{ marginRight: '0.4rem' }}></i> Direct Factory Quote Available
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginBottom: '1.75rem', lineHeight: 1.7 }}>
              {product.desc}
            </p>

            <div style={{ background: 'rgba(212, 175, 55, 0.08)', border: '1px solid var(--border-gold)', padding: '1.25rem', borderRadius: '12px', marginBottom: '1.75rem' }}>
              <h4 style={{ fontSize: '1rem', marginBottom: '0.6rem' }}><i className="fa-solid fa-circle-check gold-icon"></i> Fabric Specifications</h4>
              <ul>
                {product.specs.map((s, idx) => (
                  <li key={idx} style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                    <i className="fa-solid fa-check gold-icon" style={{ marginRight: '0.5rem' }}></i> {s}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href={`https://wa.me/?text=${waMsg}`} target="_blank" rel="noopener noreferrer" className="btn btn-gold">
                <i className="fa-brands fa-whatsapp"></i> Inquire on WhatsApp
              </a>
              <Link to={`/product/${product.id}`} className="btn btn-glass" onClick={onClose}>
                <i className="fa-solid fa-sliders"></i> Custom Quote Builder
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
