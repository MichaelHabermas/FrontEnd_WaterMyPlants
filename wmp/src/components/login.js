import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from "react-router-dom";
import "../App.css";





function Login() {
  return (
      <div className='login-container'>
           <div className='Form'>
               <h2>Sign up for Water My Plants Today!</h2>
               <form id='login'>
                   <label> Name:
                   <input 
                       type='text'
                       name='name'
                       id='name-input'
                   />
                   </label>
                   <br/>
                   <label> Password:
                       <input 
                           type='password'
                           name='password'
                           id='password-input'
                           minLength='5'
                       />
                   </label>
                   <br/>
                   <div className='submit'>
                       <button id='login-btn'>Login!</button>
                   </div>

               </form>
           </div>
      </div>
   
   )

}

export default Login;
