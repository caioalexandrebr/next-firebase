import { useState, useEffect } from 'react';

import { collection, query, onSnapshot } from 'firebase/firestore';

import firebaseConfig from '@/config/firebase';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

import { deleteTask } from '@/helpers/methods';

const List = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'tasks'));

    onSnapshot(q, (querySnapshot) => {
      const allTasks = [];
      querySnapshot.forEach((doc) => {
        const taskInfo = {
          ...doc.data(),
          id: doc.id,
        };

        allTasks.push(taskInfo);
      });

      setTasks(allTasks);
    });
  }, []);

  return (
    <div>
      <ul>
        {tasks.map(({ id, message }) => (
          <li key={id}>
            <span>{message}</span>
            <button onClick={() => deleteTask(id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
