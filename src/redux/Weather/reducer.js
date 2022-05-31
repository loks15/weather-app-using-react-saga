import { SET_WEATHER_DATA } from './types';

const INITIAL_STATE = {
    weatherData: {}
};

const counterReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_WEATHER_DATA:
            return {
                ...state, weatherData: {...action.payload}
            };
        default: return state;
    }
};

export default counterReducer;