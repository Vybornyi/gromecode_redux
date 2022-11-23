import { WEATHER_DATA_RECIVED } from './weather.actions';

const initialState = {
  weatherData: null,
};

const weatherReduser = (state = initialState, action) => {
  switch (action.type) {
    case WEATHER_DATA_RECIVED:
      return {
        ...state,
        weatherData: action.payload.weatherData,
      };
    default:
      return state;
  }
};

export default weatherReduser;
