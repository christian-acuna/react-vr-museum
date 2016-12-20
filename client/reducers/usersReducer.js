export default function reducer(state={
  user: {
    email: null,
    username: null,
    user_id: null,
    collectionTitles: [],
  },
}, action) {

  switch (action.type) {

    case 'LOGIN_RESPONSE_FULFILLED': {
        return {
          ...state,
          user: {...state.user, email: action.payload.email,
                                username: action.payload.username,
                                user_id:  action.payload.user_id
                              },
        };
      }


      case 'FETCH_COLLECTION_TITLE_FULFILLED': {
        return{
          ...state,
          user: {...state.user, collectionTitles: action.payload},
        }
      }

    default:
      return state;
  }
}
