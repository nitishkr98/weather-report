import axios from "axios";
import { FETCH_WEATHER, SPINNER_OFF, SPINNER_ON, API_ERROR } from "./types";

export const fetchWeather = (city) => async (dispatch, getState) => {
  try {
    const API_KEY = "6a78596d062df78380eff5944c4e5567";
    const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
    const searchUrl = `${ROOT_URL}&q=${city}`;
    dispatch({ type: SPINNER_ON });
    const response = await axios.get(searchUrl);
    dispatch({ type: FETCH_WEATHER, payload: response.data });
    dispatch({ type: SPINNER_OFF });
  } catch (error) {
    dispatch({ type: API_ERROR });
  }
};
