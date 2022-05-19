import { atom } from 'recoil';
import { IToDo } from './index.d';

export const toDoState = atom<IToDo[]>({
  key: 'toDo',
  default: [],
});
