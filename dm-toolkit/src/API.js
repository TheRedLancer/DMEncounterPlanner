export async function getID() {
	const options = {
		method: 'GET'
	};

	var res = await fetch('http://localhost:5000/id', options);
	var data = await res.json();
	return data.id.toString();
}

export async function getNoteList() {
	const options = {
		method: 'GET'
	};

	var res = await fetch('http://localhost:5000/notelist', options);
	var data = await res.json();
	return data.noteList.toString();
}

export async function setNoteList(input) {
	const options = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ noteList: input })
	};

	var res = await fetch('http://localhost:5000/noteList', options);
	var data = await res.json();
	return data.success.toString();
}
