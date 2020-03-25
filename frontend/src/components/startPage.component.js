import React from 'react';
import { useState } from 'react';
import LoginForm from './authSection/loginForm.component';
import RegisterForm from './authSection/registerForm.component';
import { Link } from 'react-router-dom';

function StartPage() {
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);

  return (
    <div className="start-container">
      <div className="button-group">
        <button>
          <Link to="/comments">Komentarze</Link>
        </button>
        <button>
          <Link
            className={
              window.location.pathname === '/exercises-list'
                ? 'nav-link selected-link'
                : 'nav-link'
            }
            to="/list"
          >
            przycisk roboczy
          </Link>
        </button>
        <button
          className={login ? 'selected-button' : ''}
          onClick={loginToggle}
        >
          LOGIN
        </button>
        <button
          className={register ? 'selected-button' : ''}
          onClick={registerToggle}
        >
          REGISTER
        </button>
      </div>
      <div hidden={!login}>
        <LoginForm />
      </div>
      <div hidden={!register}>
        <RegisterForm onSubmit={loginToggle} />
      </div>
    </div>
  );

  function loginToggle(e) {
    if (e) {
      e.preventDefault();
    }
    setLogin(!login);
    setRegister(false);
  }

  function registerToggle(e) {
    e.preventDefault();
    setRegister(!register);
    setLogin(false);
  }
}

export default StartPage;
