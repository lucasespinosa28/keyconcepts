import { useRef }  from "react";

export default function EmailForm(){
  const emailRef = useRef();
  function submitFormHandler(event){
    event.preventDefault();
    const enteredEmail = emailRef.current.value;
    alert(enteredEmail);
  }
  return(
          <form onSubmit={submitFormHandler}>
            <label htmlFor="email">Your email</label>
            <input ref={emailRef} type="email" id="email" />
            <button>Save</button>
          </form>
  )
}