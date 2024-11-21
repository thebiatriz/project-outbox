import { getAuth } from "firebase/auth";
import { verifyAuthentication } from "~/utils.ts/authenticatedUser"

export default defineNuxtRouteMiddleware(async (to, from) => {
    const auth = getAuth();
    const user = auth.currentUser;
    
    const authenticated = user !== null && verifyAuthentication();

    if (!authenticated && to.path !== '/login') {
        return navigateTo('/login')
      }   
  })

