import React, { useState } from 'react';

export default function Gallery() {
  const [activeImg, setActiveImg] = useState(null);

  const galleryItems = [
    { title: 'Eco-Dyeing Process', img: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1200&auto=format&fit=crop' },
    { title: 'Precision Sublimation Printing', img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop' },
    { title: 'Sports T-Shirts Finishing', img: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1200&auto=format&fit=crop' },
    { title: 'Team Cricket Uniform Kits', img: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1200&auto=format&fit=crop' },
    { title: 'Custom Cushion Covers', img: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?q=80&w=1200&auto=format&fit=crop' },
    { title: 'Winter Jacket Tailoring', img: 'https://images.unsplash.com/photo-1548883354-7622d03aca27?q=80&w=1200&auto=format&fit=crop' },
  ];

  return (
    <div>
      <section className="page-hero">
        <div className="container">
          <span className="section-subtitle"><i className="fa-solid fa-camera"></i> VISUAL STUDIO TOUR</span>
          <h1 className="section-title">Studio <span className="gold-gradient-text">Gallery & Craftsmanship</span></h1>
          <p className="section-desc">Sneak peek into our fabric selection, eco-dyeing process, stitching precision, and finished client apparel.</p>
          <div className="title-underline"></div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="grid-3">
            {galleryItems.map((item, idx) => (
              <div
                key={idx}
                className="glass-card"
                style={{ height: '280px', padding: 0, cursor: 'pointer', overflow: 'hidden', position: 'relative' }}
                onClick={() => setActiveImg(item.img)}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }}
                />
                <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', background: 'linear-gradient(180deg, transparent 0%, rgba(4, 18, 14, 0.95) 100%)', padding: '1.25rem' }}>
                  <i className="fa-solid fa-magnifying-glass-plus gold-icon" style={{ fontSize: '1.2rem', marginBottom: '0.3rem' }}></i>
                  <h4 style={{ fontSize: '1.1rem', color: 'var(--text-light)' }}>{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeImg && (
        <div
          style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.92)', zIndex: 3000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          onClick={() => setActiveImg(null)}
        >
          <button style={{ position: 'absolute', top: '2rem', right: '2rem', background: 'none', border: 'none', color: 'var(--gold-bright)', fontSize: '2.5rem', cursor: 'pointer' }}>&times;</button>
          <img src={activeImg} alt="Enlarged view" style={{ maxWidth: '90vw', maxHeight: '85vh', border: '2px solid var(--gold-primary)', borderRadius: '10px' }} />
        </div>
      )}
    </div>
  );
}
