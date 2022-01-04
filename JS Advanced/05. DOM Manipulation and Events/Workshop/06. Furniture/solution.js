function solve() {
  let input = document.querySelectorAll('textarea')[0];
  let output = document.querySelectorAll('textarea')[1];
  let table = document.querySelector('table tbody');

  document.getElementsByTagName('button')[0].addEventListener('click', logfurniture);
  document.getElementsByTagName('button')[1].addEventListener('click', purchase);

  function logfurniture() {
    let furnitureList = JSON.parse(input.value);

    for (const item of furnitureList) {
      let { name, img, price, decFactor } = item;
      price = Number(price);
      decFactor = Number(decFactor);

      let newRow = document.createElement('tr');

      let itemImg = document.createElement('td');
      let image = document.createElement('img');
      image.src = img;
      itemImg.appendChild(image);
      newRow.appendChild(itemImg);

      let nameP = document.createElement('p');
      let itemName = document.createElement('td');
      nameP.textContent = name;
      itemName.appendChild(nameP);
      newRow.appendChild(itemName);

      let priceP = document.createElement('p');
      let itemPrice = document.createElement('td');
      priceP.textContent = price;
      itemPrice.appendChild(priceP);
      newRow.appendChild(itemPrice);

      let decFactorP = document.createElement('p');
      let itemDecFactor = document.createElement('td');
      decFactorP.textContent = decFactor;
      itemDecFactor.appendChild(decFactorP);
      newRow.appendChild(itemDecFactor);

      let itemCheckBox = document.createElement('td');
      let checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      itemCheckBox.appendChild(checkbox);
      newRow.appendChild(itemCheckBox);

      table.appendChild(newRow);
    }
  }

  function purchase() {
    let checked = Array.from(document.querySelectorAll('input[type="checkbox"]')).filter(c => c.checked);
    let itemRows = checked.map(c => c.parentElement.parentElement);
    let items = [];
    let total = 0;
    let average = [];

    for (const row of itemRows) {
      let [name, price, decFactor] = row.querySelectorAll('p');
      items.push(name.textContent);
      total += Number(price.textContent);
      average.push(Number(decFactor.textContent));
    }

    let order = [];
    order.push(`Bought furniture: ${items.join(', ')}`);
    order.push(`Total price: ${total.toFixed(2)}`);
    order.push(`Average decoration factor: ${average.reduce((acc, c, i, arr) => acc += c / arr.length, 0)}`);

    output.value = order.join('\n');
  }
}