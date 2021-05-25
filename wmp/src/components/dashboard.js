import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import '../App.css';

import { fetchPlants } from '../actions/index';

function Dashboard(props) {
	const { plantData, dispatch } = props;

	useEffect(() => {
		dispatch(fetchPlants());
		// eslint-disable-next-line
	}, []);

	return (
		<div>
			{plantData.map(plant => {
				return <h1 key={plant.id}>{plant.id}</h1>;
			})}
		</div>
	);
}

const mapStateToProps = state => {
	return {
		...state,
		plantData: state.plantData
	};
};

export default connect(mapStateToProps)(Dashboard);
