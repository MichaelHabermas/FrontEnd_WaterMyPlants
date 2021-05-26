import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { axiosWithAuth } from '../utils/axiosWithAuth';

const initialPlant = {
	nickname: '',
	h2o_frequency: '',
	image: '',
	species: ''
};

export default function NewPlant() {
	const [newPlant, setNewPlant] = useState(initialPlant);
	const history = useHistory();

	const handleChange = e => {
		setNewPlant({
			...newPlant,
			[e.target.name]: e.target.value
		});
	};

	const handleSubmit = e => {
		e.preventDefault();
		axiosWithAuth()
			.post('https://ft-water-my-plants-3.herokuapp.com/api/users/-------', newPlant)
			.then(res => {
				// localStorage.setItem('token', res.data.token);
				setNewPlant(initialPlant);
				history.push('/dashboard');
			})
			.catch(err => {
				console.log(err);
			});
	};

	return (
		<div className="newPlant">
			<div className="builder">
				<h2>Add a new Plant!</h2>
				<form onSubmit={handleSubmit} id="plant-form">
					<label>
						{' '}
						Plant's Nickname
						<input
							type="text"
							name="nickname"
							id="nickname-input"
							// value={newPlant.nickname}
							onChange={handleChange}
						/>
					</label>
					<label>
						{' '}
						Species
						<input
							type="text"
							name="species"
							id="species-input"
							// value={newPlant.species}
							onChange={handleChange}
						/>
					</label>
					<label>
						{' '}
						Picture for our new friend:
						<input
							type="file"
							name="image"
							id="image-input"
							// value={newPlant.image}
							onChange={handleChange}
						/>
					</label>
					<div className="submit">
						<button id="newPlant-button">Add New Plant!</button>
					</div>
				</form>
			</div>
		</div>
	);
}
