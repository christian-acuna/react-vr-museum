import { applyMiddleware, createStore, compose } from 'redux';

import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import promise from 'redux-promise-middleware';

import reducer from './reducers';
//
// const defaultState = {
//   collections: []
// };

const enhancers = compose(
  applyMiddleware(promise(), thunk, logger()),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

// const middleware =

const store = createStore(reducer, enhancers);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
