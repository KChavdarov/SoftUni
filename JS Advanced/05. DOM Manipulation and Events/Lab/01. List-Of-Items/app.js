function addItem() {
    let list = document.getElementById('items');
    let text = document.getElementById('newItemText');

    if (text.value) {
        let newLi = document.createElement('li');
        newLi.textContent = text.value;
        list.appendChild(newLi);
        text.value = '';
    }
}