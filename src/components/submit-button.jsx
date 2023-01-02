import React, { useState } from "react";
export default function SubmitButton(){
	const [isSubmitted, setIsSubmitted] = useState(false);
	function submitHandler(){
		setIsSubmitted(true);
	}
	return(
		<button onClick={submitHandler}>
			{isSubmitted? "Loading...": "submit" }
		</button>
	);
}