import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import StartPage from './components/startPage.component';
import SecuritySwitch from './components/securitySwitch.component';
import SecurityList from './components/securityList.component';
import ListPage from './components/listPage.component';
import CommentsPage from './components/commentsPage/commentsPage.component';
import './App.css';

function App() {
  return (
    <div className="App">
      <SecuritySwitch />
      <SecurityList />
      <BrowserRouter>
        <Switch>
          <Route path="/comments" component={CommentsPage} />
          <Route path="/list" component={ListPage} />
          <Route path="/" component={StartPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
