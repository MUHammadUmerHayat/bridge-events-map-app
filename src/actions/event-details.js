function getEvent(payload) {
  return {
    type: 'LOAD_EVENT_DETAILS',
    payload,
  };
}

export function loadEventDetails() {
  return dispatch => {
    return get('events/get', { id: 'E0-001-000278174-6' }).then(response =>{
      return dispatch(getEvent(response));
    }).catch(error => {
      throw (error);
    });
  };
}
