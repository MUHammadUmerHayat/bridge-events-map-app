import * as types from './actionTypes';

export function newSearch(query) {
  console.log(query);
  return {
    type: types.ACTION_TYPES.NEW_SEARCH,
    payload: {
      query: query,
    },
  };
}
