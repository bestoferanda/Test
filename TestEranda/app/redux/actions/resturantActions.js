import * as types from '../action-types/actionTypes';

export function getresturantData(payload) {
    return {
      type: types.GET_RESTURANT_DATA,
      payload: payload,
    };
  }