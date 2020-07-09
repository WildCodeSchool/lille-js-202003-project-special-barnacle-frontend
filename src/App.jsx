import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Apropos from './components/Apropos';
import Header from './components/Header';
import Homepage from './components/Homepage';
import Footer from './components/Footer';
import Question1 from './components/form/question/1';
import Question2 from './components/form/question/2';
import Question3 from './components/form/question/3';
import Question5 from './components/form/question/5';
import Question5a from './components/form/question/5a';
import Question5b from './components/form/question/5b';
import Question6 from './components/form/question/6';
import QuestionExemple3 from './components/form/question/exemple3';
import QuestionExemple3a from './components/form/question/exemple3a';
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
          <Route path="/offer" component={() => <div>offer</div>} />
          <Route path="/project" component={() => <div>Votre projet</div>} />
          <Route path="/contact" component={() => <div>contact</div>} />
          <Route path="/user/:id" component={() => <div>user</div>} />
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
          <Route exact path="/QuestionExemple3">
            <QuestionExemple3 />
          </Route>
          <Route exact path="/QuestionExemple3a">
            <QuestionExemple3a />
          </Route>
          <Route exact path="/question5">
            <Question5 />
          </Route>
          <Route exact path="/question5a">
            <Question5a />
          </Route>
          <Route exact path="/question5b">
            <Question5b />
          </Route>
          <Route exact path="/question6">
            <Question6 />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
