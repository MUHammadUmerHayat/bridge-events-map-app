import * as types from '../actions/actionTypes';

export default function recommendIncrementReducer(state = 0, action) {
  switch (action.type) {

  // case types.ACTION_TYPES.RECOMMENDED_INCREMENT:
  // 	let event;
  // 	const eventId = action.payload;
  // 	let eventLikes = state[eventId];
  // 	if (eventLikes !== undefined) {
  // 		event = { [eventId]: eventLikes++ };
  // 	} else {
  // 		event = { [eventId]: 1 };
  // 	}
  //   return Object.assign({}, state, event);

  case types.ACTION_TYPES.RECOMMENDED_INCREMENT:
    return state + 1;

  default:
    return state;
  }
}
