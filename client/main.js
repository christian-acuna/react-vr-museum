// let's go!
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './components/App';
import collections from './data/collections';
import CollectionGrid from './components/CollectionGrid';
import UserProfile from './components/UserProfile';
import UserCollectionGrid from './components/UserCollectionGrid'



const router = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={CollectionGrid}></IndexRoute>
      <Route path="/users/:userId" component={ UserProfile }></Route>
      <Route path="/users/:userId/collections/:collectionId" component={ UserCollectionGrid }></Route>
    </Route>
  </Router>
);



render(router, document.getElementById('root'));
