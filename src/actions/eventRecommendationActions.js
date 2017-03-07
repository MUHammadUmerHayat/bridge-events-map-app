import * as types from './actionTypes';

export function recommendThisEvent(recommendation) {
  return dispatch => {
  	dispatch({
	    type: types.ACTION_TYPES.RECOMMENDED_INCREMENT,
	    payload: {
	    	recommendation,
	    },
	  });
  };
}
