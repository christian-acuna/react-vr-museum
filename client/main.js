// React
import React from 'react';
import { render } from 'react-dom';

// React Router
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// Components
import MainLayout from './components/MainLayout';
import Home from './components/Home'

import CollectionGrid from './components/CollectionGrid';
import AllArtObjects from './components/AllArtObjects'
import UserProfile from './components/UserProfile';
import UserCollectionGrid from './components/UserCollectionGrid'
import ArtObjectsGrid from './components/ArtObjectsGrid'
import ArtObjectView from './components/ArtObjectView'

//react-redux
import { Provider } from 'react-redux';

// import store
import store, { history } from './store';



const router = (
  <Provider store={ store }>
    <Router history={ history }>
      <Route path="/" component={ MainLayout }>
        <IndexRoute component={ Home }></IndexRoute>
        <Route path="/collections" component={ CollectionGrid }></Route>
        <Route path="/artobjects" component={ AllArtObjects }></Route>
        <Route path="/users/:userId" component={ UserProfile }></Route>
        <Route path="/users/:userId/collections/:collectionId" component={ UserCollectionGrid }></Route>
        <Route path="/art_objects/:artObjectId" component={ ArtObjectView }></Route>
      </Route>
    </Router>
  </Provider>
);

render(router, document.getElementById('root'));
