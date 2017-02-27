import * as types from './actionTypes';
import {get} from '../api/request';
// import { loadEvents } from './eventActions';

export function getEvent(details) {
  return {
    type: types.ACTION_TYPES.LOAD_EVENT_DETAILS,
    payload: {
      details,
    },
  };
}

export function loadEventDetails(idParam) {
  return dispatch => {
    get('events/get', { id: idParam })
      .then(response => {
        dispatch(getEvent(response));
        return response;
      })
      .catch(error => {
        throw (error);
      });
  };
}
