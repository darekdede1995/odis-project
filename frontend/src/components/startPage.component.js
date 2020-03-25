import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import LoginForm from './authSection/loginForm.component';
import RegisterForm from './authSection/registerForm.component';
import { Link } from 'react-router-dom';
import { getFromStorage, clearStorage } from '../utils/storage';
import { useEffect } from 'react';

function StartPage() {
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);
  const odisUser = getFromStorage('odis-user');
  const odisSession = getFromStorage('odis-session');

  return (
    <div className="start-container">
      <div className="button-group">
        <button>
          <Link to="/comments">Comments</Link>
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
            Tasks
          </Link>
        </button>
        <button
          hidden={odisUser}
          className={login ? 'selected-button' : ''}
          onClick={loginToggle}
        >
          Login
        </button>
        <button
          hidden={odisUser}
          className={register ? 'selected-button' : ''}
          onClick={registerToggle}
        >
          Register
        </button>
        <button hidden={!odisUser} onClick={logout}>
          Logout
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

  function logout(e) {
    e.preventDefault();
    console.log(odisSession.userSession);
    axios
      .delete(
        process.env.REACT_APP_API_URL +
          '/api/userSession/' +
          odisSession.userSession._id
      )
      .then(res => {
        clearStorage('odis-user');
        clearStorage('odis-session');
        odisUser = '';
        odisSession = '';
      })
      .catch(error => {
        console.log(error);
      });
  }
}

export default StartPage;
