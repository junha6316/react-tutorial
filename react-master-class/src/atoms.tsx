import { atom, selector } from 'recoil';
import { IToDo, ToDoCategory } from './type';

export const toDoState = atom<IToDo[]>({
  key: 'toDo',
  default: [],
});
export const categoryState = atom<IToDo['category']>({
  key: 'toDoCategory',
  default: ToDoCategory.ToDo,
});

export const toDoSelector = selector({
  key: 'toDoSelector',
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos.filter((toDo) => toDo.category === category);
  },
});
