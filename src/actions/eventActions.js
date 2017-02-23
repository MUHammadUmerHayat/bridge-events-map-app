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

export function loadEvents() {
  return function loadAllEvents(dispatch) {
    get('events/search', {location: 'Toronto', date: 'Future', 'page_size': '100'})
    .then(function getResp(response) {
      dispatch(loadEventsSuccess(response.events));
    }).catch(error => {
      throw (error);
    });
  };
}

export function loadRecommendedEvents(city) {
  return function loadAllRecommendedEvents(dispatch) {
    get('events/search', { location: city, page_size: 3 })
      .then(function getResp(response) {
        dispatch(loadEventsSuccess(response.events));
      }).catch(error => {
        throw (error);
      });
  };
}
