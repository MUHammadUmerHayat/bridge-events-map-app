import * as types from './actionTypes';
import {get} from '../api/request';

export function loadEventsSuccess(events) {
  return {
    type: types.ACTION_TYPES.LOAD_EVENTS_SUCCESS,
    payload: {
      events,
    },
  };
}

export function loadEvents(param) {
  return function loadAllEvents(dispatch) {
    get('events/search', param)
    .then(function getResp(response) {
      dispatch(loadEventsSuccess(response.events));
    }).catch(error => {
      throw (error);
    });
  };
}
