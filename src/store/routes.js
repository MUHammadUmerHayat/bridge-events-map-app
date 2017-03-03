import React from 'react';
import { Route, Router, hashHistory } from 'react-router';
import App from '../app/app.js';
import EventDetails from '../containers/EventDetails/EventDetails';
import SearchContainer from '../containers/SearchContainer/';

export default (
  <Router history={hashHistory}>
    <Route path="/" component={ App }/>
    <Route name="EventDetails" path="EventDetails/:id" component={ EventDetails } />
    <Route name="Search" path="Search" component={ SearchContainer } />
  </Router>
);
