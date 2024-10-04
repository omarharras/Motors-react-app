import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  CollectionReference,
  DocumentData,
  WithFieldValue,
  getDoc,
} from 'firebase/firestore';
import { db } from './firebaseConfig';

export const getCollectionRef = (
  collectionName: string
): CollectionReference => {
  return collection(db, collectionName);
};

// Add a new document to any collection
export const addDocument = async <T extends WithFieldValue<DocumentData>>(
  collectionName: string,
  data: T
): Promise<string | undefined> => {
  try {
    const docRef = await addDoc(getCollectionRef(collectionName), data);
    return docRef.id; // Return the ID of the added document
  } catch (error) {
    console.error(`Error adding document to ${collectionName}:`, error);
  }
};

// Get all documents from any collection
export const getAllDocuments = async <T>(
  collectionName: string
): Promise<T[]> => {
  try {
    const querySnapshot = await getDocs(getCollectionRef(collectionName));
    const documents = querySnapshot.docs.map(
      (doc) => ({ ...doc.data(), id: doc.id } as T)
    );
    return documents;
  } catch (error) {
    console.error(`Error fetching documents from ${collectionName}:`, error);
    return [];
  }
};

// Update a document in any collection by its ID
export const updateDocument = async <T>(
  collectionName: string,
  id: string,
  updatedData: Partial<T>
): Promise<void> => {
  try {
    const documentRef = doc(db, collectionName, id);
    await updateDoc(documentRef, updatedData);
  } catch (error) {
    console.error(`Error updating document in ${collectionName}:`, error);
  }
};

// Delete a document in any collection by its ID
export const deleteDocument = async (
  collectionName: string,
  id: string
): Promise<void> => {
  try {
    const documentRef = doc(db, collectionName, id);
    await deleteDoc(documentRef);
  } catch (error) {
    console.error(`Error deleting document from ${collectionName}:`, error);
  }
};

// Get a single document by ID from any collection
export const getDocumentById = async <T>(
  collectionName: string,
  id: string
): Promise<T | null> => {
  try {
    const documentRef = doc(db, collectionName, id);
    const documentSnapshot = await getDoc(documentRef);

    if (documentSnapshot.exists()) {
      return { ...documentSnapshot.data(), id: documentSnapshot.id } as T;
    } else {
      console.error(
        `Document with ID ${id} not found in collection ${collectionName}`
      );
      return null;
    }
  } catch (error) {
    console.error(
      `Error fetching document with ID ${id} from ${collectionName}:`,
      error
    );
    return null;
  }
};
