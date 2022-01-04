function loadRepos() {
	const username = document.getElementById('username');
	const repos = document.getElementById('repos');
	let url = `https://api.github.com/users/${username.value}/repos`;

	// let requestPromise = fetch(url);
	// let dataPromise = requestPromise.then((response) => response.json());
	// dataPromise.then((data) => {
	// 	repos.textContent = '';




	fetch(url)
		.then((response) => response.json())
		.then(handleData);

	function handleData(data) {
		data.forEach(repo => {
			const newLi = document.createElement('li');
			const newA = document.createElement('a');
			newA.textContent = repo.full_name;
			newA.setAttribute('href', repo.html_url);
			newLi.appendChild(newA);
			repos.appendChild(newLi);
		});
	}
}