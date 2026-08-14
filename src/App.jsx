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
import Products from './pages/Products';
import Services from './pages/Services';
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

      {/* 5 Core Client Pages */}
      <main style={{ minHeight: '80vh' }}>
        <Routes>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/about" element={<PageTransition><About /></PageTransition>} />
          <Route path="/products" element={<PageTransition><Products /></PageTransition>} />
          <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
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
