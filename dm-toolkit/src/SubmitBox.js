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
		this.idCounter = 0;
		this.handleTitleChange = this.handleTitleChange.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
		this.handleClearNote = this.handleClearNote.bind(this);
	}

	loadList() {
		this.setState({
			noteList: [
				<Note
					noteTitle={localStorage.getItem('titleStoreList')}
					noteText={localStorage.getItem('noteStoreList')}
					_handleDelete={this.handleDelete}
					id={++this.idCounter}
				/>
			]
		});
	}

	clearNoteLists() {
		localStorage.setItem('noteStoreList', JSON.stringify());
		localStorage.setItem('titleStoreList', JSON.stringify());
	}

	componentDidMount() {
		localStorage.getItem('noteStoreList') ? this.loadList() : this.clearNoteLists();
		var list = [ [ 'num1', 'prr1' ], [ 'num2', 'prr2' ], [ 'num3', 'prr3' ] ];
		console.log(list[2][1]);
		console.log(JSON.stringify(list));
		console.log(JSON.parse(JSON.stringify(list)));
		var jsonParsed = JSON.parse(JSON.stringify(list));
		console.log(jsonParsed);
		jsonParsed.push([ 'num4', 'prr4' ]);
		console.log(jsonParsed[3][0]);
		console.log(jsonParsed);
		console.log(JSON.stringify(jsonParsed));
		//console.log(this.state.noteList);
	}

	handleTitleChange(event) {
		this.setState({ titleValue: event.target.value });
	}

	handleChange(event) {
		this.setState({ value: event.target.value });
	}

	handleSubmit(event) {
		event.preventDefault();
		localStorage.setItem('noteStoreList', this.state.value);
		localStorage.setItem('titleStoreList', this.state.titleValue);
		this.state.noteList.push(
			<Note
				noteTitle={this.state.titleValue === '' ? 'Note ' + this.idCounter : this.state.titleValue}
				noteText={this.state.value}
				_handleDelete={this.handleDelete}
				id={++this.idCounter}
			/>
		);
		this.forceUpdate();
	}

	handleDelete(id) {
		this.setState((prevState) => ({
			noteList: prevState.noteList.filter((element) => element.props.id !== id)
		}));
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
					<li key={listitem.props.id} className="list-group-item list-group-item-primary">
						{listitem}
					</li>
				))}
			</div>
		);
	}
}
