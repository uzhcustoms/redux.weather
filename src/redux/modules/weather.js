
const moduleName = 'weather';

const GET_WEATHER = `${moduleName}/GET_WEATHER`;
const CITY_WEATHER = `${moduleName}/CITY_WEATHER`;
const COUNTRY_WEATHER = `${moduleName}/COUNTRY_WEATHER`;
const START_WEATHER = `${moduleName}/START_WEATHER`;

const defaultState = {
    weather: [],
    city: "uzhgorod",
    country: "ua",
    start: false
};

export default (state = defaultState, {type, payload}) => {
    switch (type) {
        case GET_WEATHER:
            return { ...state, weather: payload}

        case CITY_WEATHER:
            state.city = payload
            return { ...state, city: state.city}

        case COUNTRY_WEATHER:
            state.country = payload
            return { ...state, country: state.country}

        case START_WEATHER:
            state.start = payload
            return { ...state, start: state.start}

        default:
            return state;
    }
};

export const getStart = (payload) => ({type: START_WEATHER, payload});
export const getCityAction = (payload) => ({type: CITY_WEATHER, payload});
export const getCountryAction = (payload) => ({type: COUNTRY_WEATHER, payload});
export const getWeather = (payload) => ({type: GET_WEATHER, payload});

// export const getWeather = () => async (dispatch) => {
//     // dispatch({type: GET_POSTS, payload: [{id: 1, title: 'asd'}]});
//     try{
//        await 
//        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${defaultState.city},ua&units=metric&appid=85ab88ec9852a2b74fd828b43a8afbb3`)
//             .then((response) => response.json())
//             .then((data) => dispatch({type: GET_WEATHER, payload: data}))
//     } catch (error) {
//         console.log(error)
//     }
    
// }