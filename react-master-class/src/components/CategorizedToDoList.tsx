import { IToDo } from '../type';
import ToDo from './ToDo';

function CategorizedToDoList(name: string, toDos: IToDo[]) {
  return (
    <>
      <h2>{name}</h2>
      <ul>
        {toDos.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
    </>
  );
}

export default CategorizedToDoList;
