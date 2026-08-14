import React, { useState } from 'react';

export default function Contact() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [dbStatus, setDbStatus] = useState(null);

  const LOCAL_IP = '192.168.29.106';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    const payload = JSON.stringify({
      name: fullName,
      email: email,
      phone: phone,
      company: category,
      subject: `Inquiry: ${category}`,
      message: message
    });

    let savedInDb = false;

    // 1. Try Localhost API
    try {
      setDbStatus('saving');
      const res = await fetch('http://localhost:8080/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: payload,
        signal: AbortSignal.timeout(2000)
      });
      if (res.ok) {
        setDbStatus('success');
        savedInDb = true;
      }
    } catch (e1) {
      // 2. Try LAN IP for Wi-Fi mobile devices
      try {
        const res2 = await fetch(`http://${LOCAL_IP}:8080/api/contact`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: payload,
          signal: AbortSignal.timeout(2000)
        });
        if (res2.ok) {
          setDbStatus('success');
          savedInDb = true;
        }
      } catch (e2) {
        setDbStatus('saved_mobile');
      }
    }

    // 3. Fallback: Trigger WhatsApp Direct & Mailto for Mobile Users
    const encodedMsg = encodeURIComponent(
      `*New Inquiry from Eco Weaves Website*\n` +
      `👤 *Name:* ${fullName}\n` +
      `✉️ *Email:* ${email}\n` +
      `📞 *Phone:* ${phone}\n` +
      `🏷️ *Category:* ${category}\n` +
      `📝 *Requirement:* ${message}`
    );

    const mailSubject = encodeURIComponent(`New Inquiry: ${category} from ${fullName}`);
    const mailBody = encodeURIComponent(
      `Name: ${fullName}\n` +
      `Email: ${email}\n` +
      `Phone: ${phone}\n` +
      `Category: ${category}\n\n` +
      `Requirement:\n${message}`
    );

    setTimeout(() => {
      // If submitted from phone outside home network, open WhatsApp or Email client
      const waUrl = `https://wa.me/?text=${encodedMsg}`;
      const mailUrl = `mailto:ECOM.RAVI@YAHOO.COM?subject=${mailSubject}&body=${mailBody}`;
      
      if (!savedInDb) {
        window.location.href = mailUrl;
      }
    }, 1500);
  };

  return (
    <div>
      <section className="page-hero">
        <div className="container">
          <span className="section-subtitle"><i className="fa-solid fa-headset"></i> GET IN TOUCH</span>
          <h1 className="section-title">Contact <span className="gold-gradient-text">Eco Weaves Studio</span></h1>
          <p className="section-desc">Established March 7, 2025. Contact us for wholesale inquiries, custom teamwear, or fabric samples.</p>
          <div className="title-underline"></div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="grid-2" style={{ marginBottom: '3rem' }}>
            {/* Info Box */}
            <div className="glass-card" style={{ padding: '2.5rem' }}>
              <h3 style={{ fontSize: '1.8rem', color: 'var(--gold-light)', marginBottom: '0.5rem' }}>Eco Weaves Studio LLP</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '2rem' }}>
                Established on 7th March 2025. Contact us for wholesale inquiries, custom teamwear, or fabric samples.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '45px', height: '45px', background: 'rgba(212, 175, 55, 0.15)', border: '1px solid var(--border-gold)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold-bright)' }}>
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <div>
                    <strong style={{ display: 'block', color: 'var(--text-light)' }}>Official Email</strong>
                    <a href="mailto:ECOM.RAVI@YAHOO.COM" style={{ color: 'var(--gold-bright)' }}>ECOM.RAVI@YAHOO.COM</a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '45px', height: '45px', background: 'rgba(212, 175, 55, 0.15)', border: '1px solid var(--border-gold)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold-bright)' }}>
                    <i className="fa-solid fa-clock"></i>
                  </div>
                  <div>
                    <strong style={{ display: 'block', color: 'var(--text-light)' }}>Operating Hours</strong>
                    <span style={{ color: 'var(--text-muted)' }}>Mon - Sat: 9:00 AM - 7:00 PM</span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '45px', height: '45px', background: 'rgba(37, 211, 102, 0.15)', border: '1px solid rgba(37, 211, 102, 0.4)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#25D366' }}>
                    <i className="fa-brands fa-whatsapp"></i>
                  </div>
                  <div>
                    <strong style={{ display: 'block', color: 'var(--text-light)' }}>WhatsApp Direct</strong>
                    <a href="https://wa.me/?text=Hi%20Eco%20Weaves%20Studio,%20I%20want%20a%20quote." target="_blank" rel="noopener noreferrer" style={{ color: '#25D366' }}>
                      Click to chat instantly
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass-card" style={{ padding: '2.5rem' }}>
              <h3 style={{ fontSize: '1.8rem', color: 'var(--gold-light)', marginBottom: '1.5rem' }}>Send Inquiry Form</h3>
              
              {submitted ? (
                <div className="text-center" style={{ padding: '2rem 0' }}>
                  <i className="fa-solid fa-circle-check gold-icon" style={{ fontSize: '3rem', marginBottom: '1rem' }}></i>
                  <h2>Inquiry Submitted!</h2>
                  {dbStatus === 'success' ? (
                    <p style={{ color: 'var(--green-accent)', fontWeight: 600, margin: '1rem 0' }}>
                      ✅ Saved directly to MySQL Database (`contact_messages`)!
                    </p>
                  ) : (
                    <p style={{ color: 'var(--gold-bright)', fontWeight: 600, margin: '1rem 0' }}>
                      📱 Opening Email / WhatsApp to deliver inquiry to ECOM.RAVI@YAHOO.COM...
                    </p>
                  )}
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
                      <input type="email" className="form-input" placeholder="e.g. ECOM.RAVI@YAHOO.COM" value={email} onChange={e => setEmail(e.target.value)} required />
                    </div>
                    <div className="form-group">
                      <label>Phone / WhatsApp *</label>
                      <input type="tel" className="form-input" placeholder="+91 9876543210" value={phone} onChange={e => setPhone(e.target.value)} required />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Product Category Requirement *</label>
                    <select className="form-input" value={category} onChange={e => setCategory(e.target.value)} required>
                      <option value="" disabled>Choose category...</option>
                      <option value="Sports T-shirts">Sports T-shirts & Sandos</option>
                      <option value="Custom T-shirts">Custom / Photo Printed T-shirts</option>
                      <option value="Lowers & Gym Wear">Lowers, Joggers & Gym Wear</option>
                      <option value="School & Player Uniforms">School & Player Uniforms</option>
                      <option value="Marathon & Cricket Uniforms">Marathon & Cricket Team Kits</option>
                      <option value="Aprons & Curtains">Aprons, Curtains & Cushion Covers</option>
                      <option value="Winter Jackets">Winter Jackets (Men & Women)</option>
                      <option value="Innerwear & Bras">Innerwear & Bras</option>
                      <option value="50+ Fabrics Supply">Raw Fabric Supply (50+ Varieties)</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Detailed Requirement / Quantity *</label>
                    <textarea className="form-input" rows="4" placeholder="Tell us about your required quantity, fabric type, design..." value={message} onChange={e => setMessage(e.target.value)} required></textarea>
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
                <i className="fa-solid fa-location-dot gold-icon"></i> Studio Manufacturing Location
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>Visit our manufacturing & fabric design unit.</p>
            </div>
            <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border-gold)' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.803875505055!2d72.8277!3d18.9902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDU5JzI0LjciTiA3MsKwNDknMzkuNyJF!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"
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
