import {
  addDocument,
  getAllDocuments,
  updateDocument,
  deleteDocument,
  getDocumentById,
} from '../../services/firestoreService';
import { User } from './models/user.types';

export const addUser = async (user: User) => {
  return await addDocument<User>('users', user);
};

export const getAllUsers = async () => {
  return await getAllDocuments('users');
};

export const getUserById = async (id: string) => {
  return await getDocumentById<User>('users', id);
};

export const updateUser = async (id: string, user: Partial<User>) => {
  return await updateDocument<User>('users', id, user);
};

export const deleteUser = async (id: string) => {
  return await deleteDocument('users', id);
};
