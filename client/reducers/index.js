import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import collections from './collectionsReducer';
import artObjects from './artObjectReducer';
import sessions from './sessionsReducer';
// import user from "./userReducer";
// import user from "./userReducer"

export default combineReducers({
  collections: collections,
  artObjects: artObjects,
  sessions: sessions,
  routing: routerReducer,
});
