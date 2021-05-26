import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../App.css';
import axios from 'axios';
import { connect } from 'react-redux';

import { logIn } from '../actions/index';

const initialSignUpCredentials = {
	username: '',
	password: '',
	phone_number: ''
};

function Signup(props) {
	const [signUpCredentials, setSignUpCredentials] = useState(initialSignUpCredentials);
	const history = useHistory();
	const { dispatch } = props;

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
				axios
					.post('https://ft-water-my-plants-3.herokuapp.com/api/users/login', {
						username: signUpCredentials.username,
						password: signUpCredentials.password
					})
					.then(res => {
						localStorage.setItem('token', res.data.token);
						setSignUpCredentials(initialSignUpCredentials);
						dispatch(logIn());
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
		<form id="signup" onSubmit={handleSignUp} className="sbox">
			<h1>Sign Up</h1>

			<label>
				{' '}
				Name
				<input
					type="text"
					name="username"
					id="name-input"
					value={signUpCredentials.username}
					onChange={handleChange}
					placeholder="Username"
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
					placeholder="Password"
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
					placeholder="Phone Number"
				/>
			</label>
			<br />

			<button id="signup-btn">Create Account</button>
		</form>
	);
}

// export default Signup;

const mapStateToProps = state => {
	return {
		...state,
		isLoggedIn: state.isLoggedIn
	};
};

export default connect(mapStateToProps)(Signup);
