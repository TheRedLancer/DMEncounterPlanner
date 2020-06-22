import React, { Component } from 'react';

export default class Note extends Component {
	constructor(props) {
		super(props);
		this.noteText = this.props.noteText;
		this.title = this.props.noteTitle === '' ? 'Note ' + this.props.id : this.props.noteTitle;
	}
	handleDelete() {
		this.props._handleDelete(this.props.id);
	}

	render() {
		return (
			<div>
				{this.title}
				<button id="noteDeleteButton" onClick={() => this.handleDelete()}>
					Delete
				</button>
			</div>
		);
	}
}
