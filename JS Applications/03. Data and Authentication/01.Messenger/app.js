const url = 'http://localhost:3030/jsonstore/messenger';
const messagesField = document.getElementById('messages');
const author = document.getElementById('author');
const content = document.getElementById('content');
const submitBtn = document.getElementById('submit');
const refreshBtn = document.getElementById('refresh');

attachEvents()

function attachEvents(){
    renderMessages();
    submitBtn.addEventListener('click', onSubmit);
    refreshBtn.addEventListener('click', renderMessages);
}

async function onSubmit() {
    await sendMessage(
        {
            author: author.value,
            content: content.value,
        }
    )

    content.value = '';
    await renderMessages();
}

async function renderMessages() {
    const messages = await getMessages();
    messagesField.value = messages.map(({ author, content }) => `${author}: ${content}`).join('\n');
}


async function getMessages() {
    const response = await fetch(url);
    if (!response.ok) {
        const err = response.json();
        return console.error(err.message);
    }
    const messages = await response.json();
    return Object.values(messages);
}


async function sendMessage(message) {
    const options = {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(message),
    }

    const response = await fetch(url, options);
    if (!response.ok) {
        const err = response.json();
        return console.error(err.message);
    }
    return await response.json();
}


// function attachEvents() {
//     document.getElementById('submit').addEventListener('click', async () => {
//         const author = document.getElementById('author');
//         const content = document.getElementById('content');

//         if (author.value === '' || content.value === '') {
//             return alert('All fields are mandatory!');
//         }
//         await postMessage(author.value, content.value);

//         [author, content].forEach(a => a.value = '');

//         getMessages();

//     });

//     document.getElementById('refresh').addEventListener('click', getMessages);

//     getMessages();
// }

// async function postMessage(author, content) {

//     const message = { author, content };

//     await fetch('http://localhost:3030/jsonstore/messenger', {
//         method: 'post',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(message),
//     });
// }

// async function getMessages() {
//     const messages = document.getElementById('messages');

//     const response = await fetch('http://localhost:3030/jsonstore/messenger');
//     const data = await response.json();

//     const text = Object.values(data).map(({ author, content }) => `${author}: ${content}`);
//     messages.value = text.join('\n');
// }

// attachEvents();