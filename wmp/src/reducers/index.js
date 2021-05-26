import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL, ADD_PLANT, LOG_IN, LOG_OUT } from '../actions';

const initialState = {
	plantData: [{}],
	isFetching: false,
	error: '',
	isLoggedIn: false
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
		case LOG_IN:
			return {
				...state,
				isLoggedIn: true
			};
		case LOG_OUT:
			return {
				...state,
				isLoggedIn: false
			};
		default:
			return state;
	}
};

export default reducer;
