import React, { Component } from 'react';

export default class Note extends Component {
	constructor(props) {
		super(props);
		this.noteText = this.props.noteText;
	}
	handleClick() {}

	render() {
		return (
			<div>
				{this.noteText}
				<button id="noteDeleteButton" onClick={() => this.handleClick()}>
					Delete
				</button>
			</div>
		);
	}
}
