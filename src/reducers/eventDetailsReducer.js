import * as types from '../actions/actionTypes';

export default function(state = {}, action) {
  switch (action.type) {

  case types.ACTION_TYPES.LOAD_EVENT_DETAILS: {
    let details = action.payload.details;
    if (details.images) {
      if (details.images.image) {
        details = Object.assign({}, action.payload.details, { imageUrl: action.payload.details.images.image.url});
      }
    }
    return details;
  }


  default:
    return state;
  }
}
