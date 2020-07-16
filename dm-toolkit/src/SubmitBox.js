import React, { Component } from 'react';
import Note from './Note';
import * as API from './API.js';

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
		this.editNote = this.editNote.bind(this);
		this.clearNoteLists = this.clearNoteLists.bind(this);
		this.loadList = this.loadList.bind(this);
		this.updateServerList = this.updateServerList.bind(this);
	}

	loadList() {
		API.getNoteList().then((resNoteList) => {
			console.log(resNoteList);
			this.setState({
				noteList: resNoteList
			});
		});
	}

	clearNoteLists() {
		this.setState({ noteList: [] });
		API.setNoteList(this.state.noteList).then((res) => {
			console.log(res);
		});
	}

	componentDidMount() {
		API.getNoteList().then((res) => {
			res.length ? this.loadList() : this.clearNoteLists();
			console.log(this.state.noteList);
		});
	}

	componentWillUnmount() {
		this.updateServerList();
	}

	handleTitleChange(event) {
		this.setState({ titleValue: event.target.value });
	}

	handleChange(event) {
		this.setState({ value: event.target.value });
	}

	handleSubmit(event) {
		event.preventDefault();
		API.getID().then((resid) => {
			console.log(resid);
			this.state.noteList.push({
				title: this.state.titleValue === '' ? 'Note ' + resid : this.state.titleValue,
				noteText: this.state.value,
				id: resid
			});
			this.updateServerList();
			this.forceUpdate();
		});
	}

	editNote(id, newTitle, newText) {
		this.setState(
			(prevState) => ({
				noteList: prevState.noteList.map((note) => ({
					title: note.id === id ? newTitle : note.title,
					noteText: note.id === id ? newText : note.noteText,
					id: note.id
				}))
			}),
			() => {
				this.updateServerList();
			}
		);
	}

	updateServerList() {
		var list = this.state.noteList.map((note) => ({
			title: note.title,
			noteText: note.noteText,
			id: note.id
		}));
		console.log('Hello from UpdateServerList()');
		API.setNoteList(JSON.stringify(list)).then((res) => {
			console.log('Hello' + res);
		});
	}

	handleDelete(id) {
		this.setState(
			(prevState) => ({
				noteList: prevState.noteList.filter((element) => element.id !== id)
			}),
			() => {
				this.updateServerList();
			}
		);
	}

	handleClearNote() {
		this.setState({
			titleValue: '',
			value: ''
		});
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
					<li key={listitem.id} className="list-group-item list-group-item-primary">
						<Note
							id={listitem.id}
							noteTitle={listitem.title}
							noteText={listitem.noteText}
							_handleDelete={this.handleDelete}
							_editNote={this.editNote}
						/>
					</li>
				))}
			</div>
		);
	}
}
