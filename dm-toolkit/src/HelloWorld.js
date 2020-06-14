import React, { Component } from 'react';

export default class HelloWorld extends Component {
	clickHandler(h) {
		alert(h);
	}

	render() {
		return (
			<div>
				<button onClick={this.clickHandler.bind(null, this.props.text)}>Click Me! </button>
			</div>
		);
	}
}
