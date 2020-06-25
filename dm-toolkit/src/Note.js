import React, { Component } from 'react';

export default class Note extends Component {
	constructor(props) {
		super(props);
		this.noteText = this.props.noteText;
		this.title = this.props.noteTitle;
		this.state = { showNote: false };
		this.handleClick = this.handleClick.bind(this);
	}

	handleDelete() {
		this.props._handleDelete(this.props.id);
	}

	handleClick() {
		this.setState({ showNote: !this.state.showNote });
	}

	render() {
		return (
			<div>
				<h3 onClick={this.handleClick}>{this.title}</h3>
				<p>{this.state.showNote ? this.noteText : ''}</p>
				<button id="noteDeleteButton" onClick={() => this.handleDelete()}>
					Delete
				</button>
			</div>
		);
	}
}
