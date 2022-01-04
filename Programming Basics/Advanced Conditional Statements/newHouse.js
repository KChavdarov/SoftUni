function newHouse(plant, quantity, budget) {
    quantity = Number(quantity);
    budget = Number(budget);
    let rosePrice = 5.00;
    let dahliaPrice = 3.80;
    let tulipPrice = 2.80;
    let daffodilPrice = 3.00;
    let gladiolusPrice = 2.50;
    let cost = quantity;

    switch (plant) {
        case "Roses":
            if (quantity > 80) {
                cost *= rosePrice * 0.90;
            } else {
                cost *= rosePrice;
            }
            break;
        case "Dahlias":
            if (quantity > 90) {
                cost *= dahliaPrice * 0.85;
            } else {
                cost *= dahliaPrice;
            }
            break;
        case "Tulips":
            if (quantity > 80) {
                cost *= tulipPrice * 0.85;
            } else {
                cost *= tulipPrice;
            }
            break;
        case "Narcissus":
            if (quantity < 120) {
                cost *= daffodilPrice * 1.15;
            } else {
                cost *= daffodilPrice;
            }
            break;
        case "Gladiolus":
            if (quantity < 80) {
                cost *= gladiolusPrice * 1.20;
            } else {
                cost *= gladiolusPrice;
            }
            break;
    }
    let difference = (Math.abs(budget - cost)).toFixed(2);
    if (cost <= budget) {
        console.log(`Hey, you have a great garden with ${quantity} ${plant} and ${difference} leva left.`);
    } else {
        console.log(`Not enough money, you need ${difference} leva more.`);
    }
}