class Parking {
    constructor(capacity) {
        this.capacity = capacity;
        this.vehicles = [];
    }
    addCar(carModel, carNumber) {
        if (this.vehicles.length == this.capacity) {
            throw new Error('Not enough parking space.');
        }
        this.vehicles.push(
            {
                carModel,
                carNumber,
                payed: false,
            }
        );
        return `The ${carModel}, with a registration number ${carNumber}, parked.`;
    }
    removeCar(carNumber) {
        let index = this.vehicles.map(a => a.carNumber).indexOf(carNumber);
        if (index == -1) {
            throw new Error('The car, you\'re looking for, is not found.');
        }
        let car = this.vehicles[index];
        if (car.payed == false) {
            throw new Error(`${carNumber} needs to pay before leaving the parking lot.`);
        }
        this.vehicles.splice(index, 1);
        return `${carNumber} left the parking lot.`;
    }

    pay(carNumber) {
        let index = this.vehicles.map(a => a.carNumber).indexOf(carNumber);
        if (index == -1) {
            throw new Error(`${carNumber} is not in the parking lot.`);
        }
        let car = this.vehicles[index];
        if (car.payed == true) {
            throw new Error(`${carNumber}'s driver has already payed his ticket.`);
        }
        car.payed = true;
        return `${carNumber}'s driver successfully payed for his stay.`;
    }

    getStatistics(carNumber) {
        if (carNumber == undefined) {
            const output = [];
            output.push(`The Parking Lot has ${this.capacity - this.vehicles.length} empty spots left.`);
            let sorted = this.vehicles.sort((a, b) => a.carModel.localeCompare(b.carModel));
            sorted = sorted.map(a => `${a.carModel} == ${a.carNumber} - ${a.payed ? 'Has payed' : 'Not payed'}`);
            return [...output, ...sorted].join('\n');
        } else {
            let index = this.vehicles.map(a => a.carNumber).indexOf(carNumber);
            if (index !== -1) {
                let car = this.vehicles[index];
                return `${car.carModel} == ${car.carNumber} - ${car.payed ? 'Has payed' : 'Not payed'}`;
            }
        }
    }
}
const parking = new Parking(12);

console.log(parking.addCar('Volvo t600', 'TX3691CA'));
console.log(parking.addCar('KIA Ceed', 'BP4266BT'));
console.log(parking.addCar('VW Golf', 'BP3618BH'));
console.log(parking.getStatistics());

console.log(parking.pay('TX3691CA'));
console.log(parking.removeCar('TX3691CA'));
