import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS_LIST } from '../data/productsData';

export default function ProductDetail() {
  const { id } = useParams();
  const product = PRODUCTS_LIST.find(p => p.id === parseInt(id)) || PRODUCTS_LIST[0];

  const [quantity, setQuantity] = useState(100);
  const [selectedColor, setSelectedColor] = useState('Emerald Green & Gold');
  const [printingOption, setPrintingOption] = useState('Sublimation');

  const handleWhatsApp = () => {
    const msg = encodeURIComponent(
      `Hi Eco Weaves Studio LLP,\nI am submitting a custom order specification:\n\n` +
      `Product: ${product.name}\n` +
      `Order Quantity: ${quantity} pcs\n` +
      `Color Accent: ${selectedColor}\n` +
      `Printing/Embroidery: ${printingOption}\n\nPlease share availability and factory quote.`
    );
    window.open(`https://wa.me/?text=${msg}`, '_blank');
  };

  return (
    <div>
      <section className="page-hero">
        <div className="container">
          <span className="section-subtitle"><i className="fa-solid fa-shirt"></i> CUSTOM SPECIFICATION BUILDER</span>
          <h1 className="section-title">{product.name}</h1>
          <div className="title-underline"></div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container grid-2">
          {/* Image Column */}
          <div className="glass-card" style={{ padding: '2rem' }}>
            <span className="card-badge">{product.badge}</span>
            <img src={product.img} alt={product.name} style={{ width: '100%', height: '440px', objectFit: 'cover', borderRadius: '14px', marginBottom: '1.25rem' }} />
            <h4 style={{ color: 'var(--gold-light)', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Selected Fabric Spec:</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{product.fabric}</p>
          </div>

          {/* Configuration Column */}
          <div className="glass-card" style={{ padding: '3rem' }}>
            <span style={{ background: 'var(--gold-gradient)', color: '#030d0a', fontSize: '0.78rem', fontWeight: 800, padding: '0.3rem 0.85rem', borderRadius: '20px', display: 'inline-block', marginBottom: '1rem' }}>
              {product.categoryName}
            </span>
            <h2 style={{ fontSize: '2.4rem', marginBottom: '0.75rem', color: 'var(--text-light)' }}>{product.name}</h2>
            <p style={{ fontWeight: 600, color: 'var(--gold-bright)', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
              <i className="fa-solid fa-industry gold-icon" style={{ marginRight: '0.4rem' }}></i> Direct Factory Custom Manufacture
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginBottom: '2rem', lineHeight: 1.7 }}>
              {product.desc}
            </p>

            {/* Customization Options */}
            <div className="form-group">
              <label>Select Preferred Color Combination:</label>
              <select className="form-input" value={selectedColor} onChange={e => setSelectedColor(e.target.value)}>
                <option value="Emerald Green & Gold">Emerald Green & Gold (Signature Logo Palette)</option>
                <option value="Black & Gold Accent">Black & Metallic Gold Accent</option>
                <option value="White & Green Accent">White & Leaf Green Accent</option>
                <option value="Custom Event Color">Custom Event Colors (Specify on Inquiry)</option>
              </select>
            </div>

            <div className="form-group">
              <label>Select Branding / Printing Method:</label>
              <select className="form-input" value={printingOption} onChange={e => setPrintingOption(e.target.value)}>
                <option value="Sublimation">Full 360 Sublimation Printing</option>
                <option value="Screen Print">High Density Screen Printing</option>
                <option value="Embroidery">Precision Chest Embroidery</option>
                <option value="Self Photo Heat Transfer">Self-Photo HD Transfer</option>
              </select>
            </div>

            <div className="form-group">
              <label>Order Quantity: <span style={{ color: 'var(--gold-bright)', fontWeight: 800 }}>{quantity} pieces</span></label>
              <input
                type="range"
                min="25"
                max="5000"
                step="25"
                value={quantity}
                onChange={e => setQuantity(parseInt(e.target.value))}
                className="range-input"
              />
            </div>

            <div style={{ margin: '2.5rem 0' }}>
              <button className="btn btn-gold btn-lg btn-block" onClick={handleWhatsApp}>
                <i className="fa-brands fa-whatsapp"></i> Inquire Factory Quote on WhatsApp
              </button>
            </div>

            <div style={{ textAlign: 'center' }}>
              <Link to="/products" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                <i className="fa-solid fa-arrow-left" style={{ marginRight: '0.4rem' }}></i> Back to Product Catalog
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
