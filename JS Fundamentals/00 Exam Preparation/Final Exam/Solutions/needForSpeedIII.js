function needForSpeedIII(input) {
    let carCount = Number(input.shift());
    let cars = {};

    for (let i = 0; i < carCount; i++) {
        let command = input.shift();
        let [car, mileage, fuel] = command.split("|");
        if (!cars.hasOwnProperty(car)) {
            cars[car] = {mileage: Number(mileage), fuel: Number(fuel)};
        }
    }
    let command = input.shift();
    while (command != "Stop") {
        let tokens = command.split(" : ");
        let action = tokens.shift();
        let name = tokens.shift();
        if (cars.hasOwnProperty(name)) {
            let car = cars[name];
            if (action == "Drive") {
                let [distance, fuel] = tokens;
                distance = Number(distance);
                fuel = Number(fuel);
                if (car.fuel < fuel) {
                    console.log("Not enough fuel to make that ride");
                } else {
                    car.fuel -= fuel;
                    car.mileage += distance;
                    console.log(`${name} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
                    if (car.mileage >= 100000) {
                        console.log(`Time to sell the ${name}!`);
                        delete cars[name];
                    }
                }
            } else if (action == "Refuel") {
                let [maxRefuel] = tokens;
                maxRefuel = Number(maxRefuel);
                let refuel = Math.min(75 - car.fuel, maxRefuel);
                car.fuel += refuel;
                console.log(`${name} refueled with ${refuel} liters`);
            } else if (action == "Revert") {
                let [kilometers] = tokens;
                kilometers = Number(kilometers);
                let revert = Math.min(kilometers, car.mileage - 10000);
                car.mileage -= revert;
                if (car.mileage > 10000) {
                    console.log(`${name} mileage decreased by ${revert} kilometers`);
                }
            }
        }
        command = input.shift();
    }
    let sorted = Object.entries(cars).sort((carA, carB) => carSort(carA, carB));

    for (const [car, data] of sorted) {
        console.log(`${car} -> Mileage: ${data.mileage} kms, Fuel in the tank: ${data.fuel} lt.`);
    }

    function carSort([carA, dataA], [carB, dataB]) {
        return dataB.mileage - dataA.mileage || carA.localeCompare(carB);
    }
}
// needForSpeedIII([
//     '3',
//     'Audi A6|38000|62',
//     'Mercedes CLS|11000|35',
//     'Volkswagen Passat CC|45678|5',
//     'Drive : Audi A6 : 543 : 47',
//     'Drive : Mercedes CLS : 94 : 11',
//     'Drive : Volkswagen Passat CC : 69 : 8',
//     'Refuel : Audi A6 : 50',
//     'Revert : Mercedes CLS : 500',
//     'Revert : Audi A6 : 30000',
//     'Stop'
// ]);

needForSpeedIII([0,"Stop"]);

// needForSpeedIII([
//     '4',
//     'Lamborghini Veneno|11111|74',
//     'Bugatti Veyron|12345|67',
//     'Koenigsegg CCXR|67890|12',
//     'Aston Martin Valkryie|99900|50',
//     'Drive : Koenigsegg CCXR : 382 : 82',
//     'Drive : Aston Martin Valkryie : 99 : 23',
//     'Drive : Aston Martin Valkryie : 2 : 1',
//     'Refuel : Lamborghini Veneno : 40',
//     'Revert : Bugatti Veyron : 2000',
//     'Stop'
// ]);