import React from 'react';
import { useState } from 'react';
import '../styles/index.css';

function SecuritySwitch() {
  const [security, setSecurity] = useState(true);

  return (
    <div className="security__container">
      <button onClick={securityChange}>
        {security ? 'SECURE' : 'UNSECURE'}
      </button>
    </div>
  );

  function securityChange(e) {
    e.preventDefault();
    const html = document.querySelector('html');

    setSecurity(prev => {
      if (prev) {
        html.style.background = 'black';
        html.style.filter = 'invert(1) hue-rotate(180deg)';
      } else {
        html.style.background = 'white';
        html.style.filter = 'invert(0)  hue-rotate(0deg)';
      }
      return !prev;
    });
  }
}

export default SecuritySwitch;
