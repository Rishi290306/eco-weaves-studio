import React from 'react';
import { Link } from 'react-router-dom';

export default function Services() {
  const servicesList = [
    {
      id: 1,
      title: 'Custom Apparel Manufacturing',
      icon: 'fa-shirt',
      badge: 'CORE SPECIALTY',
      desc: 'Complete manufacturing of Sports T-shirts, Marathon Sandos, Gym Wear, Lowers, School Uniforms, and Corporate Apparel with zero-defect stitching.',
      features: ['Sublimated Sports Wear', 'School & Player Kits', 'Gym & Jogger Lowers', 'Innerwear & Activewear']
    },
    {
      id: 2,
      title: '50+ Varieties Raw Fabric Supply',
      icon: 'fa-layer-group',
      badge: 'ECO FABRICS',
      desc: 'Supply of over 50 varieties of eco-friendly, non-toxic, skin-safe knitted & woven fabrics tailored for sports, fashion, and industrial use.',
      features: ['Polyester Dryfit & Mesh', '100% Organic Cotton', 'Cotton Pique & Honeycomb', 'Fleece & Spandex Blends']
    },
    {
      id: 3,
      title: 'HD Sublimation & Screen Printing',
      icon: 'fa-palette',
      badge: 'CUSTOMIZATION',
      desc: 'High-definition full-body sublimation printing, rubber printing, screen printing, and embroidered logos for sports teams and brand merchandise.',
      features: ['Full Sublimation Prints', 'Player Name & Number Customization', 'High-Density Rubber Prints', 'Precision Embroidery']
    },
    {
      id: 4,
      title: 'Winterwear & Jacket Production',
      icon: 'fa-snowflake',
      badge: 'SEASONAL',
      desc: 'Custom men’s and women’s winter jackets, padded coats, windcheaters, and hoodies manufactured with premium insulation.',
      features: ['Windproof Outer Shells', 'Thermal Quilted Linings', 'Custom Zipper Pullers', 'Water-Resistant Coating']
    },
    {
      id: 5,
      title: 'Home Textiles & Soft Furnishings',
      icon: 'fa-house-chimney',
      badge: 'TEXTILES',
      desc: 'Tailored home and hospitality textile production including kitchen aprons, hotel curtains, cushion covers, and table linen.',
      features: ['Hotel Grade Curtains', 'Custom Printed Aprons', 'Decorative Cushion Covers', 'Heavy-Duty Table Linen']
    },
    {
      id: 6,
      title: 'Wholesale Bulk Supply & Logistics',
      icon: 'fa-truck-fast',
      badge: 'PAN-INDIA',
      desc: 'Dedicated wholesale manufacturing and expedited Pan-India distribution for corporate clients, sports clubs, and retail chains.',
      features: ['Competitive Wholesale Pricing', 'Rigorous Quality Audits', 'Fast Turnaround Times', 'Doorstep Pan-India Shipping']
    }
  ];

  return (
    <div>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <span className="section-subtitle"><i className="fa-solid fa-gears"></i> WHAT WE DO</span>
          <h1 className="section-title">Our Manufacturing <span className="gold-gradient-text">Services</span></h1>
          <p className="section-desc">Established March 7, 2025. Providing end-to-end custom apparel manufacturing, 50+ fabric supply, and textile printing solutions.</p>
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
                  <i className="fa-solid fa-paper-plane"></i> Inquire for Service
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
              <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--gold-light)' }}>Requirement & Design</h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>Share your requirement, fabric preference, and logos.</p>
            </div>

            <div className="glass-card text-center" style={{ padding: '2rem' }}>
              <div style={{ width: '45px', height: '45px', background: 'var(--gold-gradient)', color: '#000', borderRadius: '50%', fontWeight: 700, fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem auto' }}>2</div>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--gold-light)' }}>Fabric & Mockup</h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>Select from 50+ fabric varieties and approve digital mockup.</p>
            </div>

            <div className="glass-card text-center" style={{ padding: '2rem' }}>
              <div style={{ width: '45px', height: '45px', background: 'var(--gold-gradient)', color: '#000', borderRadius: '50%', fontWeight: 700, fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem auto' }}>3</div>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--gold-light)' }}>Factory Production</h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>Precision cutting, stitching, and HD sublimation printing.</p>
            </div>

            <div className="glass-card text-center" style={{ padding: '2rem' }}>
              <div style={{ width: '45px', height: '45px', background: 'var(--gold-gradient)', color: '#000', borderRadius: '50%', fontWeight: 700, fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem auto' }}>4</div>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--gold-light)' }}>Quality Check & Dispatch</h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>Zero-defect audit and express Pan-India shipping.</p>
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
