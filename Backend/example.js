import React, { Component } from 'react';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '<username>',
			response: ''
		};
	}

	componentDidMount() {
		this.getName();
	}

	render() {
		return (
			<div className="titlebox">
				<h1>Hello, {this.state.name}</h1>
				<p>{this.state.response}</p>
				<button onClick={() => this.setName()}>Click</button>
			</div>
		);
	}

	getName() {
		const options = {
			method: 'GET'
		};

		fetch('http://localhost:5000/name', options)
			.then((res) => res.json())
			.then((data) => {
				this.setState({ name: data.name, response: JSON.stringify(data) });
			})
			.catch(console.log);
	}

	setName(data) {
		const options = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ name: data })
		};

		fetch('http://localhost:5000/name', options)
			.then((res) => res.json())
			.then((data) => {
				if (data.success) {
					console.log('good');
				} else {
					console.log('bad');
				}
			})
			.catch(console.log);
	}
}

export default App;
