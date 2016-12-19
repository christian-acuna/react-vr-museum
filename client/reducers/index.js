import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import collections from './collectionsReducer';
import artObjects from './artObjectReducer';
// import user from "./userReducer";
// import sessions from './sessionsReducer';
// import user from "./userReducer"

export default combineReducers({
  collections: collections,
  artObjects: artObjects,
  routing: routerReducer,
});
