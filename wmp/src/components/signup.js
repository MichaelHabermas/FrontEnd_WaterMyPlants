import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../App.css';

import { signUp } from '../actions/index';

const initialSignUpCredentials = {
	username: '',
	password: '',
	phoneNumber: ''
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
		signUp(signUpCredentials); // this will need updating RE the PUT call
		setSignUpCredentials(initialSignUpCredentials);
		history.push('/dashboard');
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
							name="phoneNumber"
							id="phone"
							// maxLength="10"
							value={signUpCredentials.phoneNumber}
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
