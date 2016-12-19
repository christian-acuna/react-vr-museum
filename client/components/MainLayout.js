import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Main from './Main';

import * as collectionsActions from '../actions/collectionsActions';
import * as artObjectActions from '../actions/artObjectActions';
// import * as sessionsActions from '../actions/sessionsActions';

function mapStateToProps(state) {
  return {
    collections: state.collections,
    artObjects: state.artObjects,
  };
}

function mapDispachToProps(disptach) {
  return bindActionCreators(Object.assign({}, collectionsActions, artObjectActions), disptach);
}

const App = connect(mapStateToProps, mapDispachToProps)(Main);

export default App;
