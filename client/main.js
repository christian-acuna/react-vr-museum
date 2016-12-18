// React
import React from 'react';
import { render } from 'react-dom';

// React Router
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// Components
import App from './components/App';
import CollectionGrid from './components/CollectionGrid';
import UserProfile from './components/UserProfile';
import UserCollectionGrid from './components/UserCollectionGrid'

//react-redux
import { Provider } from 'react-redux';

// import store
import store, { history } from './store';


const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={CollectionGrid}></IndexRoute>
        <Route path="/users/:userId" component={ UserProfile }></Route>
        <Route path="/users/:userId/collections/:collectionId" component={ UserCollectionGrid }></Route>
      </Route>
    </Router>
  </Provider>
);



render(router, document.getElementById('root'));
