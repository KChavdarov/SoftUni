function addProduct() {
    const [product, price] = document.querySelectorAll('#add-product input');
    const tbody = document.getElementById('product-list');
    const total = document.querySelector('tfoot td:last-child');
    let sum = Number(total.textContent);

    if ([product, price].every(a => a.value !== '')) {
        let newRow = document.createElement('tr');
        let item = document.createElement('td');
        item.textContent = product.value;
        let value = document.createElement('td');
        value.textContent = price.value;
        newRow.appendChild(item);
        newRow.appendChild(value);
        tbody.appendChild(newRow);

        sum += Number(price.value);

        total.textContent = sum;

        [product, price].forEach(a => a.value = '');
    }
}
