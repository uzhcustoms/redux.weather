import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCityAction, getCountryAction, getStart, getWeather } from '../.././redux/modules/weather';
import axios from "axios";


function Form(props){
  const dispatch = useDispatch();
  const city = useSelector(state => state.weather.city);
  const country = useSelector(state => state.weather.country);

  const handlerSubmit = async (event) => {
    event.preventDefault();
    const query = `https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&units=metric&appid=85ab88ec9852a2b74fd828b43a8afbb3`;
    let resp = await axios.get(query);
    props.onSubmit(resp.data);
    dispatch(getWeather(resp.data));
    dispatch(getStart(true)); 
  };
    
const handleChangeCity = (event) => {
    dispatch(getCityAction(event.target.value));
}

const handleChangeCountry = (event) => {
    dispatch(getCountryAction(event.target.value));
}

    return (
       <form onSubmit={handlerSubmit}>
            <label htmlFor="country">Country: "ua","de","by","ru","hu", "it"</label>
            <input type="text" placeholder="country"  id="country"  onChange={handleChangeCountry} required/>
            <label htmlFor="city">City:</label>
            <input type="text" placeholder="city" id="city" onChange={handleChangeCity} required/>
            <button type="submit">Search</button>
        </form>
   );
} 

export default Form
