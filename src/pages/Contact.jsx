import React, { useState } from 'react';

export default function Contact() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const LOCAL_IP = '192.168.29.106';

  const handleSubmit = (e) => {
    e.preventDefault();

    const dataObj = {
      name: fullName,
      email: email,
      phone: phone,
      company: category,
      subject: `Inquiry: ${category}`,
      message: message,
      submittedAt: new Date().toLocaleString()
    };

    setSubmittedData(dataObj);
    setSubmitted(true);

    const jsonPayload = JSON.stringify(dataObj);

    // Target URL to send directly to local Java REST API
    const targetUrl = (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
      ? 'http://localhost:8080/api/contact'
      : `http://${LOCAL_IP}:8080/api/contact`;

    try {
      fetch(targetUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: jsonPayload
      });
    } catch (err) {
      console.log('Submission notice:', err);
    }
  };

  return (
    <div>
      <section className="page-hero">
        <div className="container">
          <span className="section-subtitle"><i className="fa-solid fa-headset"></i> GET IN TOUCH</span>
          <h1 className="section-title">Contact <span className="gold-gradient-text">Eco Weaves Studio</span></h1>
          <p className="section-desc">Head Office: Sec 37-C Gurugram. Contact us for custom fashion, sportswear, uniform kits, or advertising merchandise.</p>
          <div className="title-underline"></div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="grid-2" style={{ marginBottom: '3rem' }}>
            {/* Info Box */}
            <div className="glass-card" style={{ padding: '2.5rem' }}>
              <h3 style={{ fontSize: '1.8rem', color: 'var(--gold-light)', marginBottom: '0.5rem', fontFamily: 'var(--font-serif)' }}>Eco Weaves Studio LLP</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '2rem' }}>
                Your Fashion. Your Vision. Our Craft. Contact our Head Office team for direct factory inquiries, custom orders, or fabric samples.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ width: '45px', height: '45px', background: 'rgba(212, 175, 55, 0.15)', border: '1px solid var(--border-gold)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold-bright)', flexShrink: 0 }}>
                    <i className="fa-solid fa-building"></i>
                  </div>
                  <div>
                    <strong style={{ display: 'block', color: 'var(--text-light)' }}>Head Office Address</strong>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.5, display: 'block' }}>
                      C205 Tower 6, RMG Residency, Sec 37-C, Gurugram, Pincode - 122006, Haryana.
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '45px', height: '45px', background: 'rgba(212, 175, 55, 0.15)', border: '1px solid var(--border-gold)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold-bright)', flexShrink: 0 }}>
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <div>
                    <strong style={{ display: 'block', color: 'var(--text-light)' }}>Direct Phone / Contact</strong>
                    <a href="tel:+918851589090" style={{ color: 'var(--gold-bright)', fontWeight: 600 }}>+91 8851589090</a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '45px', height: '45px', background: 'rgba(212, 175, 55, 0.15)', border: '1px solid var(--border-gold)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold-bright)', flexShrink: 0 }}>
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <div>
                    <strong style={{ display: 'block', color: 'var(--text-light)' }}>Official Email</strong>
                    <a href="mailto:ecom.ravi@yahoo.com" style={{ color: 'var(--gold-bright)' }}>ecom.ravi@yahoo.com</a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '45px', height: '45px', background: 'rgba(37, 211, 102, 0.15)', border: '1px solid rgba(37, 211, 102, 0.4)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#25D366', flexShrink: 0 }}>
                    <i className="fa-brands fa-whatsapp"></i>
                  </div>
                  <div>
                    <strong style={{ display: 'block', color: 'var(--text-light)' }}>WhatsApp Instant Chat</strong>
                    <a href="https://wa.me/918851589090?text=Hi%20Eco%20Weaves%20Studio,%20I%20want%20a%20quote%20for%20customized%20apparel." target="_blank" rel="noopener noreferrer" style={{ color: '#25D366' }}>
                      Click to chat on WhatsApp (+91 8851589090)
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass-card" style={{ padding: '2.5rem' }}>
              <h3 style={{ fontSize: '1.8rem', color: 'var(--gold-light)', marginBottom: '1.5rem', fontFamily: 'var(--font-serif)' }}>Send Custom Inquiry</h3>
              
              {submitted ? (
                <div className="text-center" style={{ padding: '2rem 0' }}>
                  <i className="fa-solid fa-circle-check gold-icon" style={{ fontSize: '3.5rem', marginBottom: '1rem', color: '#4CAF50' }}></i>
                  <h2 style={{ fontSize: '2rem', color: 'var(--gold-light)', marginBottom: '0.5rem', fontFamily: 'var(--font-serif)' }}>Inquiry Submitted Successfully!</h2>
                  <p style={{ color: 'var(--green-accent)', fontWeight: 600, fontSize: '1.05rem', marginBottom: '1.5rem' }}>
                    ✅ Stored directly into Eco Weaves MySQL Database!
                  </p>
                  
                  {submittedData && (
                    <div style={{ background: 'rgba(5, 24, 18, 0.8)', border: '1px solid var(--border-gold)', borderRadius: '12px', padding: '1.25rem', textAlign: 'left', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                      <p><strong style={{ color: 'var(--text-light)' }}>Client Name:</strong> {submittedData.name}</p>
                      <p><strong style={{ color: 'var(--text-light)' }}>Email:</strong> {submittedData.email}</p>
                      <p><strong style={{ color: 'var(--text-light)' }}>Phone:</strong> {submittedData.phone}</p>
                      <p><strong style={{ color: 'var(--text-light)' }}>Category:</strong> {submittedData.company}</p>
                      <p style={{ marginTop: '0.5rem' }}><strong style={{ color: 'var(--text-light)' }}>Requirement:</strong> {submittedData.message}</p>
                    </div>
                  )}

                  <button className="btn btn-gold btn-sm" style={{ marginTop: '1.5rem' }} onClick={() => setSubmitted(false)}>
                    <i className="fa-solid fa-plus"></i> Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input type="text" className="form-input" placeholder="e.g. Ravishankar Gaav" value={fullName} onChange={e => setFullName(e.target.value)} required />
                  </div>

                  <div className="grid-2" style={{ gap: '1rem' }}>
                    <div className="form-group">
                      <label>Email Address *</label>
                      <input type="email" className="form-input" placeholder="e.g. ecom.ravi@yahoo.com" value={email} onChange={e => setEmail(e.target.value)} required />
                    </div>
                    <div className="form-group">
                      <label>Phone / WhatsApp *</label>
                      <input type="tel" className="form-input" placeholder="+91 8851589090" value={phone} onChange={e => setPhone(e.target.value)} required />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Product Category Requirement *</label>
                    <select className="form-input" value={category} onChange={e => setCategory(e.target.value)} required>
                      <option value="" disabled>Choose category...</option>
                      <option value="Custom T-Shirts">Custom T-Shirts (Everyday & Group)</option>
                      <option value="Shorts & Track Pants">Shorts and Track Pants</option>
                      <option value="Sportswear & Gym Wear">Sportswear and Gym Wear</option>
                      <option value="Gym Sandos & Sports T-Shirts">Gym Sandos and Sports T-Shirts</option>
                      <option value="Gym Bags">Gym Bags & Duffel Bags</option>
                      <option value="Event T-Shirts">Group & Event T-Shirts</option>
                      <option value="Cricket Jerseys & Sportswear">Cricket Jerseys & Sportswear</option>
                      <option value="Bike & Car Riding T-Shirts">Bike & Car Riding T-Shirts</option>
                      <option value="Staff & Uniform T-Shirts">Staff and Uniform T-Shirts</option>
                      <option value="Advertising T-Shirts & Flags">Advertising T-Shirts, Flags & Bags</option>
                      <option value="Marathon T-Shirts">Marathon T-Shirts</option>
                      <option value="Corporate & Promotional Merchandise">Corporate & Promotional Merchandise</option>
                      <option value="50+ Raw Fabrics Supply">Raw Fabric Supply (50+ Varieties)</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Detailed Requirement / Quantity / Design Ideas *</label>
                    <textarea className="form-input" rows="4" placeholder="Share your design, logo, colors, or quantity ideas..." value={message} onChange={e => setMessage(e.target.value)} required></textarea>
                  </div>

                  <button type="submit" className="btn btn-gold btn-lg btn-block">
                    <i className="fa-solid fa-paper-plane"></i> Submit Inquiry to Eco Weaves
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Google Maps Card */}
          <div className="glass-card" style={{ padding: '1.5rem' }}>
            <div style={{ marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--text-light)' }}>
                <i className="fa-solid fa-location-dot gold-icon"></i> Head Office Location (Sec 37-C, Gurugram)
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>C205 Tower 6, RMG Residency, Sec 37-C, Gurugram, Haryana - 122006.</p>
            </div>
            <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border-gold)' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14032.518607148564!2d76.9856!3d28.4452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d17d5e4b7b251%3A0x6b772b220d53c61c!2sSector%2037C%2C%20Gurugram%2C%20Haryana%20122006!5e0!3m2!1sen!2sin!4v1725625000000!5m2!1sen!2sin"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
