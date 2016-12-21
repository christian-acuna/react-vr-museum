export function login(auth_token, user_id, username) {
    localStorage.setItem('user_token', auth_token),
    localStorage.setItem('user_id', user_id)
    localStorage.setItem('username', username)
}

export function logout() {
  localStorage.removeItem('user_token'),
  localStorage.removeItem('user_id')
  localStorage.removeItem('username')
}
