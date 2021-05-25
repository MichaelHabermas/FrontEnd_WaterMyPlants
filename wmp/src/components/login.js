import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

const initialCredentials = {
	username: '',
	password: ''
};

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
		axios
			.post('https://ft-water-my-plants-3.herokuapp.com/api/users/login', credentials)
			.then(res => {
				console.log('LOGIN RES: ', res);
				localStorage.setItem('token', res.data.token);
				setCredentials(initialCredentials);
				history.push('/dashboard');
			})
			.catch(err => {
				console.log(err);
			});
	};

	return (
		<div className="login-container">
			<div className="Form">
				<h2>Login Credentials</h2>
				<form onSubmit={submitLogin} id="login">
					<label>
						{' '}
						Name:
						<input
							type="text"
							name="username"
							id="name-input"
							value={credentials.username}
							onChange={handleChange}
						/>
					</label>
					<br />
					<label>
						{' '}
						Password:
						<input
							type="password"
							name="password"
							id="password-input"
							minLength="5"
							value={credentials.password}
							onChange={handleChange}
						/>
					</label>
					<br />
					<div className="submit">
						<button id="login-btn">Login!</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Login;
