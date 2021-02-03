import { combineReducers } from "redux";
import weatherReducer from "../Reducers/WeatherReducer";
import spinnerReducer from "./SpinnerReducer";

export default combineReducers({
  weather: weatherReducer,
  spinnerStatus: spinnerReducer,
});
