import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import OpeningIntroBanner from './components/OpeningIntroBanner';
import CustomCursor from './components/CustomCursor';
import ParticleCanvas from './components/ParticleCanvas';
import WhatsAppButton from './components/WhatsAppButton';
import PageTransition from './components/PageTransition';

import Home from './pages/Home';
import About from './pages/About';
import Fabrics from './pages/Fabrics';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import QuoteEstimator from './pages/QuoteEstimator';
import SampleRequest from './pages/SampleRequest';
import WhyUs from './pages/WhyUs';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

import './App.css';

export default function App() {
  return (
    <Router>
      {/* Opening Intro Animation */}
      <OpeningIntroBanner />

      {/* Deluxe Gold Cursor */}
      <CustomCursor />

      {/* Background Particles Canvas */}
      <ParticleCanvas />

      {/* Navbar */}
      <Navbar />

      {/* Multi-Page Routes */}
      <main style={{ minHeight: '80vh' }}>
        <Routes>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/about" element={<PageTransition><About /></PageTransition>} />
          <Route path="/fabrics" element={<PageTransition><Fabrics /></PageTransition>} />
          <Route path="/products" element={<PageTransition><Products /></PageTransition>} />
          <Route path="/product/:id" element={<PageTransition><ProductDetail /></PageTransition>} />
          <Route path="/quote-estimator" element={<PageTransition><QuoteEstimator /></PageTransition>} />
          <Route path="/sample-request" element={<PageTransition><SampleRequest /></PageTransition>} />
          <Route path="/why-us" element={<PageTransition><WhyUs /></PageTransition>} />
          <Route path="/gallery" element={<PageTransition><Gallery /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        </Routes>
      </main>

      {/* Floating Action Button */}
      <WhatsAppButton />

      {/* Footer */}
      <Footer />
    </Router>
  );
}
