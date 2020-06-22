import React, { Component } from 'react';

export default class Note extends Component {
	constructor(props) {
		super(props);
		this.noteText = this.props.noteText;
	}
	handleClick() {
		alert('Tried to delete note.');
	}

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
