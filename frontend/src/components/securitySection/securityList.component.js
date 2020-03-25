import React from 'react';
import { useState } from 'react';
import '../../styles/index.css';

function SecurityList() {
  const [showInfo, setShowInfo] = useState(false);
  const [index, setIndex] = useState(0);

  const description = [
    {},
    { title: 'SQL Injections', content: 'Wstrzykiwanie SQL' },
    { title: 'Cross Site Scripting (XSS)', content: '' },
    {
      title: 'Broken Authentication & Session Management - IdentityManager',
      content: ''
    },
    {
      title: 'Insecure Direct Object References - DOM (Document Object Model)',
      content: ''
    },
    { title: 'Cross-Site Request Forgery (CSRF)', content: '' }
  ];

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
        <div className="security-info__container">
          <div className="security-info--close" onClick={closeInfo}>close</div>
          <div className="security-info--title">{description[index].title}</div>
          <div className="security-info--content">
            {description[index].content}
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );

  function toggleInfo(index) {
    setShowInfo(true);
    setIndex(index);
  }

  function closeInfo() {
    setShowInfo(false);
  }
}

export default SecurityList;
