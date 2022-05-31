import { INIT_WEATHER_DATA, SET_WEATHER_DATA } from './types';

const initWeatherData = (payload) => ({ type: INIT_WEATHER_DATA, payload })
const setWeatherData = (payload) => ({type: SET_WEATHER_DATA, payload})

export { 
    initWeatherData,
    setWeatherData
}