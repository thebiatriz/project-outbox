import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, type User } from 'firebase/auth';

export default function useAuth() {
    const auth = getAuth();

    const registerUser = async (email: string, password: string) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            return userCredential.user;
        } catch (error: unknown) {
            if (error instanceof Error) {
                throw new Error(`Erro no registro: ${error.message}`);
            }
            throw new Error('Erro desconhecido no registro');
        }
    };

    const login = async (email: string, password: string) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            return userCredential.user;
        } catch (error: unknown) {
            if (error instanceof Error) {
                throw new Error(`Erro no login: ${error.message}`);
            }
            throw new Error('Erro desconhecido no login');
        }
    };

    const logout = async () => {
        try {
            await signOut(auth);
        } catch (error: unknown) {
            if (error instanceof Error) {
                throw new Error(`Erro no logout: ${error.message}`);
            }
            throw new Error('Erro desconhecido no logout');
        }
    };

    return {
        registerUser,
        login,
        logout,
    };
}