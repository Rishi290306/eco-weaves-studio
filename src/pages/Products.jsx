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
      <section className="page-hero" style={{ padding: '7rem 0 3rem 0' }}>
        <div className="container">
          <span className="section-subtitle"><i className="fa-solid fa-boxes-packing"></i> OUR CATALOGUE</span>
          <h1 className="section-title">Printed <span className="gold-gradient-text">T-Shirts & Cushions</span></h1>
          <p className="section-desc">Think it. Customise it. Wear it. Explore our high-definition printed T-Shirts and decorative Cushion collection.</p>
          <div className="title-underline"></div>
        </div>
      </section>

      <section className="section-padding" style={{ paddingTop: '2rem' }}>
        <div className="container" style={{ maxWidth: '1440px' }}>
          {/* Search Bar */}
          <div style={{ maxWidth: '500px', margin: '0 auto 2rem auto' }}>
            <div className="form-group" style={{ position: 'relative', marginBottom: 0 }}>
              <input
                type="text"
                className="form-input"
                placeholder="Search T-Shirts or Cushions..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                style={{ paddingLeft: '3rem', paddingRight: '1rem', height: '45px', fontSize: '0.95rem' }}
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
                style={{ padding: '0.75rem 2.25rem', fontSize: '1.05rem', fontWeight: 600, borderRadius: '30px' }}
                onClick={() => setFilter(cat.id)}
              >
                {cat.id === 'tshirts' && <i className="fa-solid fa-shirt" style={{ marginRight: '0.5rem' }}></i>}
                {cat.id === 'cushions' && <i className="fa-solid fa-couch" style={{ marginRight: '0.5rem' }}></i>}
                {cat.name}
              </button>
            ))}
          </div>

          {/* Product Grid: 6 Images Per Row */}
          <div className="grid-6-products">
            {filteredProducts.map(item => (
              <div key={item.id} className="product-card product-card-sm glass-card">
                <span className="card-badge" style={{ fontSize: '0.68rem', padding: '0.2rem 0.6rem', top: '0.6rem', right: '0.6rem' }}>{item.badge}</span>
                <div className="product-img-wrap">
                  <img src={item.img} alt={item.name} />
                </div>
                <div className="product-info">
                  <span className="product-cat">{item.categoryName}</span>
                  <h3 className="product-name">{item.name}</h3>
                  <p className="product-desc">{item.desc}</p>
                  <div className="product-meta" style={{ paddingTop: '0.75rem' }}>
                    <button className="btn btn-gold btn-sm btn-block" style={{ fontSize: '0.8rem', padding: '0.45rem 0.75rem' }} onClick={() => setSelectedProduct(item)}>
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
