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
import Question19a from './components/form/question/part-2/19a';
import Question19b from './components/form/question/part-2/19b';
import Question20a from './components/form/question/part-2/20a';
import Question20b from './components/form/question/part-2/20b';
import Question20c from './components/form/question/part-2/20c';
import Question20d from './components/form/question/part-2/20d';
import Question21 from './components/form/question/part-2/21';
import Question21a from './components/form/question/part-2/21a';
import Question22 from './components/form/question/part-2/22';
import Question22a from './components/form/question/part-2/22a';
import Question22b from './components/form/question/part-2/22b';
import Question22c from './components/form/question/part-2/22c';
import Question23a from './components/form/question/part-2/23a';
import Question23b from './components/form/question/part-2/23b';
import Question24 from './components/form/question/part-2/24';
import Question25 from './components/form/question/part-2/25';
import Question26 from './components/form/question/part-2/26';
import Question27 from './components/form/question/part-2/27';
import Question27a from './components/form/question/part-2/27a';
import Question27b1 from './components/form/question/part-2/27b1';
import Question27b2 from './components/form/question/part-2/27b2';
import Question27b3 from './components/form/question/part-2/27b3';
import Question27b4 from './components/form/question/part-2/27b4';
import Question27b5 from './components/form/question/part-2/27b5';
import Question27b6 from './components/form/question/part-2/27b6';
import Question28 from './components/form/question/part-2/28';
import Question28a from './components/form/question/part-2/28a';
import Question29 from './components/form/question/part-2/29';
import Question29a1 from './components/form/question/part-2/29a1';
import Question29a2 from './components/form/question/part-2/29a2';
import Question29a3 from './components/form/question/part-2/29a3';
import Question29a4 from './components/form/question/part-2/29a4';
import Question29a5 from './components/form/question/part-2/29a5';
import Question29a6 from './components/form/question/part-2/29a6';
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
          <Route exact path="/question3a">
            <Question3a />
          </Route>
          <Route exact path="/question19a">
            <Question19a />
          </Route>
          <Route exact path="/question19b">
            <Question19b />
          </Route>
          <Route exact path="/question20a">
            <Question20a />
          </Route>
          <Route exact path="/question20b">
            <Question20b />
          </Route>
          <Route exact path="/question20c">
            <Question20c />
          </Route>
          <Route exact path="/question20d">
            <Question20d />
          </Route>
          <Route exact path="/question21">
            <Question21 />
          </Route>
          <Route exact path="/question21a">
            <Question21a />
          </Route>
          <Route exact path="/question22">
            <Question22 />
          </Route>
          <Route exact path="/question22a">
            <Question22a />
          </Route>
          <Route exact path="/question22b">
            <Question22b />
          </Route>
          <Route exact path="/question22c">
            <Question22c />
          </Route>
          <Route exact path="/question23a">
            <Question23a />
          </Route>
          <Route exact path="/question23b">
            <Question23b />
          </Route>
          <Route exact path="/question24">
            <Question24 />
          </Route>
          <Route exact path="/question25">
            <Question25 />
          </Route>
          <Route exact path="/question26">
            <Question26 />
          </Route>
          <Route exact path="/question27">
            <Question27 />
          </Route>
          <Route exact path="/question27a">
            <Question27a />
          </Route>
          <Route exact path="/question27b1">
            <Question27b1 />
          </Route>
          <Route exact path="/question27b2">
            <Question27b2 />
          </Route>
          <Route exact path="/question27b3">
            <Question27b3 />
          </Route>
          <Route exact path="/question27b4">
            <Question27b4 />
          </Route>
          <Route exact path="/question27b5">
            <Question27b5 />
          </Route>
          <Route exact path="/question27b6">
            <Question27b6 />
          </Route>
          <Route exact path="/question28">
            <Question28 />
          </Route>
          <Route exact path="/question28a">
            <Question28a />
          </Route>
          <Route exact path="/question29">
            <Question29 />
          </Route>
          <Route exact path="/question29a1">
            <Question29a1 />
          </Route>
          <Route exact path="/question29a2">
            <Question29a2 />
          </Route>
          <Route exact path="/question29a3">
            <Question29a3 />
          </Route>
          <Route exact path="/question29a4">
            <Question29a4 />
          </Route>
          <Route exact path="/question29a5">
            <Question29a5 />
          </Route>
          <Route exact path="/question29a6">
            <Question29a6 />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
