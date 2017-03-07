import * as types from '../actions/actionTypes';

export default function recommendIncrementReducer(state = 0, action) {
  switch (action.type) {

  case types.ACTION_TYPES.RECOMMENDED_INCREMENT:
    return state + 1;

  default:
    return state;
  }
}
