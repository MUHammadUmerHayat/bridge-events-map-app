import * as types from './actionTypes';
// import {get} from '../api/request';

export function getImages(images) {
  return {
    type: types.ACTION_TYPES.GET_EVENT_IMAGE,
    payload: {
      images,
    },
  };
}

// this function returns an array of category objects
export function getEventImage(events) {
  return dispatch => {
	  events.map(event => {
	    event.image ?
	    	event.image.perspectivecrop290by250.url :
	    	event.image = {
	    		perspectivecrop290by250: {
	    		 url: 'http://placehold.it/290x250',
	    		},
	    	};
	  });
	  dispatch(getImages(events));
  };
}

// export function getCategoryImage() {
//   return () => {
//   	get('categories/list')
// 		  .then(response => {
// 		    return response;
// 		  })
// 		  .catch(error => {
// 		    throw (error);
// 		  });
//   };
// }
