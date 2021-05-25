import React from 'react';
// import { connect } from 'react-redux';
import '../App.css';
import Plant from './Plant'
import plantData from '../plantData'

function Dashboard() {
		return (
			<div className='plants'>
				<h2>Plant Card</h2>
				{
				plantData.map(plant => {
					return (
						<Plant />
					)
				})
				}
			</div>
		)
}

export default Dashboard;
// export default connect(null, {})(Dashboard);
