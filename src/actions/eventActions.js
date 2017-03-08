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

export function loadRecommendedEventsSuccess(events) {
  return {
    type: types.ACTION_TYPES.LOAD_RECOMMENDED_EVENTS_SUCCESS,
    payload: {
      events,
    },
  };
}


export function loadEvents(param, isRecommended = false) {
  // add image sizes you would like to have access to here
  const imageSizes = {
    image_sizes: 'perspectivecrop290by250',
  };
  return function loadAllEvents(dispatch) {
    get('events/search', Object.assign({}, param, imageSizes))
    .then(response => {
      response.events.event.map(event => {
        event.image ?
          event.image.perspectivecrop290by250.url :
          event.image = {
            perspectivecrop290by250: {
              url: '../../src/assets/img/' + event.categories.category[0].id + '.jpg',
            },
          };
      });
      dispatch(isRecommended ? loadRecommendedEventsSuccess(response.events) : loadEventsSuccess(response.events));
    }).catch(error => {
      throw (error);
    });
  };
}
