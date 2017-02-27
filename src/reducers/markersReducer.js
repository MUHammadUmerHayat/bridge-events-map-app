import * as types from '../actions/actionTypes';

export default function markerReducer(state = [], action) {
  switch (action.type) {

  case types.ACTION_TYPES.GET_MARKERS:
    return action.payload.markers;

  case types.ACTION_TYPES.SHOW_MARKER_POPOVER:
    return state.map(marker => {
      if (marker.key === action.payload.markerId) {
        return {
          ...marker,
          showInfo: action.payload.showInfo,
        };
      }
      return marker;
    });

  default:
    return state;
  }
}
