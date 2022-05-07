import {AUTH_USER} from '../action-types/actionTypes';
const initialState = {
  authUser: [],
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_USER:
      return {...state, authUser: action.payload};
    default:
      return state;
  }
}

