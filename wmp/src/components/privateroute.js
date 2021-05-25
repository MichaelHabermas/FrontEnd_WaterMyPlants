import React from 'react';
import { Route, useHistory, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component }, ...rest) => {
	const history = useHistory();

	return (
		<Route
			{...rest}
			render={props => {
				localStorage.getItem('token') ? <Component {...rest} {...props} /> : history.push('./login');
				// localStorage.getItem('token') ? <Component {...rest} {...props} /> : <Redirect to="/login" />;
			}}
		/>
	);
};

export default PrivateRoute;
