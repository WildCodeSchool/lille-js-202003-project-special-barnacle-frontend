import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Apropos from './components/Apropos';
import Header from './components/Header';
import Homepage from './components/Homepage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/about">
            <Apropos />
          </Route>
          <Route path="/offer" component={() => <div>offer</div>} />
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/project" component={() => <div>Votre projet</div>} />
          <Route path="/contact" component={() => <div>contact</div>} />
          <Route path="/user/:id" component={() => <div>user</div>} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
