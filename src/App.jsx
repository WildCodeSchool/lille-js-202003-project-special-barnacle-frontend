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
import Question44 from './components/form/question/part-4/44';
import Question45 from './components/form/question/part-4/45';
import Question46 from './components/form/question/part-4/46';
import Question47 from './components/form/question/part-4/47';
import Question47a from './components/form/question/part-4/47a';
import Question48 from './components/form/question/part-4/48';
import Question49a from './components/form/question/part-4/49a';
import Question49b from './components/form/question/part-4/49b';
import Question49c from './components/form/question/part-4/49c';
import Question49d from './components/form/question/part-4/49d';
import Question50 from './components/form/question/part-4/50';
import Question51 from './components/form/question/part-4/51';
import Question52 from './components/form/question/part-4/52';
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
          <Route exact path="/question44">
            <Question44 />
          </Route>
          <Route exact path="/question45">
            <Question45 />
          </Route>
          <Route exact path="/question46">
            <Question46 />
          </Route>
          <Route exact path="/question47">
            <Question47 />
          </Route>
          <Route exact path="/question47a">
            <Question47a />
          </Route>
          <Route exact path="/question48">
            <Question48 />
          </Route>
          <Route exact path="/question49a">
            <Question49a />
          </Route>
          <Route exact path="/question49b">
            <Question49b />
          </Route>
          <Route exact path="/question49c">
            <Question49c />
          </Route>
          <Route exact path="/question49d">
            <Question49d />
          </Route>
          <Route exact path="/question50">
            <Question50 />
          </Route>
          <Route exact path="/question51">
            <Question51 />
          </Route>
          <Route exact path="/question52">
            <Question52 />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
