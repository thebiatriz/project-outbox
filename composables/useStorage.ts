import { getStorage, ref as storageRef, uploadBytes } from 'firebase/storage';

export default function useStorage() {
    const storage = getStorage();

    const uploadFile = async (file: File, path: string) => {
        try {
            const storagePath = storageRef(storage, path);
            const uploadResult = await uploadBytes(storagePath, file);
            return uploadResult;
        } catch (error: unknown) {
            if (error instanceof Error) {
                throw new Error(`Erro ao carregar arquivo no Storage: ${error.message}`);
            }
            throw new Error('Erro desconhecido ao carregar arquivo no Storage');
        }
    };

    return {
        uploadFile
    };
}