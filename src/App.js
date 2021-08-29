import React, { useState } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Form from './components/Form';
import WeatherCity from './components/Weather';

// {weather, getWeather, city, country}
function App() {
  const [userObject, setUserObject] = useState({});
  const updateUser = (user) => {
    setUserObject(user);
  };

  return (
    <div className="App">
      <h1>Weather</h1>
      <Form onSubmit={updateUser}/>
      <WeatherCity {...userObject}/>
    </div>
  );
}

export default connect(
({weather}) => ({weather: weather.weather, city: weather.city, country: weather.country}),

)(App);
