import React, { Component } from 'react';
import Note from './Note';

export default class SubmitBox extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: '',
			titleValue: '',
			noteList: []
		};
		this.handleTitleChange = this.handleTitleChange.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
		this.handleClearNote = this.handleClearNote.bind(this);
	}

	loadList() {
		var list = JSON.parse(localStorage.getItem('storeNoteList'));
		console.log(list);
		this.setState({
			noteList: list.map((note) => (
				<Note noteTitle={note.title} noteText={note.noteText} _handleDelete={this.handleDelete} id={note.id} />
			))
		});
	}

	clearNoteLists() {
		this.setState({ noteList: [] });
		localStorage.setItem('storeNoteList', this.state.noteList);
	}

	componentDidMount() {
		localStorage.getItem('storeNoteList') ? this.loadList() : this.clearNoteLists();
		if (!localStorage.getItem('storeID')) {
			localStorage.setItem('storeID', '0');
		}
		console.log(this.state.noteList);
	}

	componentWillUnmount() {
		this.updateLSList();
	}

	handleTitleChange(event) {
		this.setState({ titleValue: event.target.value });
	}

	handleChange(event) {
		this.setState({ value: event.target.value });
	}

	handleSubmit(event) {
		event.preventDefault();
		var noteID = this.getID();
		this.state.noteList.push(
			<Note
				noteTitle={this.state.titleValue === '' ? 'Note ' + noteID : this.state.titleValue}
				noteText={this.state.value}
				_handleDelete={this.handleDelete}
				id={noteID}
			/>
		);
		this.updateLSList();
		this.forceUpdate();
	}

	updateLSList() {
		var list = this.state.noteList.map((note) => ({
			title: note.props.noteTitle,
			noteText: note.props.noteText,
			id: note.props.id
		}));
		localStorage.setItem('storeNoteList', JSON.stringify(list));
	}

	handleDelete(id) {
		this.setState(
			(prevState) => ({
				noteList: prevState.noteList.filter((element) => element.props.id !== id)
			}),
			() => {
				this.updateLSList();
			}
		);
	}

	handleClearNote() {
		this.setState({
			titleValue: '',
			value: ''
		});
	}

	getID() {
		var currID = Number(localStorage.getItem('storeID')) + 1;
		localStorage.setItem('storeID', currID);
		return currID;
	}

	render() {
		return (
			<div>
				<p>Take some notes! Click on the note title to expand a note.</p>
				<form onSubmit={this.handleSubmit}>
					<label>
						<br />
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
				{this.state.noteList.map((listitem) => (
					<li key={listitem.props.id} className="list-group-item list-group-item-primary">
						{listitem}
					</li>
				))}
			</div>
		);
	}
}
