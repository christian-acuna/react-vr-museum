import { combineReducers } from 'redux';

import collections from './collectionsReducer';
// import user from "./userReducer";
// import sessions from './sessionsReducer';
// import user from "./userReducer"

export default combineReducers({
  collections: collections
});
