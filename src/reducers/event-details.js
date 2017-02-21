import * as types from '../actions/actionTypes';

export default function DetailsReducer(state = [], action) {
  switch (action.type) {

  case types.ACTION_TYPES.LOAD_EVENT_DETAILS:
    return action.payload.details;

  case types.ACTION_TYPES.LOAD_RECOMMENDED_EVENTS:
    return action.payload.recommended;

  default:
    return state;
  }
}
