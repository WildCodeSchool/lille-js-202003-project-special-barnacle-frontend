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
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
