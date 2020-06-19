import React, { Component } from 'react';

export default class TextBox extends Component {
	constructor(props) {
		super(props);
		this.state = { value: 'Type here' };

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({ value: event.target.value });
	}

	handleSubmit(event) {
		alert('Tried to save note: ' + this.state.value);
		event.preventDefault();
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<label>
						<p1>Take some notes!</p1>
						<br />
						<textarea type="text" value={this.state.value} onChange={this.handleChange} />
						<br />
					</label>
					<input type="submit" value="Save" />
				</form>
			</div>
		);
	}
}
