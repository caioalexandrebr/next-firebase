import { useState } from 'react';

import { addTask } from '@/helpers/methods';

const Form = () => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (inputValue.length > 3) {
      const task = {
        message: inputValue,
      };

      const docRef = addTask(task);

      if (docRef.id) {
        setInputValue('');
      }
    } else {
      console.log('[Error] Message must contain at least 3 characters');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <input type="submit" value="Submit" />
    </form>
  );
};

export default Form;
