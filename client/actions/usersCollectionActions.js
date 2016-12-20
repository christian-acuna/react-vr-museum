import axios from 'axios';

export function getCollectionTitle(userId,art_object) {
  return function(dispatch) {
    axios.get(`https://vr-museum-api.herokuapp.com/v1/users/${userId}/collections/?title=true&art_object=${art_object}`)
      .then((response) => {
        console.log(response);
        dispatch({type: 'FETCH_COLLECTION_TITLE_FULFILLED', payload: response.data});
      })
      .catch((err) => {
        dispatch({type: 'FETCH_COLLECTION_TITLE_REJECTED', payload: err});
      });
  };
}

// export function closeArtObjectModal() {
//   return {
//     type: 'HIDE_ART_OBJECT_MODAL'
//   };
// }

export function addArtObjectToCollection(userId,art_object) {
  return function(dispatch) {
    axios.post(`https://vr-museum-api.herokuapp.com/v1/users/${userId}/collections/?title=true&art_object=${art_object}`)
      .then((response) => {
        console.log(response);
        dispatch({type: 'FETCH_COLLECTION_TITLE_FULFILLED', payload: response.data});
      })
      .catch((err) => {
        dispatch({type: 'FETCH_COLLECTION_TITLE_REJECTED', payload: err});
      });
  };
}