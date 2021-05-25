import React, { useState, useEffect } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import '../App.css';

function Dashboard() {
	return <h1>Testing Dashboard</h1>;
}

// export default Dashboard;
export default connect(null, {})(Dashboard);
