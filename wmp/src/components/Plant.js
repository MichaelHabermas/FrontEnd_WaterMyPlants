import React, { useState } from 'react';
import '../App.css';
import plantDefault from '../plant.png';
import { connect } from 'react-redux';
import { startEditing, cancelUpdate, updatePlant, deletePlant } from '../actions/index';

import { axiosWithAuth } from '../utils/axiosWithAuth';

function Plant(props) {
	const { plant, dispatch, key } = props;
	const [plantToEdit, setPlantToEdit] = useState(plant);

	const handleChange = e => {
		setPlantToEdit({
			...plantToEdit,
			[e.target.name]: e.target.value
		});
	};

	const handleStartEditing = () => {
		dispatch(startEditing());
	};

	const handleEditSubmit = () => {
		axiosWithAuth()
			.put(`https://ft-water-my-plants-3.herokuapp.com/api/plants/${plant.plant_id}`)
			.then(res => {
				console.log(res);
				const newPlantList = props.plantData.map(item => {
					if (item.plant_id === plantToEdit.plant_id) {
						return plantToEdit;
					} else {
						return item;
					}
				});
				dispatch(updatePlant(newPlantList));
			})
			.then(res => {
				console.log(res);
			});
	};

	const handleDelete = () => {
		console.log('working');
		axiosWithAuth()
			.delete(`https://ft-water-my-plants-3.herokuapp.com/api/plants/${props.userId}/${plant.plant_id}`)
			.then(res => {
				console.log(res);
				const newPlantData = props.plantData.filter(item => item.plant_id !== plant.plant_id);
				dispatch(deletePlant(newPlantData));
			})
			.catch(err => {
				console.log(err);
			});
	};

	return (
		<div className="card-container" key={key}>
			<h3>{plant.plant_owner}</h3>
			<img className="plant-pic" src={plant.image || plantDefault} alt="plant" />

			{props.isEditing ? (
				<>
					<form id="plant-form">
						<label>
							{' '}
							Species
							<input
								type="text"
								name="species"
								id="species-input"
								value={plantToEdit.species}
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
								value={plantToEdit.nickname}
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
								value={plantToEdit.h2o_frequency}
								onChange={handleChange}
							/>
						</label>
						<button onClick={handleEditSubmit}>Update</button>
						<button>Cancel</button>
					</form>
				</>
			) : (
				<>
					<p>Species: {plant.species}</p>
					<p>Nickname: {plant.nickname}</p>
					<p>Water Frequency: {plant.h2o_frequency}</p>
					<button onClick={handleStartEditing}>Edit</button>
					<button onClick={handleDelete}>Delete</button>
				</>
			)}
		</div>
	);
}

const mapStateToProps = state => {
	return {
		...state,
		plantData: state.plantData,
		isLoggedIn: state.isLoggedIn,
		isEditing: state.isEditing,
		userId: state.userId
	};
};

export default connect(mapStateToProps)(Plant);
