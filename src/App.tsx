import axios from "axios";
import React, { useEffect, useState } from "react";
import { setCommentRange } from "typescript";
interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
function App() {
  const [todo2, setTodo2] = useState<Todo>();
  const [todo, setTodo] = useState<Todo>();
  const [counter, setCounter] = useState(1);
  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);
  const cat = localStorage.getItem("myCat");
  localStorage.setItem("myCat", "Tom");
  localStorage.setItem("myMouse", "Jerry");
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/todos/${counter}`)
      .then((res) => setTodo(res.data));
  }, [counter]);
  return (
    <div>
      {counter}
      <button onClick={increment}> plus</button>
      <button disabled={counter === 1} onClick={decrement}>
        {" "}
        minus{" "}
      </button>
      <span> {todo?.title} </span>
    </div>
  );
}
//function Interface{
//  localStorage.setItem("myCat", "Tom")
//  localStorage.setItem("myMouse", "Jerry")
// }

export default App;
