function addItem() {
    let list = document.getElementById('items');
    let text = document.getElementById('newText');

    if (text.value) {
        let newLi = document.createElement('li');
        newLi.textContent = text.value;
        list.appendChild(newLi);
        let deleteButton = document.createElement('a');
        deleteButton.href = ('#');
        deleteButton.textContent = '[Delete]';
        deleteButton.style.textDecoration = 'none';
        deleteButton.style.color = 'red';
        deleteButton.style.fontWeight = 'bold';
        newLi.appendChild(deleteButton);
        deleteButton.addEventListener('click', remove, false);
        text.value = '';
    }

    function remove(event) {
        event.preventDefault();
        event.currentTarget.parentElement.remove();
    }
}