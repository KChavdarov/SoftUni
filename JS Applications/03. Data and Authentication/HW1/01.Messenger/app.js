function attachEvents() {
    let inputName = document.getElementById('author');
    let inputMessage = document.getElementById('content');
    let textArea = document.getElementById('messages');
    let buttonSend = document.getElementById('submit');
    let buttonRefresh = document.getElementById('refresh');
    

    buttonSend.addEventListener('click', onSend);

    async function onSend(ev) {
        console.log(inputName.value);
        
        let url = 'http://localhost:3030/jsonstore/messenger';
        let response = await fetch(url, {
            method: 'post',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({author: inputName.value, content: inputMessage.value})
        });
        let result = await response.json();
        console.log(result);
        inputName.value = '';
        inputMessage.value = '';
    }
    buttonRefresh.addEventListener('click', onRefresh);
    async function onRefresh(ev) {
        let url = 'http://localhost:3030/jsonstore/messenger';
        let response = await fetch(url);
        let result = await response.json();
        let str = '';
        for (const key in result) {
            str = str + `${result[key].author}: ${result[key].content}\n`
        }
        textArea.value = str.trim();
    }
}

attachEvents();