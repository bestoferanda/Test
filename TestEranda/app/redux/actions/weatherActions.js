import * as types from '../action-types/actionTypes';

export function getWeatherData(payload) {
    return {
      type: types.GET_WEATHER_DATA,
      payload: payload,
    };
  }