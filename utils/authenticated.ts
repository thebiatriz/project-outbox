export function authenticated(validate: string): void {
  if(validate === "validate") {
    localStorage.setItem('auth','AUTHENTICATED')
  } else {
    localStorage.setItem('auth','NOAUTHENTICATED')
  }
}

export function verifyAuthentication(): boolean {
  const auth = localStorage.getItem('auth')

  if(auth === 'AUTHENTICATED'){
    return true
  }
  return false
}

export function clearAuthentication(): void {
  localStorage.removeItem('auth')
}