function fruits(fruit, weight, price) {
    weight /= 1000;
    let money = weight * price;
    console.log(`I need $${money.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`);
}
fruits('orange', 2500, 1.80);