import { IToDo } from '../index.d';
import { toDoState } from '../atoms';

function ToDo({ id, text }: IToDo) {
  return (
    <li key={id}>
      {text}
      <button>DONE</button>
      <button>DOING</button>
      <button>TO DO</button>
    </li>
  );
}
export default ToDo;
