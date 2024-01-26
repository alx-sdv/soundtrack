document.body.onload = async function() {
	const resp = await fetch("data.json");
	const data = await resp.json();
	let table = document.getElementById("view");
	let typeColors = new Map();
	typeColors.set("artist", "is-primary is-light")
	typeColors.set("playlist", "is-light")
	typeColors.set("radio", "is-info is-light")
	typeColors.set("noise", "is-dark")
	for (const i in data.reverse()) {
		let row = table.insertRow();
		let cAdded = row.insertCell();
		let cType = row.insertCell();
		let cName = row.insertCell();
		let cSource = row.insertCell();
		cAdded.innerHTML = data[i].added;
		cType.innerHTML = `<span class="tag ${typeColors.get(data[i].type)}">${data[i].type}</span>`;
		cName.innerHTML = `<a href="${data[i].link}" target="_blank">${data[i].name}</a>`;
		cSource.innerHTML = `<span class="tag is-white">${new URL(data[i].link).hostname}</span>`;
	}
}
