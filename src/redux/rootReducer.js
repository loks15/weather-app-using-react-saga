import { combineReducers } from 'redux';
import weatherReducer from './Weather/reducer';

const rootReducer = combineReducers({
    weather: weatherReducer,
});

export default rootReducer;