function carwash(array) {
    let car = 0;

    for (const action of array) {
        switch (action) {
            case 'soap':
                car += 10;
                break;
            case 'water':
                car *= 1.2;
                break;
            case 'vacuum cleaner':
                car *= 1.25;
                break;
            case 'mud':
                car *= 0.9;
                break;
        }
    }
    console.log(`The car is ${car.toFixed(2)}% clean.`);
}

carwash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);