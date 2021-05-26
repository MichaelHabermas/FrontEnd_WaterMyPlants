import React from 'react';
import '../App.css';
import plantDefault from '../plant.png';

function Plant(props) {
	const { plant } = props;

	return (
		<div className="card-container">
			<h3>{plant.plant_owner}</h3>
			<img className="plant-pic" src={plant.image || plantDefault} alt="plant" />
			<p>Species: {plant.species}</p>
			<p>Nickname: {plant.nickname}</p>
			<p>Water Frequency: {plant.h2o_frequency}</p>
		</div>
	);
}

export default Plant;
