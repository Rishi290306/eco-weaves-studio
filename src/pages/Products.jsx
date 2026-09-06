import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS_LIST } from '../data/productsData';
import ProductModal from '../components/ProductModal';

export default function Products() {
  // Default directly to 'tshirts' (Printed T-Shirts) so it opens strictly showing T-Shirts
  const [filter, setFilter] = useState('tshirts');
  const [search, setSearch] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Strictly ONLY 2 Categories: Printed T-Shirts and Cushions
  const categories = [
    { id: 'tshirts', name: 'Printed T-Shirts' },
    { id: 'cushions', name: 'Cushions' },
  ];

  const filteredProducts = PRODUCTS_LIST.filter(item => {
    const matchesCategory = item.category === filter;
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase()) ||
                          item.desc.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      <section className="page-hero" style={{ padding: '7rem 0 2.5rem 0' }}>
        <div className="container">
          <span className="section-subtitle"><i className="fa-solid fa-boxes-packing"></i> OUR CATALOGUE</span>
          <h1 className="section-title">Printed <span className="gold-gradient-text">T-Shirts & Cushions</span></h1>
          <p className="section-desc">Think it. Customise it. Wear it. Explore our high-definition printed T-Shirts and decorative Cushion collection.</p>
          <div className="title-underline"></div>
        </div>
      </section>

      <section className="section-padding" style={{ paddingTop: '1.5rem' }}>
        <div className="container" style={{ maxWidth: '1440px', padding: '0 1.5rem' }}>
          {/* Search Bar */}
          <div style={{ maxWidth: '480px', margin: '0 auto 2rem auto' }}>
            <div className="form-group" style={{ position: 'relative', marginBottom: 0 }}>
              <input
                type="text"
                className="form-input"
                placeholder="Search T-Shirts or Cushions..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                style={{ paddingLeft: '3rem', paddingRight: '1rem', height: '44px', fontSize: '0.92rem' }}
              />
              <i className="fa-solid fa-magnifying-glass gold-icon" style={{ position: 'absolute', left: '1.2rem', top: '50%', transform: 'translateY(-50%)' }}></i>
            </div>
          </div>

          {/* Strictly 2 Category Tabs: Printed T-Shirts & Cushions */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.25rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`btn ${filter === cat.id ? 'btn-gold' : 'btn-glass'}`}
                style={{ padding: '0.7rem 2.25rem', fontSize: '1.05rem', fontWeight: 600, borderRadius: '30px' }}
                onClick={() => setFilter(cat.id)}
              >
                {cat.id === 'tshirts' && <i className="fa-solid fa-shirt" style={{ marginRight: '0.5rem' }}></i>}
                {cat.id === 'cushions' && <i className="fa-solid fa-couch" style={{ marginRight: '0.5rem' }}></i>}
                {cat.name}
              </button>
            ))}
          </div>

          {/* Product Grid: Inline 6 Columns Layout for Guaranteed Single Row Display */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(190px, 1fr))',
            gap: '1.15rem'
          }}>
            {filteredProducts.map(item => (
              <div
                key={item.id}
                className="product-card glass-card"
                style={{ padding: '0.85rem', display: 'flex', flexDirection: 'column', height: '100%' }}
              >
                <span className="card-badge" style={{ fontSize: '0.65rem', padding: '0.18rem 0.55rem', top: '0.5rem', right: '0.5rem' }}>{item.badge}</span>
                
                <div className="product-img-wrap" style={{ height: '180px', marginBottom: '0.75rem', borderRadius: '10px', overflow: 'hidden' }}>
                  <img src={item.img} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>

                <div className="product-info" style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <span className="product-cat" style={{ fontSize: '0.72rem', letterSpacing: '1px', marginBottom: '0.25rem' }}>{item.categoryName}</span>
                  <h3 className="product-name" style={{ fontSize: '0.98rem', marginBottom: '0.35rem', color: 'var(--text-light)', lineHeight: 1.35 }}>{item.name}</h3>
                  <p className="product-desc" style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.85rem', lineHeight: 1.45, flexGrow: 1 }}>{item.desc}</p>
                  
                  <div className="product-meta" style={{ paddingTop: '0.65rem', marginTop: 'auto' }}>
                    <button className="btn btn-gold btn-sm btn-block" style={{ fontSize: '0.78rem', padding: '0.45rem 0.5rem' }} onClick={() => setSelectedProduct(item)}>
                      <i className="fa-solid fa-eye"></i> Quick View
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center" style={{ padding: '4rem 0', color: 'var(--text-muted)' }}>
              <h3>No items found matching "{search}" in this category</h3>
              <button className="btn btn-gold" onClick={() => { setSearch(''); }} style={{ marginTop: '1.25rem' }}>
                Clear Search
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Product Quick View Modal */}
      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </div>
  );
}
