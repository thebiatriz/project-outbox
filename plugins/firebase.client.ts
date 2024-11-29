import { getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

import type { FirebaseOptions } from "@firebase/app";

export default defineNuxtPlugin(nuxtApp => {
    if (import.meta.client) {
        if (!getApps().length) {
            const firebaseConfig = useRuntimeConfig().public.firebaseConfig as FirebaseOptions;
            const app = initializeApp(firebaseConfig);
            const auth = getAuth(app)
            useState('firebaseAuth', () => auth)

            nuxtApp.provide('auth', auth);
            nuxtApp.provide('firestore', getFirestore(app));
            nuxtApp.provide('analytics', getAnalytics(app));
            nuxtApp.provide('storage', getStorage(app));
        }
    }
});
