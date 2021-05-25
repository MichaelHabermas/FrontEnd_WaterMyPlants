import React, { useState, useEffect } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import '../App.css';
import NewPlant from './newPlantForm'

function Dashboard() {
	return (
        <NewPlant />
    )
}

export default Dashboard;
// export default connect(null, {})(Dashboard);
