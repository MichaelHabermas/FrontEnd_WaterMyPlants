import React, { useState } from 'react';
import '../App.css';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { connect } from 'react-redux';

const initialAccountInfo = {
	username: '',
	password: ''
};

function Account(props) {
	const [accountInfo, setAccountInfo] = useState(initialAccountInfo);
	const { dispatch } = props;

	const handleChange = e => {
		setAccountInfo({
			...accountInfo,
			[e.target.name]: e.target.value
		});
	};

	const handleSubmit = e => {
		e.preventDefault();
		axiosWithAuth()
			.post(`https://ft-water-my-plants-3.herokuapp.com/api/plants/user/${props.userId}`, accountInfo) // fix this
			.then(res => {
				// dispatch(addPlant(newPlant));
				// setNewPlant(initialPlant);
			})
			.catch(err => {
				console.log(err);
			});
	};

	return (
		<div className="newPlant">
			<div className="builder">
				<h2>Account Info</h2>
				<form onSubmit={handleSubmit} id="plant-form">
					<label>
						UserName
						<input
							type="text"
							name="username"
							id="username-input"
							value={accountInfo.username}
							onChange={handleChange}
						/>
					</label>
					<label>
						Password
						<input
							type="password"
							name="password"
							id="password-input"
							value={accountInfo.password}
							onChange={handleChange}
						/>
					</label>
					<div className="submit">
						<button id="newPlant-button">Edit</button>
					</div>
				</form>
			</div>
		</div>
	);
}

const mapStateToProps = state => {
	return {
		...state
	};
};

export default connect(mapStateToProps)(Account);
