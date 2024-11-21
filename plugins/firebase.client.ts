import { getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

import type { FirebaseOptions } from "@firebase/app";

export default defineNuxtPlugin(nuxtApp => {
    if (import.meta.client && !getApps().length) {
        const firebaseConfig = nuxtApp.$config.firebaseConfig as FirebaseOptions;

        if (!firebaseConfig) {
            throw new Error('Firebase configuration is missing.');
        }

        const app = initializeApp(firebaseConfig);
        const auth = getAuth(app);

        nuxtApp.provide('auth', auth);
        nuxtApp.provide('firestore', getFirestore(app));
        nuxtApp.provide('analytics', getAnalytics(app));
        nuxtApp.provide('storage', getStorage(app));
    }
});
