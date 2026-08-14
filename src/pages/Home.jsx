import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS_LIST } from '../data/productsData';
import ProductModal from '../components/ProductModal';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const heroSlides = [
    'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1920&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1920&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=1920&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1920&auto=format&fit=crop'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-slider">
          {heroSlides.map((img, idx) => (
            <div
              key={idx}
              className={`slide ${idx === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
        </div>
        <div className="hero-color-overlay" />

        <div className="container hero-container">
          <div className="hero-content">
            <div className="badge-tag" style={{ background: 'rgba(212, 175, 55, 0.12)', border: '1px solid var(--border-gold)', padding: '0.45rem 1.25rem', borderRadius: '30px', color: 'var(--gold-bright)', fontSize: '0.85rem', display: 'inline-flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.75rem' }}>
              <span style={{ width: '8px', height: '8px', background: 'var(--gold-bright)', borderRadius: '50%', boxShadow: '0 0 8px var(--gold-bright)' }}></span>
              Established 7th March 2025 • Quality Guaranteed
            </div>

            <h1 className="hero-title">
              <span className="gold-gradient-text">ECO WEAVES STUDIO</span>
              <span style={{ display: 'block', fontSize: '1.75rem', fontFamily: 'var(--font-sans)', fontWeight: 400, color: 'var(--text-light)', marginTop: '0.6rem', letterSpacing: '0.5px' }}>
                Where Quality Meets Comfort & Eco-Innovation
              </span>
            </h1>

            <p className="hero-description">
              Delivering superior quality, stylish, durable, and comfortable clothing at an unbeatable affordable price. Crafted with over 50 varieties of eco-friendly, non-toxic fabrics for sports, custom apparel, team uniforms, outer & innerwear.
            </p>

            <div className="hero-buttons">
              <Link to="/products" className="btn btn-gold btn-lg">
                <i className="fa-solid fa-bag-shopping"></i> Explore Products
              </Link>
              <Link to="/services" className="btn btn-glass btn-lg">
                <i className="fa-solid fa-gears"></i> Our Services
              </Link>
            </div>

            <div className="hero-highlights">
              <div className="highlight-item">
                <i className="fa-solid fa-shield-halved gold-icon"></i>
                <span>Zero Defects Guarantee</span>
              </div>
              <div className="highlight-item">
                <i className="fa-solid fa-layer-group gold-icon"></i>
                <span>50+ Fabric Varieties</span>
              </div>
              <div className="highlight-item">
                <i className="fa-solid fa-droplet gold-icon"></i>
                <span>100% Eco-Friendly Dyes</span>
              </div>
            </div>
          </div>

          {/* Hero Featured Card */}
          <div className="hero-card-wrap">
            <div className="glass-card hero-glass-card">
              <div className="card-badge">DIRECT FACTORY QUALITY</div>
              <div className="card-image-wrap">
                <img src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=800&auto=format&fit=crop" alt="Featured T-shirt" />
              </div>
              <div className="card-body">
                <h3 style={{ fontSize: '1.4rem', color: 'var(--gold-light)', marginBottom: '0.6rem' }}>
                  Custom Apparel & Uniforms
                </h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', marginBottom: '1.25rem', lineHeight: 1.6 }}>
                  Sports T-shirts, Team Uniforms, Marathon Sandos, Cushion Covers, Winterwear & More.
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(212, 175, 55, 0.15)', paddingTop: '1rem' }}>
                  <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--gold-bright)' }}>Factory Direct Supply</span>
                  <Link to="/services" style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-light)' }}>
                    Learn More <i className="fa-solid fa-arrow-right" style={{ marginLeft: '0.3rem' }}></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Dots */}
        <div className="slider-dots">
          {heroSlides.map((_, idx) => (
            <span
              key={idx}
              className={`dot ${idx === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(idx)}
            />
          ))}
        </div>
      </section>

      {/* Live Stats Banner */}
      <section className="stats-banner">
        <div className="container stats-grid">
          <div className="stat-box">
            <div className="stat-number">50+</div>
            <div className="stat-label">Fabric Varieties</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-box">
            <div className="stat-number">100%</div>
            <div className="stat-label">Eco-Friendly Dyes</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-box">
            <div className="stat-number">15+</div>
            <div className="stat-label">Product Lines</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-box">
            <div className="stat-number">0</div>
            <div className="stat-label">Defects Guarantee</div>
          </div>
        </div>
      </section>

      {/* Featured Products Showcase */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-subtitle"><i className="fa-solid fa-crown"></i> TOP SELECTION</span>
            <h2 className="section-title">Featured <span className="gold-gradient-text">Product Lineups</span></h2>
            <p className="section-desc">Hand-crafted apparel and textiles manufactured with zero-defect stitching and non-toxic dyes.</p>
            <div className="title-underline"></div>
          </div>

          <div className="grid-3">
            {PRODUCTS_LIST.slice(0, 6).map((item) => (
              <div key={item.id} className="product-card glass-card">
                <span className="card-badge">{item.badge}</span>
                <div className="product-img-wrap">
                  <img src={item.img} alt={item.name} />
                </div>
                <div className="product-info">
                  <span className="product-cat">{item.categoryName}</span>
                  <h3 className="product-name">{item.name}</h3>
                  <p className="product-desc">{item.desc}</p>
                  <div className="product-meta">
                    <span className="price-est"><i className="fa-solid fa-shield-halved gold-icon" style={{ marginRight: '0.3rem' }}></i> Custom Quote</span>
                    <button className="btn btn-gold btn-sm" onClick={() => setSelectedProduct(item)}>
                      <i className="fa-solid fa-eye"></i> Quick View
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <Link to="/products" className="btn btn-gold btn-lg">
              <i className="fa-solid fa-border-all"></i> View All Product Lines
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Banner CTA */}
      <section style={{ background: 'linear-gradient(180deg, rgba(5, 24, 18, 0.95) 0%, rgba(3, 13, 10, 0.98) 100%)', padding: '5rem 0', borderTop: '1px solid var(--border-gold)', borderBottom: '1px solid var(--border-gold)' }}>
        <div className="container text-center">
          <h2 style={{ fontSize: '2.6rem', marginBottom: '1.25rem' }}>Looking for Custom Bulk Uniforms or Fabric Supply?</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', maxWidth: '750px', margin: '0 auto 2.5rem auto', lineHeight: 1.7 }}>
            Our in-house manufacturing unit converts your requirements into high-definition sublimated apparel and custom eco textiles.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/services" className="btn btn-gold btn-lg">
              <i className="fa-solid fa-gears"></i> Explore Our Services
            </Link>
            <Link to="/contact" className="btn btn-glass btn-lg">
              <i className="fa-solid fa-envelope"></i> Send Direct Inquiry
            </Link>
          </div>
        </div>
      </section>

      {/* Product Detail Modal Popup */}
      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </div>
  );
}
