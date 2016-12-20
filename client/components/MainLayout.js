import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Main from './Main';

import * as collectionsActions from '../actions/collectionsActions';
import * as artObjectActions from '../actions/artObjectActions';
import * as sessionsActions from '../actions/sessionsActions';
import * as userCollections from '../actions/usersCollectionActions';

function mapStateToProps(state) {
  return {
    collections: state.collections,
    artObjects: state.artObjects,
    sessions: state.sessions,
    currentUser: state.currentUser,
  };
}

function mapDispachToProps(disptach) {
  return bindActionCreators(Object.assign({}, collectionsActions, artObjectActions, sessionsActions, userCollections), disptach);
}

const App = connect(mapStateToProps, mapDispachToProps)(Main);

export default App;


