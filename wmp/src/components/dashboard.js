import React, { useState, useEffect } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import '../App.css';
import { plantData } from './plantData'

function Dashboard() {
	render() {
		const plant = plantData[0]
		return (
			<div>
				<Plant
					id = {plant.id}
					title = {plant.title}
				/>
			</div>
		)
	}
}

export default Dashboard;
// export default connect(null, {})(Dashboard);
