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

export function showRegisterModal() {
  return {
    type: 'SHOW_REGISTER_MODAL'
  };
}

export function hideRegisterModal() {
  return {
    type: 'HIDE_REGISTER_MODAL'
  };
}

export function sendLogin(email, password) {
  return function(dispatch) {
    axios.post('https://vr-museum-api.herokuapp.com/v1/login', {
      email: email,
      password: password
    })
      .then((response) => {
        LocalStorage.login(response.data.access_token, response.data.user_id, response.data.username)
        console.log(response);
        dispatch({type: 'LOGIN_RESPONSE_FULFILLED', payload: response.data});
      })
      .catch((err) => {
        dispatch({type: 'LOGIN_RESPONSE_REJECTED', payload: err});
      });
  };
}

export function registerUser(username, email, password) {
  console.log(username, email, password)
  return function(dispatch) {
    axios.post('https://vr-museum-api.herokuapp.com/v1/users', {
      user: {
        username : username,
        email : email,
        password : password
      }
    })
      .then((response) => {
        LocalStorage.login(response.data.access_token, response.data.id, response.data.username)
        console.log(response, 'yooo');
        dispatch({type: 'LOGIN_RESPONSE_FULFILLED', payload: response.data});
      })
      .catch((err) => {
        console.log(err);
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
