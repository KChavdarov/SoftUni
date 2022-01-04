let dealership = {
    newCarCost: function (oldCarModel, newCarPrice) {

        let discountForOldCar = {
            'Audi A4 B8': 15000,
            'Audi A6 4K': 20000,
            'Audi A8 D5': 25000,
            'Audi TT 8J': 14000,
        };

        if (discountForOldCar.hasOwnProperty(oldCarModel)) {
            let discount = discountForOldCar[oldCarModel];
            let finalPrice = newCarPrice - discount;
            return finalPrice;
        } else {
            return newCarPrice;
        }
    },

    carEquipment: function (extrasArr, indexArr) {
        let selectedExtras = [];
        indexArr.forEach(i => {
            selectedExtras.push(extrasArr[i]);
        });

        return selectedExtras;
    },

    euroCategory: function (category) {
        if (category >= 4) {
            let price = this.newCarCost('Audi A4 B8', 30000);
            let total = price - (price * 0.05);
            return `We have added 5% discount to the final price: ${total}.`;
        } else {
            return 'Your euro category is low, so there is no discount from the final price!';
        }
    }
};

const { expect } = require('chai');

describe('Tests for dealership object', function () {
    describe('newCarCost', function () {
        it('returns price', function () {
            expect(dealership.newCarCost('KIA', 5000)).equal(5000);
            expect(dealership.newCarCost('KIA', 5000.50)).equal(5000.50);
            expect(dealership.newCarCost('Audi A4 B8', 5000)).equal(-10000);
            expect(dealership.newCarCost('Audi A4 B8', 15000)).equal(0);
            expect(dealership.newCarCost('Audi A4 B8', 20000)).equal(5000);
            expect(dealership.newCarCost('Audi A6 4K', 25000)).equal(5000);
            expect(dealership.newCarCost('Audi A6 4K', '25000')).equal(5000);
        });
    });
    describe('carEquipment', () => {
        it('returns selected extras', () => {
            expect(dealership.carEquipment(['extra1', 'extra2', 'extra3', 'extra4'], [0, 2])).deep.equal(['extra1', 'extra3']);
            expect(dealership.carEquipment(['extra1', 'extra2', 'extra3', 'extra4'], [])).deep.equal([]);
            expect(dealership.carEquipment(['extra1', 'extra2', 'extra3', 'extra4'], [5])).deep.equal([undefined]);
        });
    });
    describe('euroCategory', () => {
        it('returns message', () => {
            expect(dealership.euroCategory(6)).equal('We have added 5% discount to the final price: 14250.');
            expect(dealership.euroCategory(5)).equal('We have added 5% discount to the final price: 14250.');
            expect(dealership.euroCategory(4)).equal('We have added 5% discount to the final price: 14250.');
            expect(dealership.euroCategory(3)).equal('Your euro category is low, so there is no discount from the final price!');
            expect(dealership.euroCategory(2)).equal('Your euro category is low, so there is no discount from the final price!');
        });
    });
});