import React from 'react';
import '../App.css';
import plantDefault from '../plant.png';
import { connect } from 'react-redux';
import { editPlant } from '../actions/index';
import { deletePlant } from '../actions/index';

function Plant(props) {
	const { plant, dispatch } = props;

	const handleEdit = () => {
		console.log('working');
		dispatch(editPlant());
	};

	const handleDelete = () => {
		console.log('working');
		dispatch(deletePlant());
	};

	return (
		<div className="card-container">
			<h3>{plant.plant_owner}</h3>
			<img className="plant-pic" src={plant.image || plantDefault} alt="plant" />
			<p>Species: {plant.species}</p>
			<p>Nickname: {plant.nickname}</p>
			<p>Water Frequency: {plant.h2o_frequency}</p>
			<button onClick={handleEdit}>Edit</button>
			<button onClick={handleDelete}>Delete</button>
		</div>
	);
}

const mapStateToProps = state => {
	return {
		...state,
		plantData: state.plantData,
		isLoggedIn: state.isLoggedIn
	};
};

export default connect(mapStateToProps)(Plant);
