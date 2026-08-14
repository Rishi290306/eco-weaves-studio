import React, { useState } from 'react';
import { FABRICS_LIST } from '../data/productsData';

export default function SampleRequest() {
  const [selectedFabrics, setSelectedFabrics] = useState(['f1', 'f2']);
  const [companyName, setCompanyName] = useState('');
  const [personName, setPersonName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const toggleFabric = (id) => {
    if (selectedFabrics.includes(id)) {
      setSelectedFabrics(selectedFabrics.filter(item => item !== id));
    } else {
      if (selectedFabrics.length < 5) {
        setSelectedFabrics([...selectedFabrics, id]);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const chosenNames = FABRICS_LIST.filter(f => selectedFabrics.includes(f.id)).map(f => f.name).join(', ');
    const mailSubject = encodeURIComponent(`Free Fabric Swatch Request from ${personName}`);
    const mailBody = encodeURIComponent(
      `Fabric Swatch Box Request:\n\n` +
      `Company: ${companyName}\n` +
      `Contact Person: ${personName}\n` +
      `Phone: ${phone}\n` +
      `Delivery Address: ${address}\n\n` +
      `Selected Fabric Swatches:\n${chosenNames}`
    );

    setTimeout(() => {
      window.location.href = `mailto:ECOM.RAVI@YAHOO.COM?subject=${mailSubject}&body=${mailBody}`;
    }, 1500);
  };

  return (
    <div>
      <section className="page-hero">
        <div className="container">
          <span className="section-subtitle"><i className="fa-solid fa-box-open"></i> PHYSICAL TOUCH & FEEL</span>
          <h1 className="section-title">Request <span className="gold-gradient-text">Free Swatch Box</span></h1>
          <p className="section-desc">Pick up to 5 fabric samples from our 50+ varieties and we will ship a physical sample box to your business address.</p>
          <div className="title-underline"></div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="glass-card" style={{ padding: '2.5rem' }}>
            {submitted ? (
              <div className="text-center" style={{ padding: '3rem 0' }}>
                <i className="fa-solid fa-circle-check" style={{ fontSize: '3.5rem', color: 'var(--gold-bright)', marginBottom: '1rem' }}></i>
                <h2>Swatch Request Logged!</h2>
                <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>
                  Thank you {personName}. Our sample dispatch team is opening your mail client to confirm shipment to <strong>{address}</strong>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--gold-light)', marginBottom: '1rem' }}>
                  Step 1: Select up to 5 Fabric Swatches ({selectedFabrics.length}/5 Selected)
                </h3>

                <div className="grid-3" style={{ marginBottom: '2.5rem' }}>
                  {FABRICS_LIST.map(f => {
                    const isChecked = selectedFabrics.includes(f.id);
                    return (
                      <div
                        key={f.id}
                        onClick={() => toggleFabric(f.id)}
                        className="glass-card"
                        style={{
                          padding: '1.25rem',
                          cursor: 'pointer',
                          borderColor: isChecked ? 'var(--gold-bright)' : 'var(--border-gold)',
                          background: isChecked ? 'rgba(212, 175, 55, 0.15)' : 'rgba(11, 43, 34, 0.65)'
                        }}
                      >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                          <h4 style={{ fontSize: '1.1rem', color: 'var(--gold-light)' }}>{f.name}</h4>
                          <input type="checkbox" checked={isChecked} onChange={() => {}} style={{ accentColor: 'var(--gold-bright)' }} />
                        </div>
                        <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>{f.desc}</p>
                      </div>
                    );
                  })}
                </div>

                <h3 style={{ fontSize: '1.5rem', color: 'var(--gold-light)', marginBottom: '1.5rem' }}>
                  Step 2: Enter Delivery Details
                </h3>

                <div className="form-group">
                  <label>Company / Institution Name:</label>
                  <input type="text" className="form-input" placeholder="e.g. Royal Cricket Club / St. Xavier School" value={companyName} onChange={e => setCompanyName(e.target.value)} required />
                </div>

                <div className="grid-2" style={{ gap: '1rem', marginBottom: '1.25rem' }}>
                  <div className="form-group">
                    <label>Contact Person Name:</label>
                    <input type="text" className="form-input" placeholder="Your Name" value={personName} onChange={e => setPersonName(e.target.value)} required />
                  </div>
                  <div className="form-group">
                    <label>Phone / WhatsApp Number:</label>
                    <input type="tel" className="form-input" placeholder="+91 9876543210" value={phone} onChange={e => setPhone(e.target.value)} required />
                  </div>
                </div>

                <div className="form-group">
                  <label>Full Delivery Address:</label>
                  <textarea className="form-input" rows="3" placeholder="Enter building address, street, city, state & pincode..." value={address} onChange={e => setAddress(e.target.value)} required></textarea>
                </div>

                <button type="submit" className="btn btn-gold btn-lg btn-block" style={{ marginTop: '1.5rem' }}>
                  <i className="fa-solid fa-paper-plane"></i> Dispatch Free Swatch Sample Box
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
