import React from 'react';
import { Link } from 'react-router-dom';

export default function Services() {
  const servicesList = [
    {
      id: 1,
      title: 'Custom T-Shirts & Group Apparel',
      icon: 'fa-shirt',
      badge: 'CUSTOM FASHION',
      desc: 'Customized Everyday T-Shirts, Group T-Shirts, Event Apparel, Self-Photo T-Shirts, Bike Riding & Car Riding Club Tees.',
      features: ['100% Bio-Washed Cotton', 'HD Sublimation & Screen Prints', 'Group & Fest Customization', '50+ Fabric Color Selection']
    },
    {
      id: 2,
      title: 'Sportswear & Activewear',
      icon: 'fa-person-running',
      badge: 'PERFORMANCE',
      desc: 'High-performance Gym Sandos, Sports T-Shirts, Shorts, Track Pants, Marathon T-Shirts, and 360° Sublimated Cricket Jerseys.',
      features: ['Micro-Pique Dry-Fit Mesh', '4-Way Stretch Spandex', 'Squad Player Names & Numbers', 'Odor-Free & Fast Drying']
    },
    {
      id: 3,
      title: 'Staff & Uniform T-Shirts',
      icon: 'fa-user-tie',
      badge: 'CORPORATE',
      desc: 'Professional corporate uniforms, hotel staff polos, school sports kits, and executive team wear with precision logo embroidery.',
      features: ['Stain-Resistant Cotton Pique', 'Precision Logo Embroidery', 'Consistent Brand Colorway', 'High-Durability Wash Guarantee']
    },
    {
      id: 4,
      title: 'Advertising Apparel, Flags & Bags',
      icon: 'fa-bullhorn',
      badge: 'PROMOTIONAL',
      desc: 'High-volume Advertising T-Shirts, Advertising Flags, Teardrop Banners, Advertising Bags, and Gym Duffel Bags for marketing campaigns.',
      features: ['Weatherproof Outdoor Flags', 'Heavy-Duty Canvas Gym Bags', 'High-Visibility Promo Printing', 'Bulk Quantity Lead Discounts']
    },
    {
      id: 5,
      title: 'Corporate & Event Merchandise',
      icon: 'fa-gift',
      badge: 'MERCHANDISE',
      desc: 'Custom corporate merchandise kits, aprons, tote bags, and personalized accessories tailored for corporate gifting and brand promotion.',
      features: ['Custom Logo Gifting Kits', 'Eco-Friendly Fabric Base', 'Stain-Resistant Chef Aprons', 'Pan-India Bulk Shipping']
    },
    {
      id: 6,
      title: '50+ Varieties Eco Raw Fabric Supply',
      icon: 'fa-layer-group',
      badge: 'FABRIC SUPPLY',
      desc: 'Direct factory supply of over 50 varieties of eco-friendly, non-toxic knitted & woven raw fabrics for textile manufacturers and designers.',
      features: ['Polyester Dry-Fit & Mesh', '100% Organic Combed Cotton', '4-Way Stretch Spandex', 'Thermal Fleece & Microfiber']
    }
  ];

  return (
    <div>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <span className="section-subtitle"><i className="fa-solid fa-gears"></i> WHAT WE MAKE</span>
          <h1 className="section-title">Manufacturing & <span className="gold-gradient-text">Custom Services</span></h1>
          <p className="section-desc">Your Style. Your Design. Our Craft. Share your design, logo, colors, or ideas — we turn them into custom products made for you.</p>
          <div className="title-underline"></div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container">
          <div className="grid-3" style={{ gap: '2.5rem' }}>
            {servicesList.map((service) => (
              <div key={service.id} className="glass-card" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <div style={{ width: '60px', height: '60px', background: 'rgba(212, 175, 55, 0.15)', border: '1px solid var(--border-gold)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold-bright)', fontSize: '1.6rem' }}>
                      <i className={`fa-solid ${service.icon}`}></i>
                    </div>
                    <span className="card-badge" style={{ position: 'static' }}>{service.badge}</span>
                  </div>

                  <h3 style={{ fontSize: '1.6rem', color: 'var(--gold-light)', marginBottom: '1rem', fontFamily: 'var(--font-serif)' }}>
                    {service.title}
                  </h3>

                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                    {service.desc}
                  </p>

                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    {service.features.map((feat, idx) => (
                      <li key={idx} style={{ fontSize: '0.9rem', color: 'var(--text-light)', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                        <i className="fa-solid fa-circle-check" style={{ color: 'var(--gold-bright)', fontSize: '0.8rem' }}></i>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link to="/contact" className="btn btn-gold btn-sm btn-block">
                  <i className="fa-solid fa-paper-plane"></i> Inquire for Custom Order
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Workflow Section */}
      <section style={{ background: 'linear-gradient(180deg, rgba(5, 24, 18, 0.95) 0%, rgba(3, 13, 10, 0.98) 100%)', padding: '5rem 0', borderTop: '1px solid var(--border-gold)', borderBottom: '1px solid var(--border-gold)' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="section-subtitle"><i className="fa-solid fa-list-check"></i> HOW WE WORK</span>
            <h2 className="section-title">Our Production <span className="gold-gradient-text">Workflow</span></h2>
            <p className="section-desc">From initial requirement to doorstep delivery, we ensure 100% zero-defect quality control.</p>
            <div className="title-underline"></div>
          </div>

          <div className="grid-4" style={{ marginTop: '3.5rem', gap: '1.5rem' }}>
            <div className="glass-card text-center" style={{ padding: '2rem' }}>
              <div style={{ width: '45px', height: '45px', background: 'var(--gold-gradient)', color: '#000', borderRadius: '50%', fontWeight: 700, fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem auto' }}>1</div>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--gold-light)' }}>Share Your Idea</h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>Share your design, logo, colors, or specific requirement with us.</p>
            </div>

            <div className="glass-card text-center" style={{ padding: '2rem' }}>
              <div style={{ width: '45px', height: '45px', background: 'var(--gold-gradient)', color: '#000', borderRadius: '50%', fontWeight: 700, fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem auto' }}>2</div>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--gold-light)' }}>Fabric & Mockup</h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>Select from 50+ fabric varieties and approve your digital mockup.</p>
            </div>

            <div className="glass-card text-center" style={{ padding: '2rem' }}>
              <div style={{ width: '45px', height: '45px', background: 'var(--gold-gradient)', color: '#000', borderRadius: '50%', fontWeight: 700, fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem auto' }}>3</div>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--gold-light)' }}>Precision Crafting</h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>Custom cutting, stitching, embroidery, and HD printing.</p>
            </div>

            <div className="glass-card text-center" style={{ padding: '2rem' }}>
              <div style={{ width: '45px', height: '45px', background: 'var(--gold-gradient)', color: '#000', borderRadius: '50%', fontWeight: 700, fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem auto' }}>4</div>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--gold-light)' }}>Quality Audit & Delivery</h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>Zero-defect audit and Pan-India express delivery.</p>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <Link to="/contact" className="btn btn-gold btn-lg">
              <i className="fa-solid fa-paper-plane"></i> Get Started with Eco Weaves
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
