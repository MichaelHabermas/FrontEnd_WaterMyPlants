import { axiosWithAuth } from '../utils/axiosWithAuth';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';
export const ADD_PLANT = 'ADD_PLANT';
export const DELETE_PLANT = 'DELETE_PLANT';
export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const START_EDITING = 'START_EDITING';
export const UPDATE_PLANT = 'UPDATE_PLANT';
export const CANCEL_UPDATE = 'CANCEL_UPDATE';

export const fetchPlants = () => {
	return dispatch => {
		dispatch(fetchStart());

		axiosWithAuth()
			.get('https://ft-water-my-plants-3.herokuapp.com/api/plants')
			.then(res => {
				dispatch(fetchSuccess(res.data));
			})
			.catch(err => {
				dispatch(fetchFail(err));
			});
	};
};

export const addPlant = newPlant => {
	return { type: ADD_PLANT, payload: newPlant };
};
export const deletePlant = newPlantList => {
	return { type: DELETE_PLANT, payload: newPlantList };
};

export const logIn = userId => {
	return { type: LOG_IN, payload: userId };
};

export const startEditing = () => {
	return { type: START_EDITING };
};

export const updatePlant = newPlantList => {
	return { type: UPDATE_PLANT, payload: newPlantList };
};

export const cancelUpdate = () => {
	return { type: CANCEL_UPDATE };
};

export const logOut = () => {
	localStorage.removeItem('token');
	localStorage.setItem('isLoggedIn', false);
	window.location.href = '/';
	return { type: LOG_OUT };
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
