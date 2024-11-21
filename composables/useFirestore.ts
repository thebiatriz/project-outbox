import { getFirestore, doc, setDoc, getDoc, deleteDoc, updateDoc, collection, getDocs } from 'firebase/firestore';

export default function useFirestore() {
    const firestore = getFirestore();

    const create = (collectionName: string, documentId: string, data: object) => {
        const docRef = doc(firestore, collectionName, documentId);
        return setDoc(docRef, data);
    };

    const get = (collectionName: string, documentId: string) => {
        const docRef = doc(firestore, collectionName, documentId);
        return getDoc(docRef);  // Retorna uma Promise
    };

    const getAll = (collectionName: string) => {
        const querySnapshot = getDocs(collection(firestore, collectionName));
        return querySnapshot;  // Retorna uma Promise
    };

    const update = (collectionName: string, documentId: string, data: object) => {
        const docRef = doc(firestore, collectionName, documentId);
        return updateDoc(docRef, data);  // Retorna uma Promise
    };

    const deleteR = (collectionName: string, documentId: string) => {
        const docRef = doc(firestore, collectionName, documentId);
        return deleteDoc(docRef);  // Retorna uma Promise
    };

    return {
        create,
        get,
        getAll,
        update,
        deleteR,
    };
}
