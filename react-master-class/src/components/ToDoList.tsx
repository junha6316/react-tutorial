import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { categoryState, toDoSelector, toDoState } from '../atoms';
import CreateToDo from './CreateToDo';
import ToDo from './ToDo';
import { IToDo, ToDoCategory } from '../type';
import React, { useState } from 'react';

function ToDoList() {
  const setToDos = useSetRecoilState(toDoState);
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);

  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setCategory(value as any);
  };

  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <select onInput={onInput}>
        <option value={ToDoCategory.ToDo}>To Do</option>
        <option value={ToDoCategory.Doing}>Doing</option>
        <option value={ToDoCategory.Done}>Done</option>
      </select>
      <CreateToDo />
      <h2>To Do</h2>
      <ul>
        {toDos.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
