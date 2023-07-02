import { useState } from 'react';

import { addTask } from '@/helpers/methods';

const Form = () => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (inputValue.length > 3) {
      const newTask = {
        message: inputValue,
      };

      addTask(newTask);
      setInputValue('');
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
