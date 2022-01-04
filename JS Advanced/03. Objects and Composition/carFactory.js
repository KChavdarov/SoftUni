function carFactory(order) {
    let {
        model,
        power,
        color,
        carriage,
        wheelsize,
    } = order;
    return {
        model,
        engine: getEngine(power),
        carriage: getCarriage(carriage, color),
        wheels: getWheels(wheelsize),
    };

    function getEngine(power) {
        let engines = [
            { power: 90, volume: 1800 },
            { power: 120, volume: 2400 },
            { power: 200, volume: 3500 }
        ];

        for (const engine of engines) {
            if (engine.power >= power) {
                return engine;
            }
        }
    }
    function getCarriage(carriage, color) {
        return {
            type: carriage,
            color
        };
    }
    function getWheels(wheelsize) {
        return Array(4).fill(
            Math.floor(wheelsize) % 2 == 0 ? Math.floor(wheelsize - 1) : Math.floor(wheelsize)
        );
    }
}
// function carFactory(order) {
//     let outputCar = {};
//     outputCar.model = order.model;
//     installEngine(outputCar);
//     prepareCarriage(outputCar);
//     isntallWheels(outputCar);

//     function installEngine(car) {
//         let engines = {
//             'Small engine': { power: 90, volume: 1800 },
//             'Normal engine': { power: 120, volume: 2400 },
//             'Monster engine': { power: 200, volume: 3500 },
//         };
//         let engine = {};
//         if (order.power > 120) {
//             engine = 'Monster engine';
//         } else if (order.power > 90) {
//             engine = 'Normal engine';
//         } else {
//             engine = 'Small engine';
//         }
//         car.engine = engines[engine];
//     }

//     function prepareCarriage(car) {
//         let carriages = {
//             hatchback: { type: 'hatchback', color: '' },
//             coupe: { type: 'coupe', color: '' },
//         };
//         car.carriage = {};
//         car.carriage.type = carriages[order.carriage].type;
//         car.carriage.color = order.color;
//     }

//     function isntallWheels(car) {
//         let wheels = [];
//         wheels.length = 4;
//         let size = Math.floor(order.wheelsize) % 2 == 0 ? Math.floor(order.wheelsize - 1) : Math.floor(order.wheelsize);
//         car.wheels = wheels.fill(size);
//     }

//     return outputCar;
// }
console.log(carFactory({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }
));