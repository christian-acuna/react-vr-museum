import axios from 'axios';
import { getCollectionTitle } from './usersCollectionActions'

export function fetchCollections() {
  return function(dispatch) {
    axios.get('https://vr-museum-api.herokuapp.com/v1/collections')
      .then((response) => {
        console.log(response);
        dispatch({type: 'FETCH_COLLECTIONS_FULFILLED', payload: response.data});
      })
      .catch((err) => {
        dispatch({type: 'FETCH_COLLECTIONS_REJECTED', payload: err});
      });
  };
}


export function addNewCollection(title, primary_object_id) {
  return function(dispatch) {
    const authToken = localStorage.getItem('user_token')
    const user_id = localStorage.getItem('user_id')
    axios.post(`https://vr-museum-api.herokuapp.com/v1/users/${user_id}/collections`, { user_collection: {
      title: title,
      primary_object_id: primary_object_id,
      user_id: user_id
    }},
      { headers: {
        'Authorization': authToken
      }})
      .then((response) => {
        console.log(response)
        
        // dispatch({type: 'ADD_NEW_COLLECTION_FULFILLED', payload: response.data});
      })
      .catch((err) => {
        dispatch({type: 'FETCH_COLLECTIONS_REJECTED', payload: err});
      });
  };
}
