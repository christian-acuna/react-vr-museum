export default function reducer(state={
    currentArtObject: [],
    showModal: false,
    fetching: false,
    fetched: false,
    error: null
  }, action) {

    switch (action.type) {
      case 'FETCH_ART_OBJECT_REJECTED': {
        return {...state, fetching: false, error: action.payload}
      }
      case 'FETCH_ART_OBJECT_FULFILLED': {
        return {
          ...state,
          fetching: false,
          fetched: true,
          showModal: true,
          currentArtObject: action.payload,
        }
      }
      case 'HIDE_ART_OBJECT_MODAL': {
        return {
          ...state,
          showModal: false,
        }
      }
    }
    return state
  }
