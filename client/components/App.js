import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Main from './Main';

import * as collectionsActions from '../actions/collectionsActions';
// import * as usersActions from '../actions/usersActions';
// import * as sessionsActions from '../actions/sessionsActions';

function mapStateToProps(state) {
  return {
    collections: state.collections,
  };
}

function mapDispachToProps(disptach) {
  return bindActionCreators(Object.assign({}, collectionsActions), disptach);
}

const App = connect(mapStateToProps, mapDispachToProps)(Main);

export default App;
