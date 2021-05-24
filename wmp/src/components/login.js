import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from "react-router-dom";
import "../App.css";

function Signup() {
  return ( <form>
      <div className='form'>
        <h2>Login Credentials</h2>
        <label>
            Name:
            <input
                value=''
                name='name'
                type='text'
            />
        </label>
        <label>
            Password:
            <input
                value=''
                name='password'
                type='password'
            />
        </label>
      </div>
      <button id="submit-btn">Login</button>
  </form>
  )
}

export default Signup;
