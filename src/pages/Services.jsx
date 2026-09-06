import React from 'react';
import { Link } from 'react-router-dom';

export default function Services() {
  const mainCategories = [
    {
      id: 1,
      title: 'Custom T-Shirts',
      icon: 'fa-shirt',
      badge: 'CORE CATEGORY',
      desc: 'Customized Everyday T-Shirts, Group T-Shirts, Event Apparel, Sports Dry-Fit Tees, Biker & Riding Club Tees, Staff Polos, and Promotional T-Shirts.',
      features: [
        '100% Bio-Washed Combed Cotton',
        'Micro-Pique Dry-Fit Sports Mesh',
        'HD Sublimation, Screen & Vinyl Printing',
        'Bulk Event & Group Customization',
        '50+ Fabric Color Options'
      ]
    },
    {
      id: 2,
      title: 'Cushions & Covers',
      icon: 'fa-couch',
      badge: 'CORE CATEGORY',
      desc: 'Custom printed decorative cushion covers, luxury velvet cushions, self-photo printed pillows, and corporate lounge branding cushions.',
      features: [
        'Heavy Duty Jacquard & Canvas Weaves',
        'Rich Plush Velvet Fabrics',
        'HD Digital Photo Sublimation',
        'Hidden Zipper Enclosure',
        'Custom Square & Rectangular Sizes'
      ]
    }
  ];

  return (
    <div>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <span className="section-subtitle"><i className="fa-solid fa-layer-group"></i> OUR PRODUCTS & SERVICES</span>
          <h1 className="section-title">Custom <span className="gold-gradient-text">T-Shirts & Cushions</span></h1>
          <p className="section-desc">Your Style. Your Design. Our Craft. Think it. Customise it. Wear it. Specialized manufacturing of custom T-Shirts and Cushions.</p>
          <div className="title-underline"></div>
        </div>
      </section>

      {/* 2 Main Categories Section */}
      <section className="section-padding">
        <div className="container">
          <div className="grid-2" style={{ gap: '3rem' }}>
            {mainCategories.map((cat) => (
              <div key={cat.id} className="glass-card" style={{ padding: '3rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <div style={{ width: '65px', height: '65px', background: 'rgba(212, 175, 55, 0.15)', border: '1px solid var(--border-gold)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold-bright)', fontSize: '1.8rem' }}>
                      <i className={`fa-solid ${cat.icon}`}></i>
                    </div>
                    <span className="card-badge" style={{ position: 'static' }}>{cat.badge}</span>
                  </div>

                  <h3 style={{ fontSize: '2rem', color: 'var(--gold-light)', marginBottom: '1rem', fontFamily: 'var(--font-serif)' }}>
                    {cat.title}
                  </h3>

                  <p style={{ color: 'var(--text-muted)', fontSize: '1.02rem', lineHeight: 1.7, marginBottom: '1.75rem' }}>
                    {cat.desc}
                  </p>

                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2.5rem 0', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {cat.features.map((feat, idx) => (
                      <li key={idx} style={{ fontSize: '0.95rem', color: 'var(--text-light)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <i className="fa-solid fa-circle-check" style={{ color: 'var(--gold-bright)', fontSize: '0.88rem' }}></i>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link to="/contact" className="btn btn-gold btn-lg btn-block">
                  <i className="fa-solid fa-paper-plane"></i> Order Custom {cat.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Production Process Workflow */}
      <section style={{ background: 'linear-gradient(180deg, rgba(5, 24, 18, 0.95) 0%, rgba(3, 13, 10, 0.98) 100%)', padding: '5rem 0', borderTop: '1px solid var(--border-gold)', borderBottom: '1px solid var(--border-gold)' }}>
        <div className="container text-center">
          <span className="section-subtitle"><i className="fa-solid fa-list-check"></i> SIMPLE PROCESS</span>
          <h2 className="section-title">How To Order Your <span className="gold-gradient-text">Custom Products</span></h2>
          <p className="section-desc">Share your design, logo, colors, or ideas with us — we’ll turn them into stylish, customised products made for you.</p>
          <div className="title-underline"></div>

          <div className="grid-4" style={{ marginTop: '3.5rem', gap: '1.5rem' }}>
            <div className="glass-card text-center" style={{ padding: '2rem' }}>
              <div style={{ width: '45px', height: '45px', background: 'var(--gold-gradient)', color: '#000', borderRadius: '50%', fontWeight: 700, fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem auto' }}>1</div>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--gold-light)' }}>1. Choose Category</h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>Select between Custom T-Shirts or Decorative Cushions.</p>
            </div>

            <div className="glass-card text-center" style={{ padding: '2rem' }}>
              <div style={{ width: '45px', height: '45px', background: 'var(--gold-gradient)', color: '#000', borderRadius: '50%', fontWeight: 700, fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem auto' }}>2</div>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--gold-light)' }}>2. Share Your Design</h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>Send your logo, photo, artwork, or colors to our team.</p>
            </div>

            <div className="glass-card text-center" style={{ padding: '2rem' }}>
              <div style={{ width: '45px', height: '45px', background: 'var(--gold-gradient)', color: '#000', borderRadius: '50%', fontWeight: 700, fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem auto' }}>3</div>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--gold-light)' }}>3. Approve Mockup</h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>Review your custom digital preview and fabric selection.</p>
            </div>

            <div className="glass-card text-center" style={{ padding: '2rem' }}>
              <div style={{ width: '45px', height: '45px', background: 'var(--gold-gradient)', color: '#000', borderRadius: '50%', fontWeight: 700, fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem auto' }}>4</div>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--gold-light)' }}>4. Doorstep Delivery</h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>Fast factory production and Pan-India doorstep shipping.</p>
            </div>
          </div>

          <div style={{ marginTop: '3.5rem' }}>
            <Link to="/contact" className="btn btn-gold btn-lg">
              <i className="fa-solid fa-paper-plane"></i> Get Started Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
