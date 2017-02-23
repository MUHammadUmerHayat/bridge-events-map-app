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
    get('events/get', { id: 'P0-001-001578572-4' })
      .then(function getResp(response) {
        dispatch(getEvent(response));
        return response;
      })
      .then(function getResp(response) {
        dispatch(loadRecommendedEvents(response.city));
        return response;
      })
      .catch(error => {
        throw (error);
      });
  };
}
