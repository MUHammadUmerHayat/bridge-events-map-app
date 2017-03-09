import * as types from './actionTypes';

export function newSearch(query) {
  return {
    type: types.ACTION_TYPES.NEW_SEARCH,
    payload: {
      query: query,
    },
  };
}
