function onlineShop(selector) {
    let form = `<div id="header">Online Shop Inventory</div>
    <div class="block">
        <label class="field">Product details:</label>
        <br>
        <input placeholder="Enter product" class="custom-select">
        <input class="input1" id="price" type="number" min="1" max="999999" value="1"><label class="text">BGN</label>
        <input class="input1" id="quantity" type="number" min="1" value="1"><label class="text">Qty.</label>
        <button id="submit" class="button" disabled>Submit</button>
        <br><br>
        <label class="field">Inventory:</label>
        <br>
        <ul class="display">
        </ul>
        <br>
        <label class="field">Capacity:</label><input id="capacity" readonly>
        <label class="field">(maximum capacity is 150 items.)</label>
        <br>
        <label class="field">Price:</label><input id="sum" readonly>
        <label class="field">BGN</label>
    </div>`;
    $(selector).html(form);

    let inventoryCap = 150;
    const capacity = document.getElementById('capacity');
    const sum = document.getElementById('sum');
    const container = document.querySelector('div.block');
    const inventory = document.querySelector('ul.display');
    const productName = document.querySelector('.custom-select');
    const price = document.getElementById('price');
    const quantity = document.getElementById('quantity');
    const addBtn = document.getElementById('submit');

    container.addEventListener('input', (event) => {
        if (productName.value != '' && price.value && quantity.value) {
            addBtn.removeAttribute('disabled');
        }
        if ((quantity.value) > inventoryCap) {
            addBtn.setAttribute('disabled', true);
        }
    });

    addBtn.addEventListener('click', addItem);

    function addItem(event) {
        const li = document.createElement('li');
        const content = `Product: ${productName.value} Price: ${price.value} Quantity: ${quantity.value}`;
        li.textContent = content;
        inventory.appendChild(li);
        inventoryCap -= Number(quantity.value);
        capacity.value = inventoryCap;
        sum.value = Number(sum.value) + Number(price.value);
        if (inventoryCap == 0) {
            capacity.value = 'full';
            capacity.className = 'fullCapacity';
            productName.disabled = true;
            price.disabled = true;
            quantity.disabled = true;
        }

        productName.value = '';
        price.value = 1;
        quantity.value = 1;
        addBtn.setAttribute('disabled', true);
    }
}
