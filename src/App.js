import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import HomePage from "./pages/homepage/HomePage";
import Test from "./pages/Test";
import SignInSignUp from "./pages/sign-in-and-sign-up/SignInAndSignUp";
import Error404 from "./pages/404/Error404";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import "./App.css";

const App = () => {
  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/test">
            <Test />
          </Route>
          <Route
            exact
            path="/signin"
            render={() =>
              1 === false ? <Redirect to="/" /> : <SignInSignUp />
            }
          />
          <Route path="*">
            <Error404 />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
