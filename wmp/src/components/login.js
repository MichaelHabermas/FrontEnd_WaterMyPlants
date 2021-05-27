import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../App.css";
import axios from "axios";
import { connect } from "react-redux";

import { logIn } from "../actions/index";

const initialCredentials = {
  username: "",
  password: "",
};

function Login(props) {
  const [credentials, setCredentials] = useState(initialCredentials);
  const history = useHistory();
  const { dispatch } = props;

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const submitLogin = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://ft-water-my-plants-3.herokuapp.com/api/users/login",
        credentials
      )
      .then((res) => {
        console.log("logged in:", res);
        dispatch(logIn(res.data.user_id));
        localStorage.setItem("token", res.data.token);
        setCredentials(initialCredentials);
        history.push("/dashboard");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form onSubmit={submitLogin} id="login" className="box">
      <h1>Login Here</h1>

      <label>
        {" "}
        Name
        <input
          type="text"
          name="username"
          id="name-input"
          value={credentials.username}
          onChange={handleChange}
          placeholder="Username"
        />
      </label>
      <br />
      <label>
        {" "}
        Password
        <input
          type="password"
          name="password"
          id="password-input"
          minLength="5"
          value={credentials.password}
          onChange={handleChange}
          placeholder="Password"
        />
      </label>
      <br />

      <button id="login-btn">Login</button>
    </form>
  );
}

// export default Login;

const mapStateToProps = (state) => {
  return {
    ...state,
    isLoggedIn: state.isLoggedIn,
  };
};

export default connect(mapStateToProps)(Login);
