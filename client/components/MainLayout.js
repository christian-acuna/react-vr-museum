import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Main from './Main';

import * as collectionsActions from '../actions/collectionsActions';
import * as artObjectActions from '../actions/artObjectActions';
import * as sessionsActions from '../actions/sessionsActions';

function mapStateToProps(state) {
  return {
    collections: state.collections,
    artObjects: state.artObjects,
    sessions: state.sessions,
  };
}

function mapDispachToProps(disptach) {
  return bindActionCreators(Object.assign({}, collectionsActions, artObjectActions, sessionsActions), disptach);
}

const App = connect(mapStateToProps, mapDispachToProps)(Main);

export default App;
