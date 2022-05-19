import { IToDo, ToDoCategory } from '../type';
import { toDoState } from '../atoms';
import React from 'react';
import { useSetRecoilState } from 'recoil';

function ToDo({ id, text, category }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;

    setToDos((toDos) => {
      const targetIdx = toDos.findIndex((toDo) => toDo.id === id);
      const newToDo = { text, id, category: name as ToDoCategory };
      return [
        ...toDos.slice(0, targetIdx),
        newToDo,
        ...toDos.slice(targetIdx + 1),
      ];
    });
  };
  return (
    <li key={id}>
      {text}
      {category !== ToDoCategory.Doing && (
        <button name={ToDoCategory.Doing} onClick={onClick}>
          Doing
        </button>
      )}
      {category !== ToDoCategory.ToDo && (
        <button name={ToDoCategory.ToDo} onClick={onClick}>
          To Do
        </button>
      )}
      {category !== ToDoCategory.Done && (
        <button name={ToDoCategory.Done} onClick={onClick}>
          Done
        </button>
      )}
    </li>
  );
}
export default ToDo;
