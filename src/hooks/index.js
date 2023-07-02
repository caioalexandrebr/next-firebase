import { useState, useEffect } from 'react';

import { collection, query, onSnapshot } from 'firebase/firestore';

import firebaseConfig from '@/config/firebase';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

export const useAllTasks = () => {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'tasks'));

    onSnapshot(q, (querySnapshot) => {
      const allTasks = [];

      querySnapshot.forEach((task) => {
        const taskInfo = {
          ...task.data(),
          id: task.id,
        };

        allTasks.push(taskInfo);
      });

      setTasks(allTasks);
    });
  });

  return tasks;
};
