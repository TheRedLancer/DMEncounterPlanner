import React from 'react';
import './App.css';
import HelloWorld from './HelloWorld';
import Clock from './Clock';

function App() {
	return (
		<div className="App">
			<Clock />
			<HelloWorld text="This is an alert" />
		</div>
	);
}
export default App;
