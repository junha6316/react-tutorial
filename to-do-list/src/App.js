import Button  from "./Button";
import {useState, useEffect} from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue(current => current +1)
  const onChange = (event) => setKeyword(event.target.value)
  const apiCall =()=>  console.log("call an api")
  
  useEffect(apiCall,[])
  useEffect(()=>{
    if(keyword !== "" && keyword.length >= 5){
      console.log("search for", keyword)
    }
  }, [keyword])
  return (
    <div className="App">
    <input type="text" placeholder="Search here.." onChange={onChange}/>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
