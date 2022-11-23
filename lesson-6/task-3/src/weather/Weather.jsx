import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as weatherActions from './weather.actions';
import { weatherDataSelector } from './weather.selectors';

const Weather = ({ weatherData, getWeatherData }) => {
  useEffect(() => {
    getWeatherData();
  }, []);
  if (!weatherData) {
    return null;
  }
  return (
    <main className="weather">
      <h1 className="weather__title">Weather data</h1>
      <ul className="cities-list">
        {weatherData.map(({ id, name, temperature }) => (
          <li key={id} className="city">
            <span className="city__name">{name}</span>
            <span className="city__temperature">{`${temperature}F`}</span>
          </li>
        ))}
      </ul>
    </main>
  );
};

const mapState = state => ({
  weatherData: weatherDataSelector(state),
});
const mapDispatch = {
  getWeatherData: weatherActions.getWeatherData,
};
export default connect(mapState, mapDispatch)(Weather);
