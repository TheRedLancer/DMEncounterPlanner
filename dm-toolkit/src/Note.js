import React, { Component } from 'react';

export default class Note extends Component {
	constructor(props) {
		super(props);
		this.state = { showNote: false };
		this.handleTitleClick = this.handleTitleClick.bind(this);
	}

	handleDelete() {
		this.props._handleDelete(this.props.id);
	}

	handleTitleClick() {
		this.setState({ showNote: !this.state.showNote });
	}

	handleEdit() {
		console.log('Note ID:' + this.props.id + ' tried to edit.');
	}

	render() {
		return (
			<div>
				<h3 onClick={this.handleTitleClick}>{this.props.noteTitle}</h3>
				<p>{this.state.showNote ? this.props.noteText : ''}</p>
				<button id="noteDeleteButton" onClick={() => this.handleDelete()}>
					Delete
				</button>
				<button id="noteEditButton" onClick={() => this.handleEdit()}>
					Edit
				</button>
			</div>
		);
	}
}
