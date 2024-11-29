import useAuth from "~/composables/useAuth";
import { verifyAuthentication } from "~/utils.ts/authenticatedUser";

export default defineNuxtRouteMiddleware(async (to, from) => {
    const { isAuthenticated } = useAuth();

    const authenticated = isAuthenticated.value && verifyAuthentication();

    if (!authenticated && to.path !== '/login') {
        return navigateTo('/login');
    }
})