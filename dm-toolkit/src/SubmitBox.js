import React, { Component } from 'react';
import Note from './Note';

export default class SubmitBox extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 'Type here',
			noteList: [],
			idCounter: 0
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleFocus = this.handleFocus.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
	}

	handleChange(event) {
		this.setState({ value: event.target.value });
	}

	handleSubmit(event) {
		event.preventDefault();
		this.state.noteList.push(
			<Note noteText={this.state.value} _handleDelete={this.handleDelete} id={this.state.idCounter++} />
		);
		this.forceUpdate();
	}

	handleFocus() {
		if (this.state.value === 'Type here') {
			this.setState({ value: '' });
		}
	}

	handleDelete(id) {
		alert(id);
		console.log(this.state.noteList);
		this.setState((prevState) => ({
			noteList: prevState.noteList.filter((element) => element.id != id)
		}));
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit} onFocus={this.handleFocus}>
					<label>
						<p>Take some notes!</p>
						<br />
						<textarea
							type="text"
							value={this.state.value}
							onChange={this.handleChange}
							rows="6"
							cols="60"
						/>
						<br />
					</label>
					<input type="submit" value="Save" />
				</form>

				{this.state.noteList.map((listitem) => (
					<li key={listitem.id} className="list-group-item list-group-item-primary">
						{listitem}
					</li>
				))}
			</div>
		);
	}
}
