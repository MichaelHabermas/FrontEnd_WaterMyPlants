import {
	FETCH_START,
	FETCH_SUCCESS,
	FETCH_FAIL,
	ADD_PLANT,
	LOG_IN,
	LOG_OUT,
	DELETE_PLANT,
	START_EDITING,
	UPDATE_PLANT,
	CANCEL_UPDATE
} from '../actions';

const initialState = {
	plantData: [{}],
	isFetching: false,
	error: '',
	isLoggedIn: localStorage.getItem('isLoggedIn') === 'true' ? true : false,
	isEditing: false,
	userId: ''
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_START:
			return {
				...state,
				isFetching: true
			};
		case FETCH_SUCCESS:
			return {
				...state,
				plantData: action.payload,
				isFetching: false,
				error: ''
			};
		case FETCH_FAIL:
			return {
				...state,
				isFetching: false,
				error: action.payload
			};
		case ADD_PLANT:
			return {
				...state,
				plantData: [...state.plantData, action.payload]
			};
		case START_EDITING:
			return {
				...state,
				isEditing: true
			};
		case CANCEL_UPDATE:
			return {
				...state,
				isEditing: false
			};
		case UPDATE_PLANT:
			return {
				...state,
				plantData: state.plantData.map(item =>
					item.plant_id === action.payload.plant_id ? action.payload : item
				),
				isEditing: false
			};
		case DELETE_PLANT:
			return {
				...state,
				plantData: [...action.payload]
			};
		case LOG_IN:
			return {
				...state,
				userId: action.payload,
				isLoggedIn: true
			};
		case LOG_OUT:
			return {
				...state,
				userId: '',
				isLoggedIn: false
			};
		default:
			return state;
	}
};

export default reducer;
