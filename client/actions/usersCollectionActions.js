import axios from 'axios';

export function getCollectionTitle(userId) {
  return function(dispatch) {
    axios.get(`https://vr-museum-api.herokuapp.com/v1/users/${userId}/collections/`)
      .then((response) => {
        console.log(response);
        
        const collectionTitle = response.data.map(function(collection){return collection.title})
        dispatch({type: 'FETCH_COLLECTION_TITLE_FULFILLED', payload: collectionTitle});
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

