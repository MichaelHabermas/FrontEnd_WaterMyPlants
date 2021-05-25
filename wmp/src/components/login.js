import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../App.css';

import { logIn } from '../actions/index';

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
		logIn(credentials); // this will need updating RE the PUT call
		history.push('/dashboard');
	};

	return <h1>Testing Login</h1>;
}

export default Login;
// export default connect(null, {})(Login);
