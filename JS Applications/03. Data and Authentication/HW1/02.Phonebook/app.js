function attachEvents() {
    let buttonLoad = document.getElementById('btnLoad');
    let ul = document.getElementById('phonebook');
    
    buttonLoad.addEventListener('click', onLoad);
    let buttonCreate = document.getElementById('btnCreate');
    let inputPerson = document.getElementById('person');
    let inputPhone = document.getElementById('phone');

    async function onLoad(ev) {
        ul.innerHTML = '';
        let url = 'http://localhost:3030/jsonstore/phonebook';
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        for (const key in data) {
            let li = document.createElement('li');
            li.textContent = `${data[key].person}: ${data[key].phone}`
            let buttonDelete = document.createElement('button');
            buttonDelete.textContent = 'Delete';
            li.appendChild(buttonDelete);
            ul.appendChild(li);

            buttonDelete.addEventListener('click', onDelete);
            async function onDelete(ev) {
                let url = `http://localhost:3030/jsonstore/phonebook/${key}`;
                let response2 = await fetch(url, {
                    method: 'delete'
                });

                let result = await response2.json();
                console.log(result);
                ul.removeChild(li);

            }
        }

    }
    buttonCreate.addEventListener('click', onCreate);
    async function onCreate(ev) {
        let url = 'http://localhost:3030/jsonstore/phonebook';
        let response3 = await fetch(url, {
            method: 'post',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ person: inputPerson.value, phone: inputPhone.value })
        });
        let newResult = await response3.json();
        console.log(newResult);
        let newLi = document.createElement('li');
        newLi.textContent = `${inputPerson.value}: ${inputPhone.value}`;
        let newButtonDel = document.createElement('button');
        newButtonDel.textContent = 'Delete';
        newLi.appendChild(newButtonDel);
        ul.innerHTML = '';
        inputPerson.value = '';
        inputPhone.value = '';
        let response4 = await fetch(url);
        let newData = await response4.json();
        for (const key in newData) {
            let li = document.createElement('li');
            li.textContent = `${newData[key].person}: ${newData[key].phone}`
            let buttonDelete = document.createElement('button');
            buttonDelete.textContent = 'Delete';
            li.appendChild(buttonDelete);
            ul.appendChild(li);

            buttonDelete.addEventListener('click', onDelete);
            async function onDelete(ev) {
                let url = `http://localhost:3030/jsonstore/phonebook/${key}`;
                let response2 = await fetch(url, {
                    method: 'delete'
                });

                let result = await response2.json();
                console.log(result);
                ul.removeChild(li);

            }

        }
    }
}

attachEvents();