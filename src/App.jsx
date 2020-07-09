import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Apropos from './components/Apropos';
import Header from './components/Header';
import Homepage from './components/Homepage';
import Footer from './components/Footer';
import Question1 from './components/form/Question1';
import Question2 from './components/form/Question2';
import Question3 from './components/form/Question3';
import Question3a from './components/form/Question3a';
import Form from './components/form/Form';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/about">
            <Apropos />
          </Route>
          <Route path="/form">
            <Form />
          </Route>
          <Route exact path="/question1">
            <Question1 />
          </Route>
          <Route exact path="/question2">
            <Question2 />
          </Route>
          <Route exact path="/question3">
            <Question3 />
          </Route>
          <Route exact path="/question3a">
            <Question3a />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
