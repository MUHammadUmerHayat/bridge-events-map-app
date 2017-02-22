import * as types from './actionTypes';
import {get} from '../api/request';
import { loadRecommendedEvents } from './eventActions';

function getEvent(details) {
  return {
    type: types.ACTION_TYPES.LOAD_EVENT_DETAILS,
    payload: {
      details,
    },
  };
}

export function loadEventDetails() {
  return function loadEventDetailsPlz(dispatch) {
    get('events/get', { id: 'E0-001-000278174-6' })
      .then(function getResp(response) {
        dispatch(getEvent(response));
        return response;
      }).then(function getRecommended(response) {
        console.log(response.city);
        return loadRecommendedEvents(response.city);
      }).catch(error => {
        throw (error);
      });
  };
}
