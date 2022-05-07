import * as types from '../action-types/actionTypes';


export function authUser(payload) {
  return {
    type: types.AUTH_USER,
    payload: payload,
  };
}


