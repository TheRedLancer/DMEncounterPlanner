import React, { Component } from 'react';

export default class Note extends Component {
	constructor(props) {
		super(props);
		this.noteText = this.props.noteText;
	}
	handleDelete() {
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
