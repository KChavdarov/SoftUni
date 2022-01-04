function solve() {
  let [input, output] = [...document.querySelectorAll('textarea')];
  let table = document.querySelector('table.table tbody');
  let buttons = document.getElementsByTagName('button');

  buttons[0].addEventListener('click', logfurniture);
  buttons[1].addEventListener('click', purchase);

  let furniture = [];

  function logfurniture() {
    let furnitureList = JSON.parse(input.value.trim());
    for (const item of furnitureList) {
      let { name, img, price, decFactor } = item;

      let image = createElement('img');
      image.src = img;

      let checkbox = createElement('input');
      checkbox.type = 'checkbox';

      let newRow = createElement('tr',
        createElement('td', image),
        createElement('td', createElement('p', name)),
        createElement('td', createElement('p', price)),
        createElement('td', createElement('p', decFactor)),
        createElement('td', checkbox));

      table.appendChild(newRow);

      function isChecked() {
        return checkbox.checked;
      }
      
      function itemData() {
        return {
          name,
          img,
          price,
          decFactor
        };
      }

      let element = {
        newRow,
        isChecked,
        itemData,
      };
      furniture.push(element);
    }
    console.log(furniture);
  }

  function createElement(type, ...content) {
    const result = document.createElement(type);
    content.forEach(e => {
      if (typeof e == 'string') {
        let node = document.createTextNode(e);
        result.appendChild(node);
      } else {
        result.appendChild(e);
      }
    });
    return result;
  }

  function purchase() {
    let RowElements = furniture.filter(element => element.isChecked());

    let items = [];
    let total = 0;
    let average = [];

    for (const element of RowElements) {
      items.push(element.itemData().name);
      total += Number(element.itemData().price);
      average.push(Number(element.itemData().decFactor));
    }

    let order = [];
    order.push(`Bought furniture: ${items.join(', ')}`);
    order.push(`Total price: ${total.toFixed(2)}`);
    order.push(`Average decoration factor: ${average.reduce((acc, c, i, arr) => acc += c / arr.length, 0)}`);

    output.value = order.join('\n');
  }
}