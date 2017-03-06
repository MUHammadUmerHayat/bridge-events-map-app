import * as types from '../actions/actionTypes';

export default function eventReducer(state = {allEvents: [], recommendedEvents: []}, action) {
  switch (action.type) {

  case types.ACTION_TYPES.LOAD_EVENTS_SUCCESS:
    return {...state, ...{allEvents: action.payload.events.event}};

  case types.ACTION_TYPES.LOAD_RECOMMENDED_EVENTS_SUCCESS:
    return {...state, ...{recommendedEvents: action.payload.events.event}};

  default:
    return state;
  }
}
