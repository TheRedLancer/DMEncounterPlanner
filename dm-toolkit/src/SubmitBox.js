import React, { Component } from 'react';

export default class SubmitBox extends Component {
	constructor(props) {
		super(props);
		this.state = { value: 'Type here' };

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleFocus = this.handleFocus.bind(this);
		this.noteList = [ 'Note 1', 'Note 2' ];
	}

	handleChange(event) {
		this.setState({ value: event.target.value });
	}

	handleSubmit(event) {
		this.noteList.push(this.state.value);
		this.forceUpdate();
		event.preventDefault();
	}

	handleFocus() {
		if (this.state.value === 'Type here') {
			this.setState({ value: '' });
		}
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit} onFocus={this.handleFocus}>
					<label>
						<p1>Take some notes!</p1>
						<br />
						<textarea
							type="text"
							value={this.state.value}
							onChange={this.handleChange}
							rows="6"
							cols="60"
						/>
						<br />
					</label>
					<input type="submit" value="Save" />
				</form>
				<ul>{this.noteList.map((n) => <li key={n.id}>{n}</li>)}</ul>
			</div>
		);
	}
}
