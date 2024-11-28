export function setAuthentication(status: boolean): void {
  localStorage.setItem("auth", status ? "AUTHENTICATED" : "NOTAUTHENTICATED");
}

export function verifyAuthentication(): boolean {
  return localStorage.getItem("auth") === "AUTHENTICATED";
}

export function clearAuthentication(): void {
  localStorage.removeItem('auth');
}
