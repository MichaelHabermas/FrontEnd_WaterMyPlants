import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL, ADD_PLANT } from '../actions';

const initialState = {
	plantData: [{}],
	isFetching: false,
	error: ''
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
		default:
			return state;
	}
};

export default reducer;
