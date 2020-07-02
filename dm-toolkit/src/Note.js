import React, { Component } from 'react';

export default class Note extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showNote: false,
			isEditing: false,
			titleValue: this.props.noteTitle,
			value: this.props.noteText
		};
		this.handleTitleChange = this.handleTitleChange.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleTitleClick = this.handleTitleClick.bind(this);
		this.handleClearNote = this.handleClearNote.bind(this);
		this.handleSave = this.handleSave.bind(this);
	}

	handleDelete() {
		this.props._handleDelete(this.props.id);
	}

	handleTitleClick() {
		this.setState({ showNote: !this.state.showNote });
	}

	handleEdit() {
		console.log('Note ID:' + this.props.id + ' tried to edit.');
		this.setState({ isEditing: true });
	}

	handleSave(event) {
		event.preventDefault();
		console.log('Note ID:' + this.props.id + ' tried to save.');
		this.props._editNote(this.props.id, this.state.titleValue, this.state.value);
		this.setState({ isEditing: false });
	}

	deleteButton() {
		return (
			<button id="noteDeleteButton" onClick={() => this.handleDelete()}>
				Delete
			</button>
		);
	}

	handleTitleChange(event) {
		this.setState({ titleValue: event.target.value });
	}

	handleChange(event) {
		this.setState({ value: event.target.value });
	}

	handleClearNote() {
		this.setState({
			titleValue: '',
			value: ''
		});
	}

	render() {
		if (this.state.isEditing) {
			return (
				<div>
					<form onSubmit={this.handleSave}>
						<label>
							<textarea
								type="text"
								placeholder="Note Title"
								value={this.state.titleValue}
								onChange={this.handleTitleChange}
								rows="2"
								cols="60"
							/>
							<br />
							<textarea
								type="text"
								placeholder="Type here"
								value={this.state.value}
								onChange={this.handleChange}
								rows="6"
								cols="60"
							/>
							<br />
						</label>
						<input type="submit" value="Save" />
						<input type="button" value="Clear" onClick={this.handleClearNote} />
					</form>
					{this.deleteButton()}
				</div>
			);
		} else {
			return (
				<div>
					<h3 onClick={this.handleTitleClick}>{this.state.titleValue}</h3>
					<p>{this.state.showNote ? this.state.value : ''}</p>
					{this.deleteButton()}
					<button id="noteEditButton" onClick={() => this.handleEdit()}>
						Edit
					</button>
				</div>
			);
		}
	}
}
