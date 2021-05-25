// import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';
// export const SIGN_UP = 'SIGN_UP';
// export const LOG_IN = 'LOG_IN';

export const fetchPlants = () => {
	return dispatch => {
		dispatch(fetchStart());
		// dispatch({ type: FETCH_START });

		// axios
		axiosWithAuth()
			.get('') // get plants address
			.then(res => {
				console.log('RES: ', res.data);
				dispatch(fetchSuccess(res.data));
				// dispatch({ type: FETCH_SUCCESS, payload: res.data });
			})
			.catch(err => {
				console.log('ERR: ', err);
				dispatch(fetchFail(err));
				// dispatch({ type: FETCH_FAIL, payload: err });
			});
	};
};

// export const signUp = signUpInfo => {
// 		axios
// 			.post('http://localhost:5000/api/login', signUpInfo) // replace server location and endpoint
// 			.then(res => {
// 				localStorage.setItem('token', res.data.payload);
// 				this.props.history.push('/dashboard');
// 			})
// 			.catch(err => {
// 				console.log(err);
// 				// dispatch(fetchFail(err));
// 			});

// 	// return { type: SIGN_UP, payload: signUpInfo };
// };

// export const logIn = credentials => {
// 	axios
// 		.post('http://localhost:5000/api/login', credentials) // replace server location and endpoint
// 		.then(res => {
// 			localStorage.setItem('token', res.data.payload);
// 			this.props.history.push('/dashboard');
// 		})
// 		.catch(err => {
// 			console.log(err);
// 		});

// 	return { type: LOG_IN, payload: credentials };
// };

export const fetchStart = () => {
	return { type: FETCH_START };
};
export const fetchSuccess = plant => {
	return { type: FETCH_SUCCESS, payload: plant };
};
export const fetchFail = error => {
	return { type: FETCH_FAIL, payload: error };
};
