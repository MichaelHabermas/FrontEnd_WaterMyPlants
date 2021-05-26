import React from 'react';
import '../App.css';
import plantDefault from '../plant.png';

function Plant(props) {
	const { plant } = props;

	return (
		<div>
			<h2>{plant.key}</h2>
			<img className="plant-pic" src={plant.image || plantDefault} alt="plant" />
			<p>{plant.species}</p>
			<p>{plant.nickname}</p>
			<p>{plant.h2o_frequency}</p>
		</div>
	);
}

export default Plant;
