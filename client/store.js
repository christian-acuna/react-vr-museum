import { applyMiddleware, createStore, compose } from 'redux';

import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import promise from 'redux-promise-middleware';

import reducer from './reducers';
const authToken = localStorage.getItem('user_token')

// const defaultState = {
//   auth: null
// }
//
// if (authToken) {
//     store.dispatch({type: 'AUTH_FROM_LOCAL_STORGE', payload: response.data});
//     defaultState = {
//     session: authToken
//   }
// }
//

const enhancers = compose(
  applyMiddleware(promise(), thunk, logger()),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);
let persistedState;
let store;
if (authToken) {
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
   }
 }
  store = createStore(reducer, persistedState, enhancers);

} else {
  store = createStore(reducer, enhancers);
}


console.log(store.getState());

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
