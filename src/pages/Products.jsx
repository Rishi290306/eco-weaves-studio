import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS_LIST } from '../data/productsData';
import ProductModal from '../components/ProductModal';

export default function Products() {
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'sports', name: 'Sports & Athletic' },
    { id: 'custom', name: 'Custom & Teams' },
    { id: 'outer-gym', name: 'Gym & Outerwear' },
    { id: 'home', name: 'Home & Accessories' },
    { id: 'innerwear', name: 'Innerwear' },
  ];

  const filteredProducts = PRODUCTS_LIST.filter(item => {
    const matchesCategory = filter === 'all' || item.category === filter;
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase()) ||
                          item.desc.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      <section className="page-hero">
        <div className="container">
          <span className="section-subtitle"><i className="fa-solid fa-boxes-packing"></i> COMPLETE CATALOGUE</span>
          <h1 className="section-title">Specialized <span className="gold-gradient-text">Product Lineups</span></h1>
          <p className="section-desc">Sports T-shirts, Custom T-shirts, Self-photo printed T-shirts, Gym wear, Team uniforms, Aprons, Cushion covers, Curtains, Sandos, Winter jackets, & Innerwear.</p>
          <div className="title-underline"></div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          {/* Search Bar & Category Tabs */}
          <div style={{ maxWidth: '550px', margin: '0 auto 3rem auto' }}>
            <div className="form-group" style={{ position: 'relative' }}>
              <input
                type="text"
                className="form-input"
                placeholder="Search products by name or fabric..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                style={{ paddingLeft: '3rem' }}
              />
              <i className="fa-solid fa-magnifying-glass gold-icon" style={{ position: 'absolute', left: '1.2rem', top: '50%', transform: 'translateY(-50%)' }}></i>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.85rem', flexWrap: 'wrap', marginBottom: '3.5rem' }}>
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`btn ${filter === cat.id ? 'btn-gold' : 'btn-glass'}`}
                onClick={() => setFilter(cat.id)}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid-3">
            {filteredProducts.map(item => (
              <div key={item.id} className="product-card glass-card">
                <span className="card-badge">{item.badge}</span>
                <div className="product-img-wrap">
                  <img src={item.img} alt={item.name} />
                </div>
                <div className="product-info">
                  <span className="product-cat">{item.categoryName}</span>
                  <h3 className="product-name">{item.name}</h3>
                  <p className="product-desc">{item.desc}</p>
                  <div className="product-meta">
                    <span className="price-est"><i className="fa-solid fa-certificate gold-icon" style={{ marginRight: '0.3rem' }}></i> Direct Factory Quote</span>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <button className="btn btn-gold btn-sm" onClick={() => setSelectedProduct(item)}>
                        <i className="fa-solid fa-eye"></i> Quick View
                      </button>
                      <Link to={`/product/${item.id}`} className="btn btn-glass btn-sm">
                        Quote
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center" style={{ padding: '4rem 0', color: 'var(--text-muted)' }}>
              <h3>No products found matching "{search}"</h3>
              <button className="btn btn-gold" onClick={() => { setSearch(''); setFilter('all'); }} style={{ marginTop: '1.25rem' }}>
                Reset Filters
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
