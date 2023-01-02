import React, { useState} from "react";

export default function EmailInput(){
  const [errorMessage,setErrorMessage] = useState("");
  const evaluateEmail = (e) => {
    const enteredEmail = e.target.value;
    setErrorMessage("");
    if(enteredEmail.trim() === ""|| !enteredEmail.includes("@")){
        setErrorMessage("The entered email address is invalid.");
    }
  };
  return(
          <div>
            <input placeholder="Your email" type="email" onBlur={evaluateEmail}/>
            <p>{errorMessage}</p>
          </div>
  )
}