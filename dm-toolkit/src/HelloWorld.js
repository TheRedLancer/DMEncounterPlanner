import React, { Component } from 'react';

export default class HelloWorld extends Component {
	handleClick(h) {
		alert(h);
	}

	render() {
		return (
			<div>
				<button onClick={() => this.handleClick(this.props.text)}>Click Me!</button>
			</div>
		);
	}
}
