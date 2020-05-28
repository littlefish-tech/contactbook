import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Navbar from "./components/layout/Navbar"
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import ContactState from "./context/contact/ContactState"
import AuthState from "./context/auth/AuthState";
import Register from "./components/auth/Register"
import './App.css';
import authContext from './context/auth/authContext';

const App = () => {

  return (
    <authContext>
      <ContactState>
        <Router>
          <Fragment>
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/Register" component={Register} />
              </Switch>
            </div>
          </Fragment>
        </Router>
      </ContactState>
    </authContext>
  );
}

export default App;
