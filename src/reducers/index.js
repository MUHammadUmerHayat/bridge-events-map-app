import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import events from './eventReducer';
import { reducer as formReducer } from 'redux-form';
<<<<<<< HEAD
import LoadDetailsReducer from './eventDetailsReducer';
=======
import LoadDetailsReducer from './event-details';
>>>>>>> adding event details that is able to get details object in route /EventDetails

const rootReducer = combineReducers({
  routing: routerReducer,
  form: formReducer,
  details: LoadDetailsReducer,
  events,
});

export default rootReducer;
