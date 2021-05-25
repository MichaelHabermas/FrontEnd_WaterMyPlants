import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../App.css';

import axios from 'axios';

const initialSignUpCredentials = {
	username: '',
	password: '',
	phone_number: ''
};

function Signup() {
	const [signUpCredentials, setSignUpCredentials] = useState(initialSignUpCredentials);
	const history = useHistory();

	const handleChange = e => {
		setSignUpCredentials({
			...signUpCredentials,
			[e.target.name]: e.target.value
		});
	};

	const handleSignUp = e => {
		e.preventDefault();
		axios
			.post('https://ft-water-my-plants-3.herokuapp.com/api/users/register', signUpCredentials)
			.then(res => {
				console.log('SIGN_UP RES: ', res);
				axios
					.post('https://ft-water-my-plants-3.herokuapp.com/api/users/login', {
						username: signUpCredentials.username,
						password: signUpCredentials.password
					})
					.then(res => {
						// console.log('LOGIN RES: ', res);
						localStorage.setItem('token', res.data.token);
						// setCredentials(initialCredentials);
						setSignUpCredentials(initialSignUpCredentials);
						history.push('/dashboard');
					})
					.catch(err => {
						console.log('ERROR: ', err.message);
					});
			})
			.catch(err => {
				console.log('ERROR: ', err.message);
			});
	};

	return (
		<div className="signup-container">
			<div className="Form">
				<h2>Sign up for Water My Plants Today!</h2>
				<form id="signup" onSubmit={handleSignUp}>
					<label>
						{' '}
						Name
						<input
							type="text"
							name="username"
							id="name-input"
							value={signUpCredentials.username}
							onChange={handleChange}
						/>
					</label>
					<br />
					<label>
						{' '}
						Password
						<input
							type="password"
							name="password"
							id="password-input"
							minLength="5"
							value={signUpCredentials.password}
							onChange={handleChange}
						/>
					</label>

					<br />
					<label>
						{' '}
						Phone Number
						<input
							type="tel"
							name="phone_number"
							id="phone"
							// maxLength="10"
							value={signUpCredentials.phone_number}
							onChange={handleChange}
						/>
					</label>
					<br />

					<div className="submit">
						<button id="signup-btn">Create Account!</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Signup;
// export default connect(null, {})(Signup);
