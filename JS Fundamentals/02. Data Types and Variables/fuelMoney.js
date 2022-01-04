function fuelMoney(distace, passengers, price) {
    let fuel = distace / 100 * 7 + passengers * 0.1;
    let cost = fuel * price;
    console.log(`Needed money for that trip is ${cost}lv.`);
}

fuelMoney(260, 9, 2.49);