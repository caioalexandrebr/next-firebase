import { useAllTasks } from '@/hooks';
import { deleteTask } from '@/helpers/methods';

const List = () => {
  const tasks = useAllTasks();

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
