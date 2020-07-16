import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Apropos from './components/Apropos';
import Header from './components/Header';
import Homepage from './components/Homepage';
import Footer from './components/Footer';
import Question1 from './components/form/question/part-1/1';
import Question2 from './components/form/question/part-1/2';
import Question3 from './components/form/question/part-1/3';
import Question4 from './components/form/question/part-1/4';
import Question4a from './components/form/question/part-1/4a';
import Question5 from './components/form/question/part-1/5';
import Question5a from './components/form/question/part-1/5a';
import Question5b from './components/form/question/part-1/5b';
import Question6 from './components/form/question/part-1/6';
import Question7 from './components/form/question/part-1/7';
import Question7a from './components/form/question/part-1/7a';
import Question7b from './components/form/question/part-1/7b';
import Question8 from './components/form/question/part-1/8';
import Question8a from './components/form/question/part-1/8a';
import Question9 from './components/form/question/part-1/9';
import Question10 from './components/form/question/part-1/10';
import Question10a from './components/form/question/part-1/10a';
import Question10b from './components/form/question/part-1/10b';
import Question11 from './components/form/question/part-1/11';
import Question12 from './components/form/question/part-1/12';
import Question14 from './components/form/question/part-1/14';
import Question15 from './components/form/question/part-1/15';
import Question16 from './components/form/question/part-1/16';
import Question16a from './components/form/question/part-1/16a';
import Question16b from './components/form/question/part-1/16b';
import Question17 from './components/form/question/part-1/17';
import Question18 from './components/form/question/part-1/18';
import Question18a from './components/form/question/part-1/18a';
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
          <Route exact path="/question8">
            <Question8 />
          </Route>
          <Route exact path="/question8a">
            <Question8a />
          </Route>
          <Route exact path="/question9">
            <Question9 />
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
          <Route exact path="/question12">
            <Question12 />
          </Route>
          <Route exact path="/question14">
            <Question14 />
          </Route>
          <Route exact path="/question15">
            <Question15 />
          </Route>
          <Route exact path="/question16">
            <Question16 />
          </Route>
          <Route exact path="/question16a">
            <Question16a />
          </Route>
          <Route exact path="/question16b">
            <Question16b />
          </Route>
          <Route exact path="/question17">
            <Question17 />
          </Route>
          <Route exact path="/question18">
            <Question18 />
          </Route>
          <Route exact path="/question18a">
            <Question18a />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
