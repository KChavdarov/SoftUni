class Calculator {
    constructor() {
        this.expenses = [];
    }

    add(data) {
        this.expenses.push(data);
    }

    divideNums() {
        let divide;
        for (let i = 0; i < this.expenses.length; i++) {
            if (typeof (this.expenses[i]) === 'number') {
                if (i === 0 || divide === undefined) {
                    divide = this.expenses[i];
                } else {
                    if (this.expenses[i] === 0) {
                        return 'Cannot divide by zero';
                    }
                    divide /= this.expenses[i];
                }
            }
        }
        if (divide !== undefined) {
            this.expenses = [divide];
            return divide;
        } else {
            throw new Error('There are no numbers in the array!');
        }
    }

    toString() {
        if (this.expenses.length > 0) { return this.expenses.join(' -> '); }
        else { return 'empty array'; }
    }

    orderBy() {
        if (this.expenses.length > 0) {
            let isNumber = true;
            for (let data of this.expenses) {
                if (typeof data !== 'number') { isNumber = false; }
            }
            if (isNumber) {
                return this.expenses.sort((a, b) => a - b).join(', ');
            }
            else {
                return this.expenses.sort().join(', ');
            }
        }
        else { return 'empty'; }
    }
}

// let output = new Calculator();
// output.add(10);
// output.add('Pesho');
// output.add('5');
// console.log(output.toString());
// output.add(10);
// console.log(output.divideNums());
// output.add(1);
// console.log(output.orderBy());
// console.log(output.toString());

const { expect } = require('chai');

describe('test for Calculator Class', function () {
    let instance = undefined;
    beforeEach(() => {
        instance = new Calculator();
    });
    describe('add', () => {
        it('initialization', () => {
            expect(instance).haveOwnProperty('expenses');
            expect(instance.expenses).deep.equal([]);
        });
        it('adds data', () => {
            instance.add('test');
            expect(instance.expenses).deep.equal(['test']);
            instance.add(1);
            expect(instance.expenses).deep.equal(['test', 1]);
            instance.add({});
            expect(instance.expenses).deep.equal(['test', 1, {}]);
            instance.add();
            expect(instance.expenses).deep.equal(['test', 1, {}, undefined]);
            instance.add('1');
            expect(instance.expenses).deep.equal(['test', 1, {}, undefined, '1']);
        });
    });
    describe('divideNums', () => {
        it('divides numbers', () => {
            instance.add(4);
            expect(instance.divideNums()).equal(4);
            expect(instance.expenses).deep.equal([4]);
            instance.add(2);
            expect(instance.divideNums()).equal(2);
            expect(instance.expenses).deep.equal([2]);
            instance.add(-2);
            expect(instance.divideNums()).equal(-1);
            expect(instance.expenses).deep.equal([-1]);
            instance.add(0.2);
            expect(instance.divideNums()).equal(-5);
            expect(instance.expenses).deep.equal([-5]);
            instance.add(-5);
            expect(instance.divideNums()).equal(1);
            expect(instance.expenses).deep.equal([1]);
            instance.expenses = [];
            instance.add(0.3);
            instance.add(0.2);
            expect(instance.divideNums()).closeTo(1.5, 0.01);
            instance.add(0);
            expect(instance.divideNums()).equal('Cannot divide by zero');
        });
        it('throws error with no numbers', () => {
            instance.add('1');
            instance.add('2');
            expect(() => { instance.divideNums(); }).throw('There are no numbers in the array!');
        });
    });
    describe('toString', () => {
        it('returns joined items', () => {
            instance.add(1);
            expect(instance.toString()).equal('1');
            instance.add(2);
            expect(instance.toString()).equal('1 -> 2');
        });
        it('returns empty arr', () => {
            expect(instance.toString()).equal('empty array');
        });
    });
    describe('orderBy', () => {
        it('returns emptry', () => {
            expect(instance.orderBy()).equal('empty');
        });
        it('sorts numbers', () => {
            instance.add(1);
            instance.add(2);
            instance.add(3);
            expect(instance.orderBy()).equal('1, 2, 3');
        });
        it('sorts string', () => {
            instance.add('1');
            instance.add('2');
            instance.add('3');
            instance.add('12');
            expect(instance.orderBy()).equal('1, 12, 2, 3');
        });
        it('sorts mixed', () => {
            instance.add(1);
            instance.add(2);
            instance.add('3');
            instance.add('12');
            expect(instance.orderBy()).equal('1, 12, 2, 3');
        });
    });
});