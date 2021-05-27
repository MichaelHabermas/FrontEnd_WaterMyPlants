import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import "./App.css";
import { connect } from "react-redux";

import Signup from "./components/signup";
import Login from "./components/login";
import Dashboard from "./components/dashboard";
import PrivateRoute from "./components/privateroute";

import { logOut } from "./actions/index";

function App(props) {
  const { isLoggedIn, dispatch } = props;

  const handleLogout = () => {
    dispatch(logOut());
  };

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

                {isLoggedIn ? (
                  <>
                    <Link to="/" id="logout" onClick={handleLogout}>
                      <li>
                        <a href="#0">Logout</a>
                      </li>
                    </Link>
                  </>
                ) : (
                  <>
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
                  </>
                )}
              </ul>
            </div>
          </div>
          <Switch>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/dashboard" component={Dashboard} />

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

// export default App;

const mapStateToProps = (state) => {
  return {
    ...state,
    isLoggedIn: state.isLoggedIn,
  };
};

export default connect(mapStateToProps)(App);
