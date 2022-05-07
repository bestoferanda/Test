import { takeEvery } from 'redux-saga/effects';
import * as types from '../action-types/actionTypes';
import { getWeatherDataAsnyc } from './weatherSaga';
import { getResturantDataAsnyc } from './resturantSaga';

export default function* watch() {
  yield takeEvery(types.GET_WEATHER_DATA, getWeatherDataAsnyc);
  yield takeEvery(types.GET_RESTURANT_DATA, getResturantDataAsnyc);
}
