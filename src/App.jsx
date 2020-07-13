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
import Question34 from './components/form/question/part-3/34';
import Question35 from './components/form/question/part-3/35';
import Question36 from './components/form/question/part-3/36';
import Question37 from './components/form/question/part-3/37';
import Question38a from './components/form/question/part-3/38a';
import Question38b from './components/form/question/part-3/38b';
import Question38c from './components/form/question/part-3/38c';
import Question39a from './components/form/question/part-3/39a';
import Question39b from './components/form/question/part-3/39b';
import Question40 from './components/form/question/part-3/40';
import Question40a from './components/form/question/part-3/40a';
import Question41 from './components/form/question/part-3/41';
import Question42 from './components/form/question/part-3/42';
import Question43 from './components/form/question/part-3/43';
import Question431 from './components/form/question/part-3/431';
import Question432 from './components/form/question/part-3/432';
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
          <Route exact path="/question34">
            <Question34 />
          </Route>
          <Route exact path="/question35">
            <Question35 />
          </Route>
          <Route exact path="/question36">
            <Question36 />
          </Route>
          <Route exact path="/question37">
            <Question37 />
          </Route>
          <Route exact path="/question38a">
            <Question38a />
          </Route>
          <Route exact path="/question38b">
            <Question38b />
          </Route>
          <Route exact path="/question38c">
            <Question38c />
          </Route>
          <Route exact path="/question39a">
            <Question39a />
          </Route>
          <Route exact path="/question39b">
            <Question39b />
          </Route>
          <Route exact path="/question40">
            <Question40 />
          </Route>
          <Route exact path="/question40a">
            <Question40a />
          </Route>
          <Route exact path="/question41">
            <Question41 />
          </Route>
          <Route exact path="/question42">
            <Question42 />
          </Route>
          <Route exact path="/question43">
            <Question43 />
          </Route>
          <Route exact path="/question431">
            <Question431 />
          </Route>
          <Route exact path="/question432">
            <Question432 />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
