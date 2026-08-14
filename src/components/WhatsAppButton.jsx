import React from 'react';

export default function WhatsAppButton() {
  const waUrl = "https://wa.me/?text=Hello%20Eco%20Weaves%20Studio%20LLP,%20I%20am%20interested%20in%20inquiring%20about%20your%20fabrics%20and%20apparel.";

  return (
    <a href={waUrl} target="_blank" rel="noopener noreferrer" className="whatsapp-float" aria-label="Chat on WhatsApp">
      <div className="whatsapp-pulse"></div>
      <i className="fa-brands fa-whatsapp"></i>
    </a>
  );
}
