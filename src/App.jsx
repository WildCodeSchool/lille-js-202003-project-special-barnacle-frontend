import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Homepage from './components/Homepage';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/about" component={() => <div>about</div>} />
          <Route path="/offer" component={() => <div>offer</div>} />
          <Route exact path="/" component={() => <div>Home</div>} />
          <Route path="/project" component={() => <div>Votre projet</div>} />
          <Route path="/contact" component={() => <div>contact</div>} />
          <Route path="/user/:id" component={() => <div>user</div>} />
        </Switch>
        <Homepage />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
