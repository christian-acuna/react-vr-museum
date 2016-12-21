import { applyMiddleware, createStore, compose } from 'redux';

import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import promise from 'redux-promise-middleware';

import reducer from './reducers';
const authToken = localStorage.getItem('user_token');
const user_id = localStorage.getItem('user_id')
const username = localStorage.getItem('username')

const enhancers = compose(
  applyMiddleware(promise(), thunk, logger()),
  window.devToolsExtension ? window.devToolsExtension() : f => f
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
  store = createStore(reducer, enhancers);
}


console.log(store.getState());

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
