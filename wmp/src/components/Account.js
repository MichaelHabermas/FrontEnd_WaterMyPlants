import React, { useState, useEffect } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { axiosWithAuth } from '../utils/axiosWithAuth';

function Account(props) {
	const [personToEdit, setPersonToEdit] = useState({});
	const [message, setMessage] = useState('');

	useEffect(() => {
		setMessage('');
		axiosWithAuth()
			.get(`https://ft-water-my-plants-3.herokuapp.com/api/users/${props.userId}`)
			.then(res => {
				console.log('user info: ', res);
				setPersonToEdit({
					username: props.userInfo.username,
					phone_number: res.data.phone_number,
					password: props.userInfo.password
				});
			})
			.catch(err => {
				console.log(err);
			});
		// eslint-disable-next-line
	}, []);

	const handleChange = e => {
		setPersonToEdit({
			...personToEdit,
			[e.target.name]: e.target.value
		});
	};

	const handleSubmit = e => {
		e.preventDefault();
		axiosWithAuth()
			.put(`https://ft-water-my-plants-3.herokuapp.com/api/users/${props.userId}`, personToEdit)
			.then(res => {
				console.log(res);
				setMessage('Change Accepted!');
			})
			.catch(err => {
				console.log(err);
				setMessage('Change Rejected!');
			});
	};

	return (
		<>
			<form id="accountCardInfo" className="abox">
				<h1>Update Account</h1>
				<label>
					{' '}
					Password
					<input
						type="password"
						name="password"
						id="password"
						value={personToEdit.password}
						onChange={handleChange}
						placeholder="Password"
					/>
				</label>
				<label>
					{' '}
					Phone Number
					<input
						type="text"
						name="phone_number"
						id="phone_number"
						value={personToEdit.phone_number}
						onChange={handleChange}
						placeholder="Phone Number"
					/>
				</label>
				<h3>{message}</h3>
				<button onClick={handleSubmit}>Update Account</button>
			</form>
		</>
	);
}

const mapStateToProps = state => {
	return {
		...state,
		userId: state.userId,
		userInfo: state.userInfo
	};
};

export default connect(mapStateToProps)(Account);
