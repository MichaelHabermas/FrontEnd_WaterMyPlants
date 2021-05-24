
import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import "./App.css";
import Signup from "./components/signup";
import Login from "./components/login";
import Dashboard from "./components/dashboard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav class="nav main-nav">
          <Link to="/">Home</Link>
          <Link to="/signup" id="signup">
            Sign Up
          </Link>
          <Link to="/login" id="login">
            Log In
          </Link>
        </nav>
      </header>

      <Switch>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route exact path="/dashboard" component={Dashboard} />
        <Route path="/login">
          <Login />
        </Route>
        <Route
          path="/"
          render={(props) => {
            return (
              <>
                <h2>Learn to Water your plants properly!</h2>
                <button>
                  <Link to="/login">Log In!</Link>
                  <Link to="/signup">Sign Up</Link>
                </button>
              </>
            );
          }}
        />
      </Switch>
    </div>
  );
}

export default App;
