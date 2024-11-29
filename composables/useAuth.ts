import {
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    type User,
    type Auth
} from 'firebase/auth';
import { ref, computed, onMounted } from 'vue';

export default function useAuth() {
    const auth = useState<Auth>('firebaseAuth').value;

    const currentUser = ref<User | null>(null);

    const authState = () => {
        onAuthStateChanged(auth, (user) => {
            currentUser.value = user;
        });
    };

    const registerUser = async (email: string, password: string) => {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        currentUser.value = userCredential.user;
        return userCredential.user;
    };

    const login = async (email: string, password: string) => {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        currentUser.value = userCredential.user;
        return userCredential.user;
    };

    const logout = async () => {
        await signOut(auth);
        currentUser.value = null;
    };

    const isAuthenticated = computed(() => currentUser.value !== null);

    onMounted(() => {
        authState();
    });

    return {
        registerUser,
        login,
        logout,
        currentUser,
        isAuthenticated,
    };
}
