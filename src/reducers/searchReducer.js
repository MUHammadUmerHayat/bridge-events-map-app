import * as types from '../actions/actionTypes';

export default function searchReducer(state = {}, action) {
  switch (action.type) {

  case types.ACTION_TYPES.NEW_SEARCH:
    return action.payload.query;

  default:
    return state;
  }
}
