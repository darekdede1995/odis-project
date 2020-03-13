import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StartPage from "components/startPage.component";
import ListPage from "components/listPage.component";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route path="/list" component={ListPage} />
            <Route path="/" component={StartPage} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
