function addItem() {
    let textField = document.getElementById('newItemText');
    let valueField = document.getElementById('newItemValue');
    let options = document.getElementById('menu');
    let newOption = document.createElement('option');
    newOption.textContent = textField.value;
    newOption.value = valueField.value;
    options.appendChild(newOption);
    textField.value = '';
    valueField.value = '';
}