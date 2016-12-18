import axios from 'axios';

export function fetchCollections() {
  return function(dispatch) {
    axios.get('http://localhost:3000/v1/collections')
      .then((response) => {
        console.log(response);
        dispatch({type: 'FETCH_COLLECTIONS_FULFILLED', payload: response.data});
      })
      .catch((err) => {
        dispatch({type: 'FETCH_COLLECTIONS_REJECTED', payload: err});
      });
  };
}
