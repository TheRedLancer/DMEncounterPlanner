import React, { Component } from 'react';

export default class Note extends Component {
	constructor(props) {
		super(props);
		this.noteText = this.props.noteText;
		this.handleDelete = this.handleDelete.bind(this);
	}
	handleDelete() {
		alert('Tried to delete note.');
		this.props._handleDelete(this.props.id);
	}

	render() {
		return (
			<div>
				{this.noteText}
				<button id="noteDeleteButton" onClick={() => this.handleDelete()}>
					Delete
				</button>
			</div>
		);
	}
}
