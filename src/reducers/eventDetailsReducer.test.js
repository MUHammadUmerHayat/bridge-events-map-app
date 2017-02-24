import reducer from './eventDetailsReducer';
import * as types from '../actions/actionTypes';

describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual({});
  });

  it('should handle LOAD_EVENT_DETAILS', () => {
    expect(
      reducer([], {
        type: types.ACTION_TYPES.LOAD_EVENT_DETAILS,
        payload: { details: {title: 'Mariah Carey', city: 'Toronto'}},
      })
    ).toEqual(
      {title: 'Mariah Carey', city: 'Toronto'}
    );
  });
});
