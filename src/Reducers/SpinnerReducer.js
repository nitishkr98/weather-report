import { API_ERROR, SPINNER_OFF, SPINNER_ON } from "../Actions/types";

const INITIAL_STATE = {
  spinner: false,
  api_error: null,
};

const spinnerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SPINNER_OFF:
      return { ...state, spinner: false, api_error: null };
    case SPINNER_ON:
      return { ...state, spinner: true, api_error: null };
    case API_ERROR:
      return { ...state, spinner: false, api_error: "Not Found" };
    default:
      return state;
  }
};

export default spinnerReducer;
