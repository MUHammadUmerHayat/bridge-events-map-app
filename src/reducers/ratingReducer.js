import * as types from '../actions/actionTypes';

export default function ratingReducer(state = [], action) {
  // console.log(state);
  switch (action.type) {

  case types.ACTION_TYPES.ADD_EVENT_RATING:
    return [...state, action.payload.rating];

  // case types.ACTION_TYPES.GET_AVERAGE_RATING:
  //   return [...state, action.payload.average];

  default:
    return state;
  }
}
