import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import "./App.css";
import Signup from "./components/signup";
import Login from "./components/login";
import Dashboard from "./components/dashboard";
import PrivateRoute from "./components/privateroute";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="container">
          <div className="nav">
            <div className="logo">WMP</div>
            <div className="menu">
              <ul className="navMenu">
                <Link to="/">
                  <li>
                    <a href="#0">Home</a>
                  </li>
                </Link>

                <Link to="/login" id="login">
                  <li>
                    <a href="#0">Login</a>
                  </li>
                </Link>
                <Link to="/signup" id="signup">
                  <li>
                    <a href="#0">Sign Up</a>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
          <Switch>
            <Route path="/signup">
              <Signup />
            </Route>
            <PrivateRoute path="/dashboard" component={Dashboard} />

            <Route path="/login">
              <Login />
            </Route>

            <Route
              path="/"
              render={(props) => {
                return (
                  <div className="header">
                    <h1>Water My Plants</h1>
                    <p>
                      We remember to water your plants, so you don't have to.
                    </p>
                    <Link to="/signup">
                      <button className="button">Get Started</button>
                    </Link>
                  </div>
                );
              }}
            />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
