import {useState} from "react"
function App() {

    const [toDo, setToDo] = useState("");
    const [toDos, setToDos] = useState([]);
    const onChange = (event) => setToDo(event.target.value)
    const onSubmit = (event) => {
      event.preventDefault();
      if (toDo === ""){
        return 
      }

      setToDo("")
      setToDos(currentToDos => [...currentToDos, toDo])
    }
  
  return (
    <div>
    <h1>My To Dos ({toDos.length})</h1>
    <form onSubmit={onSubmit}>
      <input type="Text" value={toDo} placeholder="할일을 적으세요" onChange={onChange} />
      <button>submit</button>
      </form>
      <hr />
      {toDos.map((toDo, idx ) => (
        <li key={idx}>{toDo}</li>
      ))}
    </div>
  );
}

export default App;
