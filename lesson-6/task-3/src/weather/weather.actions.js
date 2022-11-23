import fetchWeatherData from './weather.gateway';

export const WEATHER_DATA_RECIVED = 'WEATHER/WEATHER_DATA_RECIVED';

export const weatherDataRecived = weatherData => ({
  type: WEATHER_DATA_RECIVED,
  payload: {
    weatherData,
  },
});
export const getWeatherData = () =>
  function (dispatch) {
    fetchWeatherData().then(data => {
      dispatch(weatherDataRecived(data));
    });
  };
