export async function getID() {
	const options = {
		method: 'GET'
	};

	var res = await fetch('http://localhost:5000/id', options);
	var data = await res.json();
	return data.id.toString();
}
