import React, { useState } from 'react';
import { connect } from 'react-redux';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { addPlant } from '../actions/index';

const initialPlant = {
	nickname: '',
	h2o_frequency: '',
	image: null,
	species: ''
};

function NewPlant(props) {
	const [newPlant, setNewPlant] = useState(initialPlant);
	const { dispatch } = props;

	const handleChange = e => {
		setNewPlant({
			...newPlant,
			[e.target.name]: e.target.value
		});
	};

	const handleSubmit = e => {
		e.preventDefault();
		axiosWithAuth()
			.post(`https://ft-water-my-plants-3.herokuapp.com/api/plants/user/${props.userId}`, newPlant)
			.then(res => {
				dispatch(addPlant(newPlant));
				setNewPlant(initialPlant);
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
						Species
						<input
							type="text"
							name="species"
							id="species-input"
							value={newPlant.species}
							onChange={handleChange}
						/>
					</label>
					<label>
						{' '}
						Plant's Nickname
						<input
							type="text"
							name="nickname"
							id="nickname-input"
							value={newPlant.nickname}
							onChange={handleChange}
						/>
					</label>
					<label>
						{' '}
						Water Frequency
						<input
							type="text"
							name="h2o_frequency"
							id="water-input"
							value={newPlant.h2o_frequency}
							onChange={handleChange}
						/>
					</label>
					<div className="submit">
						<button id="newPlant-button">Add Plant!</button>
					</div>
				</form>
			</div>
		</div>
	);
}

const mapStateToProps = state => {
	return {
		...state,
		plantData: state.plantData,
		isLoggedIn: state.isLoggedIn,
		userId: state.userId
	};
};

export default connect(mapStateToProps)(NewPlant);
