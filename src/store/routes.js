import React from 'react';
import { Route, Router, hashHistory } from 'react-router';
import App from '../app/app.js';
<<<<<<< HEAD
import EventDetails from '../containers/EventDetails/EventDetails';
=======
import EventDetails from '../containers/EventDetails/event-details';
>>>>>>> adding event details that is able to get details object in route /EventDetails
export default (
  <Router history={hashHistory}>
    <Route path="/" component={ App }/>
    <Route path="/EventDetails" component={ EventDetails } />
  </Router>
);
