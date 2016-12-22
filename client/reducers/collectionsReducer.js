export default function reducer(state={
    collections: [],
    fetching: false,
    fetched: false,
    error: null,
    showCreateCollection:false
  }, action) {

    switch (action.type) {
      case 'FETCH_COLLECTIONS': {
        return {...state, fetching: true}
      }
      case 'FETCH_COLLECTIONS_REJECTED': {
        return {...state, fetching: false, error: action.payload}
      }
      case 'FETCH_COLLECTIONS_FULFILLED': {
        return {
          ...state,
          fetching: false,
          fetched: true,
          collections: action.payload,
        }
      }
      case 'ADD_TWEET': {
        return {
          ...state,
          collections: [...state.collections, action.payload],
        }
      }
      case 'UPDATE_TWEET': {
        const { id, text } = action.payload
        const newTweets = [...state.collections]
        const tweetToUpdate = newTweets.findIndex(tweet => tweet.id === id)
        newTweets[tweetToUpdate] = action.payload;

        return {
          ...state,
          collections: newTweets,
        }
      }
      case 'DELETE_TWEET': {
        return {
          ...state,
          collections: state.collections.filter(tweet => tweet.id !== action.payload),
        }
      }
    }

    return state
}
