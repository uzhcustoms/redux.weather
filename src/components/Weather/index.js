function WeatherCity(props){
   if (typeof props.city === "undefined") return <h2>No user information</h2>;
   const img = `http://openweathermap.org/img/wn/${props.list[0].weather[0].icon}@2x.png`;

   let str = '';
   let day = ''
   const date = new Date().getTime();
   const sunrise = new Date(props.city.sunrise * 1000).toLocaleTimeString().slice(0,5);
   const sunset = new Date(props.city.sunset * 1000).toLocaleTimeString().slice(0,5);

    if (props.city.sunrise * 1000 > date && props.city.sunrise * sunset < date) {
        str = 'https://i.pinimg.com/736x/6a/26/e6/6a26e6cca95d7f4233c6269ff8ccdf76.jpg';
        day = "Day";
    } else  {
        str = 'https://thumbs.dreamstime.com/b/%D1%87%D0%B5%D1%80%D0%BD%D1%8B%D0%B9-%D0%BB%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF-%D0%BD%D0%BE%D1%87%D0%B8-%D0%BB%D1%83%D0%BD%D1%8B-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80-eps-%D0%B7%D0%BD%D0%B0%D0%BA%D0%B0-%D0%B8%D0%B7%D0%BE%D0%BB%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B9-%D1%81%D0%B8%D0%BB%D1%83%D1%8D%D1%82-%D0%BD%D0%B0-%D0%B1%D0%B5%D0%BB%D0%BE%D0%B9-143907982.jpg';
        day = "Night"
    }

    return (
        <div className="container">
            <div className="icons item">
                <h4>{day} </h4>
                <img src={str} alt="" width="160px" height="160px"></img>
                <p>Sunrise: {sunrise} </p>
                <p>Sunset: {sunset} </p>
            </div>
            <div className="weatherCity item">
                <h3>Сountry: {props.city.country}</h3>
                <h3>City: {props.city.name}</h3>
                <img src={img} alt="" width="180px" height="180px"></img>
                <h3>{props.list[0].weather[0].main}</h3>
            </div>
            <div className="temp item">
                <h1>{Math.floor(props.list[0].main.temp)} C</h1>
                <p>Min temp: {Math.floor(props.list[0].main.temp_min)} C</p>
                <p>Max temp: {Math.floor(props.list[0].main.temp_max)} C</p>
                <p>Wind speed: {Math.floor(props.list[0].wind.speed)} м/с</p>
            </div>
        </div>
   );
} 

export default WeatherCity