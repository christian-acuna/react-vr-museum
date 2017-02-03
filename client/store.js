import { applyMiddleware, createStore, compose } from 'redux';

import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// Enables robust handling of async code in Redux.
// The middleware dispatches pending, fulfilled and rejected actions.
import promise from 'redux-promise-middleware';

import reducer from './reducers';

// store authToken, user_id, and username in local storage
const authToken = localStorage.getItem('user_token');
const user_id = localStorage.getItem('user_id')
const username = localStorage.getItem('username')

// Logger must be the last middleware in chain, otherwise it will log thunk and
// promise, not actual actions
const enhancers = compose(
  applyMiddleware(promise(), thunk, logger()),
  // This enables access to Redux devTools if installed
  window.devToolsExtension ? window.devToolsExtension() : (f) => f
);

let persistedState;
let store;

if (authToken) {
  // if authToken exists in localStorage then create a store with sessions
  //  state as persistedState
  persistedState = {
   sessions: {
     loginVisible: false,
     loginForm: {
       email: null,
       password: null
     },
     auth: {
       access_token: authToken,
       loggedIn: true
     },
   },
   user: {
    email: null,
    username: username,
    user_id: user_id,
    collectionTitles: [],
   }
 }
  store = createStore(reducer, persistedState, enhancers);

} else {
  // if no authToken is in local storage, then create a store with no
  // persisted state
  store = createStore(reducer, enhancers);
}

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
