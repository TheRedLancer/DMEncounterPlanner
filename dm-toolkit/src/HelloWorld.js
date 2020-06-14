import React from 'react';

const HelloWorld = () => {
	function sayHello() {
		alert('I love Madelline');
	}

	return <button onClick={sayHello}>Click Me!</button>;
};

export default HelloWorld;
