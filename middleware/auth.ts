export default defineNuxtRouteMiddleware((to, from) => { 
  const authenticated: boolean = verifyAuthentication()

  if (!authenticated) {
    return navigateTo('\login')
  }
    
})