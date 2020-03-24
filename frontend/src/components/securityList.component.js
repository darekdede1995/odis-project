import React from 'react';
import { useState } from 'react';
import '../styles/index.css';

function SecurityList() {
  return (
    <div className="security-list__container">
      <ul>
        <li>SQL Injections</li>
        <li>Cross Site Scripting (XSS)</li>
        <li>Broken Authentication & Session Management - IdentityManager</li>
        <li>Insecure Direct Object References - DOM (Document Object Model)</li>
        <li>Cross-Site Request Forgery (CSRF)</li>
      </ul>
    </div>
  );
}

export default SecurityList;
