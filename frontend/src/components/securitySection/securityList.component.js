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
      content:
        'Niechronione bezpośrednie odwołania do obiektów (IDOR) są rodzajem luki w kontroli dostępu, która powstaje, gdy aplikacja korzysta z wejścia dostarczonego przez użytkownika do bezpośredniego dostępu do obiektów. \n\nRozważmy stronę internetową, która używa następującego adresu URL, aby uzyskać dostęp do strony konta klienta, poprzez pobieranie informacji z bazy danych: https://insecure-website.com/customer_account?customer_number=132355 Jest to wysoce nieodpowiednie podejście. W naszym przypadku strony niechronionej zadania użytkownika właśnie w ten sposób są pobierane. Aby pobrać wszystkie zadania z bazy wystarczy w adres:\n\nhttp://localhost:5000/api/tasks/?userid=5e7a117dd1af1149ccedd889\n\nzamienic na adres:\n\nhttp://localhost:5000/api/tasks/?\n\nAby zapobiec takiemu postępowaniu należy:\n-pobierać dane metodą POST\n-zabezpieczyć serwer przed pustymi zapytaniami query\n '
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
          <div className="security-info--close" onClick={closeInfo}>
            close
          </div>
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
