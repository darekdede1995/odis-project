import React from 'react';
import { useState } from 'react';
import '../../styles/index.css';

function SecurityList() {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="security-list__container">
      <ul>
        <li
          onClick={() => {
            toggleInfo(1);
          }}
        >
          SQL Injections
        </li>
        <li
          onClick={() => {
            toggleInfo(2);
          }}
        >
          Cross Site Scripting (XSS)
        </li>
        <li
          onClick={() => {
            toggleInfo(3);
          }}
        >
          Broken Authentication & Session Management - IdentityManager
        </li>
        <li
          onClick={() => {
            toggleInfo(4);
          }}
        >
          Insecure Direct Object References - DOM (Document Object Model)
        </li>
        <li
          onClick={() => {
            toggleInfo(5);
          }}
        >
          Cross-Site Request Forgery (CSRF)
        </li>
      </ul>
      {showInfo ? (
        <div className="security--info">
          tutaj info o kazdym zagrozeniu eldo
        </div>
      ) : (
        ''
      )}
    </div>
  );

  function toggleInfo(index) {
    setShowInfo(prev => !prev);
  }
}

export default SecurityList;
