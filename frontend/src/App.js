import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import StartPage from './components/startPage.component';
import SecuritySwitch from './components/securitySwitch.component';
import SecurityList from './components/securitySection/securityList.component';
import ListPage from './components/listPage/listPage.component';
import CommentsPage from './components/commentsPage/commentsPage.component';
import '../src/styles/index.css';
import './App.css';
import { getFromStorage } from './utils/storage';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [secure, setSecure] = useState(true);
  const [verified, setVerified] = useState(false);
  const odisUser = getFromStorage('odis-user');
  const odisSession = getFromStorage('odis-session');

  useEffect(() => {
    verify();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <button className="button__mainpage">
          <Link to="/">Main Page</Link>
        </button>
        <SecuritySwitch isSecure={secure} toggleSecure={toggleSecure} />
        <SecurityList />
        {secure ? logged(verified) : logged(odisUser)}
      </BrowserRouter>
    </div>
  );

  function toggleSecure(e) {
    e.preventDefault();
    const html = document.querySelector('html');

    setSecure((prev) => {
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

  function verify() {
    if (odisSession) {
      axios
        .post(
          process.env.REACT_APP_API_URL + '/api/userSession/verify',
          odisSession
        )
        .then((res) => {
          setVerified(res.data.success);
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    } else {
      setVerified(false);
    }
  }

  function logged(user) {
    return (
      <Switch>
        <Route
          path="/comments"
          component={() => <CommentsPage isSecure={secure} />}
        />
        <Route
          path="/list"
          component={() =>
            user ? (
              <ListPage isSecure={secure} />
            ) : (
              <StartPage isSecure={secure} />
            )
          }
        />
        <Route path="/" component={() => <StartPage isSecure={secure} />} />
      </Switch>
    );
  }
}

export default App;
