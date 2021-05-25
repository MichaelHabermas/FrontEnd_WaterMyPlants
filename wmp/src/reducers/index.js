import plantData from '../plantData';
import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL, LOG_IN, SIGN_UP } from '../actions';

const initialState = {
	plantData: [...plantData],
	isFetching: false,
	error: ''
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case LOG_IN:
			return {
				...state
			};
		case SIGN_UP:
			return {
				...state
			};
		case FETCH_START:
			return {
				...state,
				isFetching: true
			};
		case FETCH_SUCCESS:
			return {
				...state,
				isFetching: false,
				error: ''
			};
		case FETCH_FAIL:
			return {
				...state,
				isFetching: false,
				error: action.payload
			};
		default:
			return state;
	}
};

// export default reducer;
