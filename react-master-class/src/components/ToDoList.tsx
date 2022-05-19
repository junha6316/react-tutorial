import { useRecoilValue } from 'recoil';
import { toDoState } from '../atoms';
import CreateToDo from './CreateToDo';
import ToDo from './ToDo';
import { IToDo } from '../index.d';

function ToDoList() {
  const toDos = useRecoilValue(toDoState);
  return (
    <>
      <CreateToDo />
      <ul>
        {toDos.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
    </>
  );
}

export default ToDoList;
