import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../App.css';

import { logIn } from '../actions/index';

const initialCredentials = {
	username: '',
	password: ''
};

<<<<<<< HEAD
function Login() {
  const [credentials, setCredentials] = useState(initialCredentials);

	const history = useHistory();

	const handleChange = e => {
		setCredentials({
			...credentials,
			[e.target.name]: e.target.value
		});
	};

	const submitLogin = e => {
		e.preventDefault();
		logIn(credentials); // this will need updating RE the PUT call
		history.push('/dashboard');
	};

  return (
      <div className='login-container'>
           <div className='Form'>
               <h2>Login Credentials</h2>
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
// export default connect(null, {})(Login);
=======
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
>>>>>>> 3d6789a7e9fde662c43c972e923df8e1c42df859
