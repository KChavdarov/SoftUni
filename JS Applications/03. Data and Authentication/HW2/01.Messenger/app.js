(function attachEvents() {
    document.getElementById('submit').addEventListener('click', getAuthorAndContent);

    function getAuthorAndContent() {
        let author = document.getElementById('author').value;
        let content = document.getElementById('content').value;
        postMsg({author, content});
        document.getElementById('author').value = '';
        document.getElementById('content').value = '';

    }

    getMessages();
})();
document.getElementById('refresh').addEventListener('click',getMessages);

async function getMessages() {
    let response = await fetch('http://localhost:3030/jsonstore/messenger');
    let data = await response.json();

    let messages = Object.values(data);
    messages = messages.map(value => `${value.author}: ${value.content}`).join('\n');
    document.getElementById('messages').value = messages;
}

async function postMsg(message) {
    await fetch('http://localhost:3030/jsonstore/messenger', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(message)
    });
}