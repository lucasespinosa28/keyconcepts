import React, { useState} from "react";

export default function NewsletterField(){
    const [email,setEmail] = useState("");
    const [agreed, setAgreed] = useState(false);
    const updateEmailHandler = (event) => {
      setEmail(event.target.value);
    }
    const updateAgreementHandler = (event) => {
        setAgreed(event.target.value);
        console.log(event.target.value);
    }
    const signupHandler = (event) => {
      event.preventDefault()
      const userData = {userEmail: email, usersAgrees: agreed};
      if(agreed){
        console.log(userData);
      }
    }
  return(
  <form onSubmit={signupHandler}>
    <div>
      <label htmlFor="email">Your email</label>
      <input type="email" id="email" onChange={updateEmailHandler} />
    </div>
    <div>
      <input type="checkbox" id="agree" onChange={updateAgreementHandler} />
      <label htmlFor="agree">Agree to terms and conditions</label>
    </div>
    <div>
      <button type="submit">Submit</button>
    </div>
  </form>
  );
}