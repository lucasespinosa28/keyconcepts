import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import AuthForm from "./components/AuthForm.jsx";
import List from "./components/List.jsx";
import NewsletterField from "./components/NewsletterField.jsx";
import Repeater from "./components/Repeater.jsx";
import CharCounter from "./components/CharCounter.jsx";
import Search from "./components/Search.jsx";
import ProductsList from "./components/ProductsList.jsx";
import Todos from "./components/Todos.jsx";
import ChangeColor from "./components/ChangeColor.jsx";
import EmailForm from "./components/EmailForm.jsx";

const products = [
    {id: 'p1', title: 'A Book', price: 59.99},
    {id: 'p2', title: 'A Carpet', price: 129.49},
    {id: 'p3', title: 'Another Book', price: 39.99},
    ];
function App() {
	const [count, setCount] = useState(0);
	return (
		<div className="App">
			<div>
				<a href="https://vitejs.dev" target="_blank" rel="noreferrer">
					<img src="/vite.svg" className="logo" alt="Vite logo" />
				</a>
				<a href="https://reactjs.org" target="_blank" rel="noreferrer">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
        <EmailForm />
			</div>
		</div>
	);
}

export default App;
