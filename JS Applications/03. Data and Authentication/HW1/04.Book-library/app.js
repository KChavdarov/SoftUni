function attachEvents() {
    let buttonLoad = document.getElementById('loadBooks');
    let tableBody = document.querySelector('tbody');
    
    let form = document.querySelector('form');
    let a = form;
    console.log(a);
    let body = document.querySelector('body');
    buttonLoad.addEventListener('click', onLoad);
    let url = 'http://localhost:3030/jsonstore/collections/books';
    console.log(form.lastChild)
    async function onLoad(event) {
        tableBody.textContent = '';
        let response = await fetch(url);
        let data = await response.json();
        for (const key in data) {

            let row = document.createElement('tr');
            let firstTd = document.createElement('td');
            firstTd.textContent = data[key].title;
            row.appendChild(firstTd);
            let secondTd = document.createElement('td');
            secondTd.textContent = data[key].author;
            row.appendChild(secondTd);
            let thirdTd = document.createElement('td');
            let buttonEdit = document.createElement('button');
            buttonEdit.textContent = 'Edit';
            thirdTd.appendChild(buttonEdit);
            let buttonDelete = document.createElement('button');
            buttonDelete.textContent = 'Delete';
            thirdTd.appendChild(buttonDelete);
            row.appendChild(thirdTd);
            tableBody.appendChild(row);
            buttonDelete.addEventListener('click', onDelete);

            async function onDelete(ev) {
                let responseDelete = await fetch(`http://localhost:3030/jsonstore/collections/books/${key}`, {
                    method: 'delete'
                });
                let dataDelete = await responseDelete.json();
                console.log(dataDelete);
                tableBody.removeChild(row);
            }

            buttonEdit.addEventListener('click', onEdit);
            function onEdit(event) {
                let newForm = document.createElement('form');
                form.remove();
                let h = document.createElement('h3');
                h.textContent = 'Edit FORM'
                newForm.appendChild(h);
                let labelTitle = document.createElement('label');
                labelTitle.textContent = 'TITLE';
                newForm.appendChild(labelTitle);
                let inputFirst = document.createElement('input');
                inputFirst.setAttribute('type', 'text');
                inputFirst.setAttribute('name', 'title');
                inputFirst.setAttribute('placeholder', 'Title...');
                inputFirst.setAttribute('value', `${firstTd.textContent}`)
                newForm.appendChild(inputFirst);
                let labelAuthor = document.createElement('label');
                labelAuthor.textContent = 'AUTHOR';
                newForm.appendChild(labelAuthor);
                let inputSecond = document.createElement('input');
                inputSecond.setAttribute('type', 'text');
                inputSecond.setAttribute('name', 'author');
                inputSecond.setAttribute('placeholder', 'Author...');
                inputSecond.setAttribute('value', `${secondTd.textContent}`)
                newForm.appendChild(inputSecond);
                let buttonSave = document.createElement('button');
                buttonSave.textContent = 'Save';
                newForm.appendChild(buttonSave);
                buttonSave.addEventListener('click', onSave);
                body.appendChild(newForm);

                async function onSave(event) {
                    if (event.target.tagName === 'BUTTON' && event.target.textContent === 'Save') {
                        event.stopImmediatePropagation();
                        event.preventDefault();

                        let responsePut = await fetch(`http://localhost:3030/jsonstore/collections/books/${key}`, {
                            method: 'put',
                            headers: { 'Content-type': 'application/json' },
                            body: JSON.stringify({ author: inputSecond.value, title: inputFirst.value })
                        });
                        let dataPut = await responsePut.json();
                        console.log(dataPut);
                        firstTd.textContent = inputFirst.value;
                        secondTd.textContent = inputSecond.value;
                    }






                    document.getElementsByTagName('input')[0].value = ''
                    document.getElementsByTagName('input')[1].value = ''
                    newForm.remove();
                    body.appendChild(a);


                }






            }
        }
        console.log(data)
    }

    form.addEventListener('submit', onCreate);


    async function onCreate(event) {

        if (event.target.tagName === 'FORM') {
            event.stopImmediatePropagation();

            event.preventDefault();
            let formData = new FormData(form);
            console.log(formData.entries())
            let inputTitle = formData.get('title');
            let inputAuthor = formData.get('author');
            console.log(inputAuthor);
            if (inputTitle === '' || inputAuthor === '') {
                return alert('The fields must be completed!')
            }
            let response2 = await fetch(url, {
                method: 'post',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({ author: inputAuthor, title: inputTitle })
            });
            let data2 = await response2.json();
            console.log(data2);
            let row = document.createElement('tr');
            let firstTd = document.createElement('td');
            firstTd.textContent = inputTitle;
            row.appendChild(firstTd);
            let secondTd = document.createElement('td');
            secondTd.textContent = inputAuthor;
            row.appendChild(secondTd);
            let thirdTd = document.createElement('td');
            let buttonEdit = document.createElement('button');
            buttonEdit.textContent = 'Edit';
            thirdTd.appendChild(buttonEdit);
            let buttonDelete = document.createElement('button');
            buttonDelete.textContent = 'Delete';
            thirdTd.appendChild(buttonDelete);
            row.appendChild(thirdTd);
            tableBody.appendChild(row);

            document.getElementsByTagName('input')[0].value = ''
            document.getElementsByTagName('input')[1].value = ''



            buttonDelete.addEventListener('click', onDelete);

            async function onDelete(ev) {
                let responseDelete = await fetch(`http://localhost:3030/jsonstore/collections/books/${data2._id}`, {
                    method: 'delete'
                });
                let dataDelete = await responseDelete.json();
                console.log(dataDelete);
                tableBody.removeChild(row);
            }

            buttonEdit.addEventListener('click', onEdit);

            function onEdit(event) {
                form.remove();
                let newForm = document.createElement('form');
                newForm.innerHTML = `<h3>Edit FORM</h3>
                <label>TITLE</label>
                <input type="text" name="title" value="${firstTd.textContent}" placeholder="Title...">
                <label>AUTHOR</label>
                <input type="text" name="author" value="${secondTd.textContent}" placeholder="Author...">
                <button>Save</button>`;

                body.appendChild(newForm);

                newForm.addEventListener('submit', onSave);

                async function onSave(event) {


                    event.stopImmediatePropagation();
                    event.preventDefault();

                    let formData = new FormData(newForm);
                    let inputTitle1 = formData.get('title');
                    let inputAuthor1 = formData.get('author');


                    let responsePut = await fetch(`http://localhost:3030/jsonstore/collections/books/${data2._id}`, {
                        method: 'put',
                        headers: { 'Content-type': 'application/json' },
                        body: JSON.stringify({ author: inputAuthor1, title: inputTitle1 })
                    });
                    let dataPut = await responsePut.json();
                    console.log(dataPut);
                    firstTd.textContent = inputTitle1;
                    secondTd.textContent = inputAuthor1;

                    newForm.remove();
                    body.appendChild(a);

                }

            }
        }

    }


}
attachEvents();