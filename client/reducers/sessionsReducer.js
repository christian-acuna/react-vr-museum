export default function reducer(state={
  loginVisible: false,
  loginForm: {
    email: null,
    password: null
  }
}, action) {

  switch (action.type) {
    case 'SHOW_LOGIN_MODAL': {
      return {...state, loginVisible: true};
    }

    case 'HIDE_LOGIN_MODAL': {
      return {...state, loginVisible: false};
    }
    // case 'UPDATE_EMAIL_LOGIN': {
    //   return {...state, loginForm: {...state.loginForm, email: action.payload} }
    // }
    //
    // case 'UPDATE_PASSWORD_LOGIN': {
    //   return {...state, loginForm: {...state.loginForm, password: action.payload} }
    // }

    default:
      return state;
  }
}
