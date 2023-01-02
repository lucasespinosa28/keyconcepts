import React, { useState} from "react";

function uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}

export default function Todos(){
    const [todos,setTodos] = useState(["Learn React","Recommed this book"]);
    function addTodoHandler(){
        console.log("click")
        todos.push("A new todo");
    }
  return(
          <div>
            <button  onClick={addTodoHandler}>Add Todo</button >
            <ul>
              {todos.map(todo => <li key={uuidv4()}>{todo}</li>)}
            </ul>
          </div>
          )
}