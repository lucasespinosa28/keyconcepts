import React, { useState} from "react";

export default function Repeater(){
    const [userInput,setUserInput] = useState("");

    function inputHandler(event){
        setUserInput(event.target.value)
    }
  return(
          <div>
            <input type="text" onChange={inputHandler}/>
            <p>You entered: {userInput}</p>
          </div>
  )
}