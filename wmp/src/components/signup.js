import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from "react-router-dom";
import "../App.css";

function Signup() {
   return (
       <div className='signup-container'>
            <div className='Form'>
                <h2>Sign up for Water My Plants Today!</h2>
                <form id='signup'>
                    <label> Name
                    <input 
                        type='text'
                        name='name'
                        id='name-input'
                    />
                    </label>
                    <br/>
                    <label> Password
                        <input 
                            type='password'
                            name='password'
                            id='password-input'
                            minLength='5'
                        />
                    </label>
                    
                    <br/>
                    <label> Phone Number 
                        <input 
                            type='text'
                            name='phone'
                            id='phone'
                            maxLength='10'
                        />
                    </label>
                    <br/>

                    
                    <div className='submit'>
                        <button id='signup-btn' >Create Account!</button>
                    </div>

                </form>
            </div>
       </div>
    
    )

}

export default Signup;
