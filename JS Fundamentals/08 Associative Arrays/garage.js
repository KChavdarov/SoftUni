function garage(input) {
    let garages = new Map();
    for (const element of input) {
        let [garageNumber, carinfo] = element.split(' - ');
        if (!garages.has(garageNumber)) {
            garages.set(garageNumber, []);
        }
        let content = garages.get(garageNumber);
        content.push(carinfo);
    }
    for (const [garageNumber, cars] of garages) {
        console.log(`Garage № ${garageNumber}`);
        cars.forEach(car => {
            carAsArr = car.split(', ');
            let updatedCar = [];
            carAsArr.forEach(infoItem => {
                updatedCar.push(infoItem.replace(':', ' -'));
            });
            console.log(`--- ${updatedCar.join(', ')}`);
        });
    }
}
garage(['1 - color: blue, fuel type: diesel', '1 - color: red, manufacture: Audi', '2 - fuel type: petrol', '4 - color: dark blue, fuel type: diesel, manufacture: Fiat']);

// function garage(input) {
//     let garages = {};
//     for (const element of input) {
//         let [garageNumber, carinfo] = element.split(' - ');
//         if (garages[garageNumber] == undefined) {
//             garages[garageNumber] = [];
//         }
//         let car = {};
//         carinfo.split(', ').forEach(element => {
//             let [infoElement, value] = element.split(': ');
//             car[infoElement] = value;
//         });
//         garages[garageNumber].push(car);
//     }
//     let sortedGarages = Object.entries(garages).sort((a, b) => Number(a[0]) - Number(b[0]));
//     for (const [garage, cars] of sortedGarages) {
//         console.log(`Garage № ${garage}`);
//         for (const car of cars) {
//             let carLine = [];
//             for (const info of Object.entries(car)) {
//                 let carInfo = info.join(' - ');
//                 carLine.push(carInfo);
//             }
//             console.log(`--- ${carLine.join(', ')}`);
//         }
//     }
// }
// garage(['1 - color: blue, fuel type: diesel', '1 - color: red, manufacture: Audi', '2 - fuel type: petrol', '4 - color: dark blue, fuel type: diesel, manufacture: Fiat']);