import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Apropos from './components/Apropos';
import Header from './components/Header';
import Homepage from './components/Homepage';
import Footer from './components/Footer';
import Question1 from './components/form/question/1';
import Question2 from './components/form/question/2';
import Question3 from './components/form/question/3';
import Question4 from './components/form/question/4';
import Question4a from './components/form/question/4a';
import Question5 from './components/form/question/5';
import Question5a from './components/form/question/5a';
import Question5b from './components/form/question/5b';
import Question6 from './components/form/question/6';
import Question7 from './components/form/question/7';
import Question7a from './components/form/question/7a';
import Question7b from './components/form/question/7b';
import Question10 from './components/form/question/10';
import Question10a from './components/form/question/10a';
import Question10b from './components/form/question/10b';
import Question11 from './components/form/question/11';

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
          <Route exact path="/question4">
            <Question4 />
          </Route>
          <Route exact path="/question4a">
            <Question4a />
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
          <Route exact path="/question7">
            <Question7 />
          </Route>
          <Route exact path="/question7a">
            <Question7a />
          </Route>
          <Route exact path="/question7b">
            <Question7b />
          </Route>
          <Route exact path="/question10">
            <Question10 />
          </Route>
          <Route exact path="/question10a">
            <Question10a />
          </Route>
          <Route exact path="/question10b">
            <Question10b />
          </Route>
          <Route exact path="/question11">
            <Question11 />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
