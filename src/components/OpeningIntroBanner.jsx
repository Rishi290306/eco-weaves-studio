import React, { useState, useEffect } from 'react';
import logoImg from '../assets/logo.png';

export default function OpeningIntroBanner() {
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Auto-dismiss intro banner after 3.5 seconds or user click
    const timer = setTimeout(() => {
      setDismissed(true);
    }, 4500);
    return () => clearTimeout(timer);
  }, []);

  const handleEnter = () => {
    setDismissed(true);
  };

  return (
    <div className={`opening-banner-overlay ${dismissed ? 'dismissed' : ''}`}>
      {/* Top Scrolling Marquee Banner */}
      <div className="marquee-ticker-bar">
        <div className="marquee-content">
          <span className="marquee-item"><i className="fa-solid fa-leaf gold-icon"></i> ESTABLISHED 7TH MARCH 2025</span>
          <span className="marquee-item"><i className="fa-solid fa-layer-group gold-icon"></i> 50+ FABRIC VARIETIES</span>
          <span className="marquee-item"><i className="fa-solid fa-shield-halved gold-icon"></i> ZERO DEFECT FINISHING</span>
          <span className="marquee-item"><i className="fa-solid fa-droplet gold-icon"></i> 100% SKIN-SAFE ECO DYES</span>
          <span className="marquee-item"><i className="fa-solid fa-crown gold-icon"></i> DESIGN. SUSTAIN. INSPIRE.</span>
          {/* Duplicate for infinite loop */}
          <span className="marquee-item"><i className="fa-solid fa-leaf gold-icon"></i> ESTABLISHED 7TH MARCH 2025</span>
          <span className="marquee-item"><i className="fa-solid fa-layer-group gold-icon"></i> 50+ FABRIC VARIETIES</span>
          <span className="marquee-item"><i className="fa-solid fa-shield-halved gold-icon"></i> ZERO DEFECT FINISHING</span>
        </div>
      </div>

      {/* Center Stage Logo Reveal */}
      <div className="intro-center-stage">
        <div className="intro-logo-glow">
          <img src={logoImg} alt="Eco Weaves Studio LLP Logo" />
        </div>
        <h1 className="intro-brand-title">
          <span className="gold-gradient-text">ECO WEAVES STUDIO LLP</span>
        </h1>
        <p className="intro-tagline">DESIGN. SUSTAIN. INSPIRE.</p>
        
        <button className="btn btn-gold btn-lg btn-glow" onClick={handleEnter}>
          <i className="fa-solid fa-gem"></i> Enter Studio Experience
        </button>
      </div>

      {/* Bottom Marquee Banner */}
      <div className="marquee-ticker-bar">
        <div className="marquee-content" style={{ animationDirection: 'reverse' }}>
          <span className="marquee-item"><i className="fa-solid fa-shirt gold-icon"></i> SPORTS & ATHLETIC</span>
          <span className="marquee-item"><i className="fa-solid fa-palette gold-icon"></i> CUSTOM PRINTED TEES</span>
          <span className="marquee-item"><i className="fa-solid fa-snowflake gold-icon"></i> WINTER JACKETS</span>
          <span className="marquee-item"><i className="fa-solid fa-house-chimney gold-icon"></i> CURTAINS & CUSHIONS</span>
          <span className="marquee-item"><i className="fa-solid fa-heart gold-icon"></i> INNERWEAR & BRAS</span>
        </div>
      </div>
    </div>
  );
}
