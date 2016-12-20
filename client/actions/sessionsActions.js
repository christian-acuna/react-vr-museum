import axios from 'axios'
import * as LocalStorage from '../helpers/token_management'
import { browserHistory } from 'react-router'

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
        LocalStorage.login(response.data.access_token)
        console.log(response);
        dispatch({type: 'LOGIN_RESPONSE_FULFILLED', payload: response.data});
      })
      .catch((err) => {
        dispatch({type: 'LOGIN_RESPONSE_REJECTED', payload: err});
      });
  };
}

export function logOut() {
  LocalStorage.logout()
  browserHistory.push('/')
  return {
    type: 'LOGOUT_RESPONSE_FULFILLED'
  };
}

// export function showProfile(){
//   return function(dispatch){
//     axios.post('https://vr-museum-api.herokuapp.com/v1/'
//   }
// }
