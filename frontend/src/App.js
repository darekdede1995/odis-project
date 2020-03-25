import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import StartPage from './components/startPage.component';
import SecuritySwitch from './components/securitySwitch.component';
import SecurityList from './components/securitySection/securityList.component';
import ListPage from './components/listPage/listPage.component';
import CommentsPage from './components/commentsPage/commentsPage.component';
import '../src/styles/index.css';
import './App.css';
import { getFromStorage } from './utils/storage';
import { useState } from 'react';

function App() {
  const [secure, setSecure] = useState(true);
  const localStorage = getFromStorage('odis-token');

  return (
    <div className="App">
      <SecuritySwitch isSecure={secure} toggleSecure={toggleSecure} />
      <SecurityList />
      {logged(localStorage)}
    </div>
  );

  function toggleSecure(e) {
    e.preventDefault();
    const html = document.querySelector('html');

    setSecure(prev => {
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

  function logged(user) {
    if (user) {
      return (
        <BrowserRouter>
          <Switch>
            <Route
              path="/comments"
              component={() => <CommentsPage isSecure={secure} />}
            />
            <Route
              path="/list"
              component={() => <ListPage isSecure={secure} />}
            />
            <Route path="/" component={() => <ListPage isSecure={secure} />} />
          </Switch>
        </BrowserRouter>
      );
    } else {
      return (
        <BrowserRouter>
          <Route
            path="/comments"
            component={() => <CommentsPage isSecure={secure} />}
          />
          <Switch>
            <Route path="/" component={() => <StartPage isSecure={secure} />} />
          </Switch>
        </BrowserRouter>
      );
    }
  }
}

export default App;
