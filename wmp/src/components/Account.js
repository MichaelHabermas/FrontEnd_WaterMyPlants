import React from 'react';
import '../App.css';
import { connect } from 'react-redux';

function Account() {
	return (
		<div>
			<h1>Account Page</h1>
		</div>
	);
}

const mapStateToProps = state => {
	return {
		...state
	};
};

export default connect(mapStateToProps)(Account);
