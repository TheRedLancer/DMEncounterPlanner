import React from 'react';

const HelloWorld = () => {
	function sayHello() {
		alert('Hello World');
	}

	return <button onClick={sayHello}>Click Me!</button>;
};

export default HelloWorld;
