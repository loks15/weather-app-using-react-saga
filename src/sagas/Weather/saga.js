import {takeLatest, put, call } from 'redux-saga/effects';
import { apiCall } from '../../axiosApiCallWrapper';
import { setWeatherData } from '../../redux/Weather/actions';

function* getWeather({ payload: { search = '' } }){
    try {
        let serviceUrl = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=8d85f498b43e7ce143339c7823946256`;
        let response1 = yield call(apiCall, "GET", serviceUrl);
        yield put(setWeatherData(response1))
    } catch(err) {
        console.log('err', err)
    }
}

export function* watchWeather(){
    yield takeLatest('INIT_WEATHER_DATA', getWeather);
}