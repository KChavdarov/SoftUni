async function loadCommits() {
    const username = document.getElementById('username');
    const repository = document.getElementById('repo');
    const commits = document.getElementById('commits');

    let url = `https://api.github.com/repos/${username.value}/${repository.value}/commits`;

    try {
        let response = await fetch(url);
        if (response.status != 200) {
            throw new Error(`Error: ${response.status} (${response.statusText})`);
        }
        console.log(response);
        let data = await response.json();
        console.log(data);
        data.forEach(entry => {
            const newLi = document.createElement('li');
            let content = `${entry.commit.author.name}: ${entry.commit.message}`;
            newLi.textContent = content;
            commits.appendChild(newLi);
        });
    } catch (error) {
        const newLi = document.createElement('li');
        newLi.textContent = error.message;
        commits.appendChild(newLi);
    }
}