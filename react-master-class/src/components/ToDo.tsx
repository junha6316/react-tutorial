import { IToDo } from '../index.d';
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
      const newToDo = { text, id, category: name as any };
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
      {category !== 'DOING' && (
        <button name="DOING" onClick={onClick}>
          Doing
        </button>
      )}
      {category !== 'TO_DO' && (
        <button name="TO_DO" onClick={onClick}>
          To Do
        </button>
      )}
      {category !== 'DONE' && (
        <button name="DONE" onClick={onClick}>
          Done
        </button>
      )}
    </li>
  );
}
export default ToDo;
