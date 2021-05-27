import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_FAIL,
  ADD_PLANT,
  LOG_IN,
  LOG_OUT,
  EDIT_PLANT,
  DELETE_PLANT,
} from "../actions";

const initialState = {
  plantData: [{}],
  isFetching: false,
  error: "",
  isLoggedIn: false,
  userId: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        plantData: action.payload,
        isFetching: false,
        error: "",
      };
    case FETCH_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case ADD_PLANT:
      return {
        ...state,
        plantData: [...state.plantData, action.payload],
      };
    case EDIT_PLANT:
      return {
        ...state,
        // plantData: [...state.plantData, action.payload]
      };
    case DELETE_PLANT:
      return {
        ...state,
        plantData: [...action.payload],
      };
    case LOG_IN:
      return {
        ...state,
        userId: action.payload,
        isLoggedIn: true,
      };
    case LOG_OUT:
      return {
        ...state,
        userId: "",
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

export default reducer;
