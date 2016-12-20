export default function reducer(state={
  loginVisible: false,
  registerVisible: false,
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
          auth: {...state.auth, access_token: action.payload.access_token, loggedIn: true},
        };
      }

    case 'LOGOUT_RESPONSE_FULFILLED': {
      return{
        ...state,
        auth:{...state.auth, access_token: null, loggedIn: false}
      };
    }

    case 'SHOW_REGISTER_MODAL': {
      return {...state, registerVisible: true, loggedIn: false};
    }

    case 'HIDE_REGISTER_MODAL': {
      return {...state, registerVisible: false};
    }

    default:
      return state;
  }
}
