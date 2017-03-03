import * as types from './actionTypes';

export function addEventRating(rating) {
  console.log(rating);
  return {
    type: types.ACTION_TYPES.ADD_EVENT_RATING,
    payload: {
      rating,
    },
  };
}

// export function loadComments(comments) {
//   return {
//     type: types.ACTION_TYPES.LOAD_COMMENTS,
//     payload: {
//       comments,
//     },
//   };
// }
