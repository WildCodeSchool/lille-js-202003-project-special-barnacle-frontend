import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Apropos from './components/Apropos';
import Contact from './components/form/Contact';
import Header from './components/Header';
import Homepage from './components/Homepage';
import Footer from './components/Footer';
import Form from './components/form/Form';
import NosOffres from './components/NosOffres';
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
          <Route path="/form" component={Form} />
          <Route path="/offer" component={NosOffres} />
          <Route path="/contact" component={Contact} />
          <Route path="/user/:id" component={() => <div>user</div>} />
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
