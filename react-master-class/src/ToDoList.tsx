import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function ToDoList() {
  const [value, setValue] = useState('');
  const { register } = useForm();
  //   const onChange = (event: React.FormEvent<HTMLInputElement>) => {
  //     const {
  //       currentTarget: { value },
  //     } = event;
  //     setValue(value);
  //   };

  //   const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //     event.preventDefault();
  //   };
  return (
    <div>
      <form>
        <input placeholder="Wirte a to do" />
        <button>add</button>
      </form>
    </div>
  );
}

export default ToDoList;
