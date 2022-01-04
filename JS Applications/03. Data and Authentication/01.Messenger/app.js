function attachEvents() {
    document.getElementById('submit').addEventListener('click', async () => {
        const author = document.getElementById('author');
        const content = document.getElementById('content');

        if (author.value === '' || content.value === '') {
            return alert('All fields are mandatory!');
        }
        await postMessage(author.value, content.value);

        [author, content].forEach(a => a.value = '');

        getMessages();

    });

    document.getElementById('refresh').addEventListener('click', getMessages);

    getMessages();
}

async function postMessage(author, content) {

    const message = { author, content };

    await fetch('http://localhost:3030/jsonstore/messenger', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(message),
    });
}

async function getMessages() {
    const messages = document.getElementById('messages');

    const response = await fetch('http://localhost:3030/jsonstore/messenger');
    const data = await response.json();

    const text = Object.values(data).map(({ author, content }) => `${author}: ${content}`);
    messages.value = text.join('\n');
}

attachEvents();