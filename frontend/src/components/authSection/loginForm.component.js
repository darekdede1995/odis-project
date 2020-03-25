import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { setInStorage, getFromStorage } from '../../utils/storage';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const localStorage = getFromStorage('odis-token');

  return (
    <div className="login-container">
      <input
        value={username}
        type="text"
        placeholder="username"
        onChange={usernameChange}
      />
      <input
        value={password}
        type="password"
        placeholder="password"
        onChange={passwordChange}
      />
      <div className="error">{message}</div>
      <button onClick={login}>SUMBIT</button>
    </div>
  );

  function passwordChange(e) {
    setPassword(e.target.value);
  }

  function usernameChange(e) {
    setUsername(e.target.value);
  }

  function login(e) {
    e.preventDefault();

    if (!username || !password) {
      setMessage('Fields cant be blank');
    } else {
      const user = {
        username: username,
        password: password
      };

      axios
        .post(process.env.REACT_APP_API_URL + '/api/users/login', user)
        .then(res => {
          setUsername('');
          setPassword('');
          if (res.data.success) {
            setInStorage('odis-token', {
              user: res.data.user
            });
          }
        })
        .catch(error => {
          setMessage(error.response.data);
        });
    }
  }
}

export default LoginForm;
