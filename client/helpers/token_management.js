export function login(auth_token) {
    localStorage.setItem('user_token', auth_token)
}

export function logout() {
  localStorage.removeItem('user_token')
}
