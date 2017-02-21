import * as types from './actionTypes';
import {get} from '../api/request';


function getEvent(details) {
  // debugger;
  // console.log(details);
  return {
    type: types.ACTION_TYPES.LOAD_EVENT_DETAILS,
    payload: {
      details,
    },
  };
}

function getRecommended(recommended) {
  // debugger;
  // console.log(recommended.events.event);
  return {
    type: types.ACTION_TYPES.LOAD_RECOMMENDED_EVENTS,
    payload: {
      recommended,
    },
  };
}

export function loadEventDetails() {
  return function loadEventDetailsPlz(dispatch) {
    get('events/get', { id: 'E0-001-000278174-6' })
    .then(function getResp(response) {
      dispatch(getEvent(response));
      // debugger;
      return get('events/search', { location: response.city });
    })
    .then(function getResp(response) {
      // debugger;
      dispatch(getRecommended(response));
    })
    .catch(error => {
      throw (error);
    });
  };
}
