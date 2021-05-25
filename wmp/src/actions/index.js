import { axiosWithAuth } from '../utils/axiosWithAuth';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';

export const fetchPlants = () => {
	return dispatch => {
		// dispatch(fetchStart());

		dispatch({ type: FETCH_START });

		axiosWithAuth()
			.get('https://ft-water-my-plants-3.herokuapp.com/api/plants')
			.then(res => {
				console.log('RES: ', res.data);
				// dispatch(fetchSuccess(res.data));
				dispatch({ type: FETCH_SUCCESS, payload: res.data });
			})
			.catch(err => {
				console.log('ERR: ', err);
				// dispatch(fetchFail(err));
				dispatch({ type: FETCH_FAIL, payload: err });
			});
	};
};

export const fetchStart = () => {
	return { type: FETCH_START };
};
export const fetchSuccess = plants => {
	return { type: FETCH_SUCCESS, payload: plants };
};
export const fetchFail = error => {
	return { type: FETCH_FAIL, payload: error };
};
