import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <span className="section-subtitle"><i className="fa-solid fa-leaf"></i> OUR BRAND STORY</span>
          <h1 className="section-title">About <span className="gold-gradient-text">Eco Weaves Studio</span></h1>
          <p className="section-desc">Your Fashion. Your Vision. Our Craft. Sustainable, stylish, and customized fashion made your way.</p>
          <div className="title-underline"></div>
        </div>
      </section>

      {/* Brand Vision & Mission Section */}
      <section className="section-padding">
        <div className="container">
          <div className="grid-2" style={{ gap: '3.5rem', alignItems: 'center' }}>
            <div>
              <div className="badge-tag" style={{ background: 'rgba(212, 175, 55, 0.12)', border: '1px solid var(--border-gold)', padding: '0.45rem 1.25rem', borderRadius: '30px', color: 'var(--gold-bright)', fontSize: '0.85rem', display: 'inline-flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
                <i className="fa-solid fa-crown"></i> ESTABLISHED MARCH 7, 2025
              </div>
              <h2 style={{ fontSize: '2.4rem', color: 'var(--gold-light)', marginBottom: '1.25rem', fontFamily: 'var(--font-serif)' }}>
                Your Style. Your Design. Our Craft.
              </h2>
              <p style={{ color: 'var(--text-light)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                At <strong>Eco Weaves Studio LLP</strong>, we create high-quality customised apparel and promotional products tailored to your exact needs. You bring your ideas and personal style, and we bring them to life with our creative suggestions and craftsmanship.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                From everyday fashion to sportswear, event T-shirts, corporate uniforms, advertising flags, and promotional bags, we turn your designs, logos, and colors into stylish, customized products. Because fashion should be unique to you — <em>sustainable, stylish, and made your way.</em>
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/products" className="btn btn-gold btn-lg">
                  <i className="fa-solid fa-shirt"></i> Explore Our Products
                </Link>
                <Link to="/contact" className="btn btn-glass btn-lg">
                  <i className="fa-solid fa-envelope"></i> Contact Head Office
                </Link>
              </div>
            </div>

            <div className="glass-card" style={{ padding: '2.5rem', borderLeft: '4px solid var(--gold-bright)' }}>
              <h3 style={{ fontSize: '1.8rem', color: 'var(--gold-light)', marginBottom: '1.5rem', fontFamily: 'var(--font-serif)' }}>
                Think It. Customise It. Wear It.
              </h3>
              
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <li style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ width: '40px', height: '40px', background: 'rgba(212, 175, 55, 0.15)', border: '1px solid var(--border-gold)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold-bright)', shrink: 0 }}>
                    <i className="fa-solid fa-wand-magic-sparkles"></i>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', color: 'var(--text-light)', marginBottom: '0.2rem' }}>Customized Fashion</h4>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>Share your design, logo, colors, or ideas — we turn them into custom wearables.</p>
                  </div>
                </li>

                <li style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ width: '40px', height: '40px', background: 'rgba(212, 175, 55, 0.15)', border: '1px solid var(--border-gold)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold-bright)', shrink: 0 }}>
                    <i className="fa-solid fa-leaf"></i>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', color: 'var(--text-light)', marginBottom: '0.2rem' }}>Sustainable Fabrics</h4>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>50+ eco-friendly fabric varieties, non-toxic dyes, and skin-safe manufacturing.</p>
                  </div>
                </li>

                <li style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ width: '40px', height: '40px', background: 'rgba(212, 175, 55, 0.15)', border: '1px solid var(--border-gold)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold-bright)', shrink: 0 }}>
                    <i className="fa-solid fa-shield-halved"></i>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', color: 'var(--text-light)', marginBottom: '0.2rem' }}>Zero Defects Guarantee</h4>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>Precision stitching, HD non-fade prints, and direct factory quality audits.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section style={{ background: 'linear-gradient(180deg, rgba(5, 24, 18, 0.95) 0%, rgba(3, 13, 10, 0.98) 100%)', padding: '5rem 0', borderTop: '1px solid var(--border-gold)', borderBottom: '1px solid var(--border-gold)' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="section-subtitle"><i className="fa-solid fa-user-tie"></i> OUR LEADERSHIP</span>
            <h2 className="section-title">Leadership & <span className="gold-gradient-text">Creative Vision</span></h2>
            <p className="section-desc">Guided by experienced industry leadership and passionate creative direction.</p>
            <div className="title-underline"></div>
          </div>

          <div className="grid-2" style={{ gap: '2.5rem', maxWidth: '850px', margin: '3.5rem auto 0 auto' }}>
            {/* Director Card */}
            <div className="glass-card text-center" style={{ padding: '2.5rem' }}>
              <div style={{ width: '90px', height: '90px', background: 'rgba(212, 175, 55, 0.15)', border: '2px solid var(--border-gold)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto', color: 'var(--gold-bright)', fontSize: '2.2rem' }}>
                <i className="fa-solid fa-user-tie"></i>
              </div>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--gold-light)', marginBottom: '0.3rem', fontFamily: 'var(--font-serif)' }}>
                Indrapal Tiwari
              </h3>
              <span className="card-badge" style={{ position: 'static', display: 'inline-block', marginBottom: '1rem' }}>DIRECTOR</span>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                Spearheading strategic vision, business operations, and factory manufacturing excellence for Eco Weaves Studio LLP.
              </p>
            </div>

            {/* Creative Head Card */}
            <div className="glass-card text-center" style={{ padding: '2.5rem' }}>
              <div style={{ width: '90px', height: '90px', background: 'rgba(212, 175, 55, 0.15)', border: '2px solid var(--border-gold)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto', color: 'var(--gold-bright)', fontSize: '2.2rem' }}>
                <i className="fa-solid fa-palette"></i>
              </div>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--gold-light)', marginBottom: '0.3rem', fontFamily: 'var(--font-serif)' }}>
                Sushum Mishra
              </h3>
              <span className="card-badge" style={{ position: 'static', display: 'inline-block', marginBottom: '1rem' }}>CREATIVE HEAD</span>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                Leading creative design, custom fabric styling, HD sublimation printing, and product aesthetic innovations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Head Office Location Banner */}
      <section className="section-padding">
        <div className="container">
          <div className="glass-card" style={{ padding: '3rem' }}>
            <div className="grid-2" style={{ gap: '2rem', alignItems: 'center' }}>
              <div>
                <span className="section-subtitle"><i className="fa-solid fa-building"></i> HEAD OFFICE</span>
                <h3 style={{ fontSize: '2rem', color: 'var(--gold-light)', marginBottom: '1rem', fontFamily: 'var(--font-serif)' }}>
                  Eco Weaves Studio LLP
                </h3>
                <p style={{ color: 'var(--text-light)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                  <i className="fa-solid fa-location-dot gold-icon" style={{ marginRight: '0.5rem' }}></i>
                  C205 Tower 6, RMG Residency, Sec 37-C, Gurugram, Pincode - 122006, Haryana, India.
                </p>
                <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', fontSize: '0.95rem' }}>
                  <div>
                    <strong style={{ color: 'var(--text-muted)', display: 'block' }}>Official Email</strong>
                    <a href="mailto:ecom.ravi@yahoo.com" style={{ color: 'var(--gold-bright)' }}>ecom.ravi@yahoo.com</a>
                  </div>
                  <div>
                    <strong style={{ color: 'var(--text-muted)', display: 'block' }}>Direct Phone</strong>
                    <a href="tel:+918851589090" style={{ color: 'var(--gold-bright)' }}>+91 8851589090</a>
                  </div>
                </div>
              </div>

              <div style={{ textAlign: 'center' }}>
                <Link to="/contact" className="btn btn-gold btn-lg">
                  <i className="fa-solid fa-paper-plane"></i> Send Direct Inquiry
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
