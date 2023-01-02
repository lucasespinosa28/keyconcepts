import React from "react";
import SubmitButton from "./submit-button";
import EmailInput from "./EmailInput.jsx";

export default function AuthForm(){
	return(
		<form>
      <EmailInput />
			<SubmitButton/>
		</form>
	);
}