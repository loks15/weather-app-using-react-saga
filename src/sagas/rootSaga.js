import { all } from 'redux-saga/effects';
import {watchWeather} from './Weather/saga'

export function* rootSaga () {
    yield all([
        watchWeather()
    ]);
}