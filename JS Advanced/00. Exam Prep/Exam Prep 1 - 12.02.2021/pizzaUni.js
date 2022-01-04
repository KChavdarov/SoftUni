let pizzUni = {
    makeAnOrder: function (obj) {

        if (!obj.orderedPizza) {
            throw new Error('You must order at least 1 Pizza to finish the order.');
        } else {
            let result = `You just ordered ${obj.orderedPizza}`;
            if (obj.orderedDrink) {
                result += ` and ${obj.orderedDrink}.`;
            }
            return result;
        }
    },

    getRemainingWork: function (statusArr) {

        const remainingArr = statusArr.filter(s => s.status != 'ready');

        if (remainingArr.length > 0) {

            let pizzaNames = remainingArr.map(p => p.pizzaName).join(', ');
            let pizzasLeft = `The following pizzas are still preparing: ${pizzaNames}.`;

            return pizzasLeft;
        } else {
            return 'All orders are complete!';
        }

    },

    orderType: function (totalSum, typeOfOrder) {
        if (typeOfOrder === 'Carry Out') {
            totalSum -= totalSum * 0.1;

            return totalSum;
        } else if (typeOfOrder === 'Delivery') {

            return totalSum;
        }
    }
};

const { expect } = require('chai');

describe('Tests for pizzaUni object', function () {
    describe('makeAnOrder tests', function () {
        it('complete order', function () {
            const testOrder = {
                orderedPizza: 'testPizza',
            };
            expect(pizzUni.makeAnOrder(testOrder)).equal('You just ordered testPizza');
            testOrder.orderedDrink = 'testDrink';
            expect(pizzUni.makeAnOrder(testOrder)).equal('You just ordered testPizza and testDrink.');
        });
        it('incorrect order', () => {
            const testOrder = {
                // orderedPizza: 'testPizza',
                // orderedDrink: 'testDrink',
            };
            expect(() => { pizzUni.makeAnOrder(testOrder); }).throw('You must order at least 1 Pizza to finish the order.');
            testOrder.orderedDrink = 'testDrink';
            expect(() => { pizzUni.makeAnOrder(testOrder); }).throw('You must order at least 1 Pizza to finish the order.');

        });
    });
    describe('getRemainingWork test', () => {
        it('reports status', () => {
            expect(pizzUni.getRemainingWork([])).equal('All orders are complete!');
            const testOrders = [{ pizzaName: 'testPizza', status: 'ready' }];
            expect(pizzUni.getRemainingWork(testOrders)).equal('All orders are complete!');
            testOrders.push({ pizzaName: 'testPizza', status: 'preparing' });
            expect(pizzUni.getRemainingWork(testOrders)).equal('The following pizzas are still preparing: testPizza.');
            testOrders.push({ pizzaName: 'testPizza2', status: 'preparing' });
            expect(pizzUni.getRemainingWork(testOrders)).equal('The following pizzas are still preparing: testPizza, testPizza2.');
            testOrders.shift();
            expect(pizzUni.getRemainingWork(testOrders)).equal('The following pizzas are still preparing: testPizza, testPizza2.');
        });
    });
    describe('orderType', () => {
        it('calclate total sum', () => {
            expect(pizzUni.orderType(100, 'Carry Out')).equal(90);
            expect(pizzUni.orderType(100, 'Delivery')).equal(100);
            expect(pizzUni.orderType(100.50, 'Delivery')).equal(100.50);
            expect(pizzUni.orderType(100, '')).equal(undefined);
        });
    });
});
