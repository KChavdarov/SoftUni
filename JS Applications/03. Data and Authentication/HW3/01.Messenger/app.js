function attachEvents() {
    const url = 'http://localhost:3030/jsonstore/messenger';
    const view = document.getElementById('messages');
    const submitBtn = document.getElementById('submit');
    const refreshBtn = document.getElementById('refresh');

    loadMessages();

    submitBtn.addEventListener('click', sendMessage);

    refreshBtn.addEventListener('click', loadMessages);

    async function loadMessages() {
        try {
            const res = await fetch(url);

            errHandling(res);

            const data = await res.json();

            view.textContent = Object.values(data)
                .map(({ author, content }) => `${author}: ${content}`)
                .join('\n');

        } catch (err) {
            console.log(err);
            view.textContent = 'There was a problem loading the messages'
        }
    }

    async function sendMessage() {
        const author = document.getElementById('author')
        const content = document.getElementById('content')

        if ([author.value, content.value].includes('')) {
            alert('Empty fields!')
            return
        }

        try {
            const res = await fetch(url, {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ author: author.value, content: content.value })
            });

            errHandling(res);

            [author, content].forEach(x => x.value = '');

        } catch (err) {
            console.log(err);
            alert('There was a problem sending the message');
        }
    }

    function errHandling(res) {
        if (!res.ok) {
            throw new Error('El problemo.');
        }
    }
}

attachEvents();

