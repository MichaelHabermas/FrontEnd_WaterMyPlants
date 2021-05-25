import React from 'react';
import '../App.css';
// import plantData from '../plantData';

function Plant(props) {
	const { plant } = props;

	return (
		<div>
			<h2>{plant.key}</h2>
			<div>{plant.image}</div>
			<p>{plant.species}</p>
			<p>{plant.nickname}</p>
			<p>{plant.h2o_frequency}</p>
		</div>
	);
}

export default Plant;
