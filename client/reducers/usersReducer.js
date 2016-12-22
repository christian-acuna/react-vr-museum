export default function reducer(state={
  user: {
    email: null,
    username: null,
    user_id: null,
    collectionTitles: [],
    collections:[],
    showCreateCollection:false
  },
}, action) {

  switch (action.type) {

    case 'LOGIN_RESPONSE_FULFILLED': {
      console.log(action.payload.id,"ppppppppppppp")
        return {
          ...state,
          user: {...state.user, email: action.payload.email,
                                username: action.payload.username,
                                user_id:  action.payload.id
                              },
        };
      }


      case 'FETCH_COLLECTION_TITLE_FULFILLED': {
        return{
          ...state,
          user: {...state.user, collectionTitles: action.payload},
        }
      }

      case 'FETCH_USER_COLLECTIONS_FULFILLED':{
        return{
          ...state,
          user: {...state.user, collections: action.payload}
        }
      }
      
      case 'FETCH_USER_COLLECTIONS_REJECTED':{
        return state;
      }

      case 'HIDE_FORM':{
        return {
          ...state,
          showCreateCollection: false,
        }
      }
      
    default:
      return state;
  }
}
