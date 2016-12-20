// React
import React from 'react';
import { render } from 'react-dom';

// React Router
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// Components
import MainLayout from './components/MainLayout';
import CollectionGrid from './components/CollectionGrid';
import UserProfile from './components/UserProfile';
import UserCollectionGrid from './components/UserCollectionGrid'
import ArtObjectView from './components/ArtObjectView'

//react-redux
import { Provider } from 'react-redux';

// import store
import store, { history } from './store';



const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={MainLayout}>
        <IndexRoute component={CollectionGrid}></IndexRoute>
        <Route path="/users/:userId" component={ UserProfile }></Route>
        <Route path="/users/:userId/collections/:collectionId" component={ UserCollectionGrid }></Route>
        <Route path="/art_objects/:artObjectId" component={ ArtObjectView }></Route>
      </Route>
    </Router>
  </Provider>
);



render(router, document.getElementById('root'));
