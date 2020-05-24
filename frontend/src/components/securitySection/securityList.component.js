import React from 'react';
import { useState } from 'react';
import '../../styles/index.css';
import Modal from '../UI/Modal/Modal';
import description from './description';

function SecurityList() {
  const [showInfo, setShowInfo] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <div className="security-list__container">
      <ul>
        <li
          onClick={() => {
            toggleInfo(1);
          }}>
          noSQL Injections
        </li>
        <li
          onClick={() => {
            toggleInfo(2);
          }}>
          Cross Site Scripting (XSS)
        </li>
        <li
          onClick={() => {
            toggleInfo(3);
          }}>
          Broken Authentication & Session Management - IdentityManager
        </li>
        <li
          onClick={() => {
            toggleInfo(4);
          }}>
          Insecure Direct Object References - DOM (Document Object Model)
        </li>
        <li
          onClick={() => {
            toggleInfo(5);
          }}>
          Cross-Site Request Forgery (CSRF)
        </li>
      </ul>

      <Modal show={showInfo} modalClosed={closeInfo}>
        <div className="security-info--title">{description[index].title}</div>
        <div className="security-info--content">
          {description[index].content}
        </div>
      </Modal>
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
