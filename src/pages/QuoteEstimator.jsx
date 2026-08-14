import React, { useState } from 'react';
import { PRODUCTS_LIST, FABRICS_LIST } from '../data/productsData';

export default function QuoteEstimator() {
  const [selectedProduct, setSelectedProduct] = useState(PRODUCTS_LIST[0].id);
  const [selectedFabric, setSelectedFabric] = useState(FABRICS_LIST[0].id);
  const [quantity, setQuantity] = useState(250);
  const [printType, setPrintType] = useState('Sublimation');
  const [clientName, setClientName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [dbStatus, setDbStatus] = useState(null);

  const prodObj = PRODUCTS_LIST.find(p => p.id === parseInt(selectedProduct)) || PRODUCTS_LIST[0];
  const fabObj = FABRICS_LIST.find(f => f.id === selectedFabric) || FABRICS_LIST[0];

  const handleSubmitQuote = async (e) => {
    e?.preventDefault();

    // 1. Send data to Java MySQL Backend API
    try {
      setDbStatus('saving');
      const response = await fetch('http://localhost:8080/api/quotes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          clientName: clientName || 'Anonymous Buyer',
          email: email || 'not_provided@ecoweaves.com',
          phone: phone || '',
          productName: prodObj.name,
          fabricName: fabObj.name,
          quantity: quantity,
          notes: `${printType} | ${notes}`
        })
      });

      if (response.ok) {
        setDbStatus('success');
      } else {
        setDbStatus('saved_local');
      }
    } catch (err) {
      console.log('Java API offline, continuing with WhatsApp export');
      setDbStatus('saved_local');
    }

    // 2. Open WhatsApp Inquiry
    const msg = encodeURIComponent(
      `Hi Eco Weaves Studio LLP,\nI have submitted a Custom Specification Request:\n\n` +
      `Client Name: ${clientName || 'Valued Buyer'}\n` +
      `Contact Email: ${email || 'Provided on request'}\n` +
      `Phone: ${phone || 'N/A'}\n` +
      `Product Line: ${prodObj.name}\n` +
      `Fabric Preference: ${fabObj.name}\n` +
      `Print/Design Type: ${printType}\n` +
      `Target Quantity: ${quantity} units\n` +
      `Additional Notes: ${notes || 'None'}\n\nPlease share direct factory pricing and fabric sample availability.`
    );
    window.open(`https://wa.me/?text=${msg}`, '_blank');
  };

  return (
    <div>
      <section className="page-hero">
        <div className="container">
          <span className="section-subtitle"><i className="fa-solid fa-database"></i> JAVA + MYSQL INTEGRATED</span>
          <h1 className="section-title">Factory <span className="gold-gradient-text">Quote Builder</span></h1>
          <p className="section-desc">Select your product line, fabric texture, and quantity to submit your custom manufacturing specifications directly to our Java MySQL database.</p>
          <div className="title-underline"></div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="estimator-card glass-card">
            <div className="estimator-grid">
              {/* Form Controls */}
              <div className="estimator-form">
                <h3 style={{ fontSize: '1.75rem', color: 'var(--gold-light)', marginBottom: '1.75rem' }}>
                  Step 1: Contact & Requirements
                </h3>

                <div className="form-group">
                  <label>Your Full Name / Company Name:</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="e.g. Rahul Sharma / Apex Sports Club"
                    value={clientName}
                    onChange={e => setClientName(e.target.value)}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div className="form-group">
                    <label>Email Address:</label>
                    <input
                      type="email"
                      className="form-input"
                      placeholder="name@company.com"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone / WhatsApp Number:</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>1. Select Apparel or Textile Line:</label>
                  <select className="form-input" value={selectedProduct} onChange={e => setSelectedProduct(e.target.value)}>
                    {PRODUCTS_LIST.map(p => (
                      <option key={p.id} value={p.id}>{p.name}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label>2. Select Fabric Texture (from 50+ Varieties):</label>
                  <select className="form-input" value={selectedFabric} onChange={e => setSelectedFabric(e.target.value)}>
                    {FABRICS_LIST.map(f => (
                      <option key={f.id} value={f.id}>{f.name} — ({f.tag})</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label>3. Printing & Branding Technique:</label>
                  <select className="form-input" value={printType} onChange={e => setPrintType(e.target.value)}>
                    <option value="Sublimation">Full 360 Sublimation Printing</option>
                    <option value="Screen Printing">Heavy Screen Printing</option>
                    <option value="Embroidery">Chest / Arm Embroidery Badge</option>
                    <option value="Self Photo Transfer">Self-Photo HD Digital Transfer</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>4. Order Quantity (PCS):</label>
                  <div className="range-slider-wrap">
                    <input
                      type="range"
                      min="50"
                      max="10000"
                      step="50"
                      value={quantity}
                      onChange={e => setQuantity(parseInt(e.target.value))}
                      className="range-input"
                    />
                    <span className="range-val">{quantity} Pcs</span>
                  </div>
                </div>

                <div className="form-group">
                  <label>5. Specific Requirements / Target Date (Optional):</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="e.g. Need by next month for Marathon event..."
                    value={notes}
                    onChange={e => setNotes(e.target.value)}
                  />
                </div>
              </div>

              {/* Specification Summary Box */}
              <div className="estimate-summary-box glass-card">
                <span className="section-subtitle"><i className="fa-solid fa-receipt"></i> SPECIFICATION SUMMARY</span>
                <h3 style={{ fontSize: '1.8rem', margin: '0.75rem 0 1.5rem 0', color: 'var(--gold-light)' }}>
                  Submit to Java MySQL DB
                </h3>

                <div style={{ textAlign: 'left', background: 'rgba(5, 24, 18, 0.95)', padding: '1.5rem', borderRadius: '14px', margin: '1.5rem 0', fontSize: '0.95rem', border: '1px solid var(--border-gold)' }}>
                  <p style={{ color: 'var(--text-light)', marginBottom: '0.6rem' }}><strong>Buyer:</strong> {clientName || 'Valued Client'}</p>
                  <p style={{ color: 'var(--text-light)', marginBottom: '0.6rem' }}><strong>Product:</strong> {prodObj.name}</p>
                  <p style={{ color: 'var(--text-light)', marginBottom: '0.6rem' }}><strong>Fabric:</strong> {fabObj.name}</p>
                  <p style={{ color: 'var(--text-light)', marginBottom: '0.6rem' }}><strong>Technique:</strong> {printType}</p>
                  <p style={{ color: 'var(--gold-bright)', fontWeight: 700 }}><strong>Quantity:</strong> {quantity} pieces</p>
                </div>

                {dbStatus === 'success' && (
                  <div style={{ background: 'rgba(76, 175, 80, 0.15)', border: '1px solid var(--green-accent)', color: 'var(--green-accent)', padding: '0.75rem', borderRadius: '10px', marginBottom: '1.25rem', fontSize: '0.9rem' }}>
                    <i className="fa-solid fa-circle-check"></i> Saved to Java MySQL Database (`quotes` table)!
                  </div>
                )}

                <button className="btn btn-gold btn-lg btn-block" onClick={handleSubmitQuote}>
                  <i className="fa-solid fa-database"></i> Submit Specification & Send WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
