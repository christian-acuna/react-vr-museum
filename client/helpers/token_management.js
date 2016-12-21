export function login(auth_token, user_id) {
    localStorage.setItem('user_token', auth_token),
    localStorage.setItem('user_id', user_id)
}

export function logout() {
  localStorage.removeItem('user_token'),
  localStorage.removeItem('user_id')
}
