import React, { useState} from "react";

export default function CharCounter(){
  const [userInput,setUserInput] = useState("");

  function inputHandler(event){
      setUserInput(event.target.value)
  }
  const numChars = userInput.length;
  return(
    <div>
      <input type="text" onChange={inputHandler}/>
      <p>Characters entered: {numChars}</p>
    </div>
    )
}