import React from 'react';
// import { connect } from 'react-redux';
import '../App.css';
import { plantData } from './plantData';

function Dashboard() {
	const plant = plantData[0];
	return <div>{/* <Plant id={plant.id} title={plant.title} /> */}</div>;
}

export default Dashboard;
// export default connect(null, {})(Dashboard);
