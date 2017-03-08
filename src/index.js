import 'es5-shim';
import 'es6-shim';
import 'es6-promise';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import routes from './store/routes';
import configureStore from './store/configure-store';
import './styles/index.css';
// import './styles/details.css';

const store = configureStore({});
const history = syncHistoryWithStore(browserHistory, store);

injectTapEventPlugin();

if (!__TEST__) {
  ReactDOM.render(
    <div>
      <Provider store={ store }>
        <MuiThemeProvider>
          <Router history={ history }>
            { routes }
          </Router>
      </MuiThemeProvider>
      </Provider>
    </div>,
    document.getElementById('root')
  );
}
