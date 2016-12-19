import axios from 'axios'

export function showLoginModal() {
  return {
    type: 'SHOW_LOGIN_MODAL'
  };
}

export function hideLoginModal() {
  return {
    type: 'HIDE_LOGIN_MODAL'
  };
}

export function sendLogin(email, password) {
  return function(dispatch) {
    axios.post('https://vr-museum-api.herokuapp.com/v1/login', {
      email: email,
      password: password
    })
      .then((response) => {
        console.log(response);
        dispatch({type: 'LOGIN_RESPONSE_FULFILLED', payload: response.data});
      })
      .catch((err) => {
        dispatch({type: 'LOGIN_RESPONSE_REJECTED', payload: err});
      });
  };
}

export function logOut() {
  return {
    type: 'LOGOUT_RESPONSE_FULFILLED'
  };
}