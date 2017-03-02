import * as types from './actionTypes';

export function addComment(comment) {
  return {
    type: types.ACTION_TYPES.ADD_COMMENT,
    payload: {
      comment,
    },
  };
}

export function loadComments(comments) {
  return {
    type: types.ACTION_TYPES.LOAD_COMMENTS,
    payload: {
      comments,
    },
  };
}
