export default function reducer(state={
  loginVisible: false,
  loginForm: {
    email: null,
    password: null
  },
  auth: {
    access_token: null,
    loggedIn: false
  }
}, action) {

  switch (action.type) {
    case 'SHOW_LOGIN_MODAL': {
      return {...state, loginVisible: true};
    }

    case 'HIDE_LOGIN_MODAL': {
      return {...state, loginVisible: false};
    }

    case 'LOGIN_RESPONSE_FULFILLED': {
        return {
          ...state,
          auth: {...state.auth, access_token: action.payload.access_token},
        };
      }

    case 'LOGOUT_RESPONSE_FULFILLED': {
      return{
        ...state,
        auth:{...state.auth, access_token: null}
      };
    }

    default:
      return state;
  }
}
