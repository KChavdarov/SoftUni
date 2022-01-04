const numberOperations = {
    powNumber: function (num) {
        return num * num;
    },
    numberChecker: function (input) {
        input = Number(input);

        if (isNaN(input)) {
            throw new Error('The input is not a number!');
        }

        if (input < 100) {
            return 'The number is lower than 100!';
        } else {
            return 'The number is greater or equal to 100!';
        }
    },
    sumArrays: function (array1, array2) {

        const longerArr = array1.length > array2.length ? array1 : array2;
        const rounds = array1.length < array2.length ? array1.length : array2.length;

        const resultArr = [];

        for (let i = 0; i < rounds; i++) {
            resultArr.push(array1[i] + array2[i]);
        }

        resultArr.push(...longerArr.slice(rounds));

        return resultArr;
    }
};

const { expect } = require('chai');

describe('test for Number Operations', () => {
    describe('powNumber', () => {
        it('returns correct result', () => {
            expect(numberOperations.powNumber(2)).equal(4);
            expect(numberOperations.powNumber(-2)).equal(4);
            expect(numberOperations.powNumber(0)).equal(0);
            expect(numberOperations.powNumber(-1)).equal(1);
            expect(numberOperations.powNumber(1)).equal(1);
        });
    });
    describe('numberChecker', () => {
        it('returns correct result', () => {
            expect(numberOperations.numberChecker(-1)).equal('The number is lower than 100!');
            expect(numberOperations.numberChecker(1)).equal('The number is lower than 100!');
            expect(numberOperations.numberChecker('1')).equal('The number is lower than 100!');
            expect(numberOperations.numberChecker([])).equal('The number is lower than 100!');
            expect(numberOperations.numberChecker(null)).equal('The number is lower than 100!');
            expect(numberOperations.numberChecker(99)).equal('The number is lower than 100!');
            expect(numberOperations.numberChecker(100)).equal('The number is greater or equal to 100!');
            expect(numberOperations.numberChecker(101)).equal('The number is greater or equal to 100!');
        });
        it('throws an error with NaN', () => {
            expect(() => { numberOperations.numberChecker(NaN); }).throw('The input is not a number!');
            expect(() => { numberOperations.numberChecker({}); }).throw('The input is not a number!');
            expect(() => { numberOperations.numberChecker('hello'); }).throw('The input is not a number!');
            expect(() => { numberOperations.numberChecker(undefined); }).throw('The input is not a number!');
        });
    });
    describe('sumArrays', () => {
        it('returns correct result', () => {
            expect(numberOperations.sumArrays([1, 1, 1], [1, 1, 1])).deep.equal([2, 2, 2]);
            expect(numberOperations.sumArrays([1, 1], [1, 1, 1])).deep.equal([2, 2, 1]);
            expect(numberOperations.sumArrays([1, 1, 1], [1, 1])).deep.equal([2, 2, 1]);
        });
    });
});