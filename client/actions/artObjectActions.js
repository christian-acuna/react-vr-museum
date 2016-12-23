import axios from 'axios';

export function getArtObject(artObjectId) {
  return function(dispatch) {
    axios.get(`https://vr-museum-api.herokuapp.com/v1/art_objects/${artObjectId}`)
      .then((response) => {
        console.log(response);
        dispatch({type: 'FETCH_ART_OBJECT_FULFILLED', payload: response.data});
      })
      .catch((err) => {
        dispatch({type: 'FETCH_ART_OBJECT_REJECTED', payload: err});
      });
  };
}

export function closeArtObjectModal() {
  return {
    type: 'HIDE_ART_OBJECT_MODAL'
  };
}

export function getAllArtObjects() {
  return function(dispatch) {
    axios.get(`https://vr-museum-api.herokuapp.com/v1/art_objects`)
    .then((response) =>{
      console.log(response)
      dispatch({type: 'FETCH_ALL_OBJECTS', payload: response.data});
    })
    .catch((err) => {
      dispatch({type: 'FETCH_ALL_OBJECTS_REJECTED', payload: err});
    });
  };
}
