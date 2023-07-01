import firebaseConfig from '@/config/firebase';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { collection, doc, addDoc, deleteDoc } from 'firebase/firestore';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const addTask = async (data) => {
  const docRef = await addDoc(collection(db, 'tasks'), data);

  return docRef.id;
};

export const deleteTask = async (id) => {
  await deleteDoc(doc(db, 'tasks', id));
};
