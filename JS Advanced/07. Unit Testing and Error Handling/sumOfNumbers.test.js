const { expect } = require('chai');
const sum = require('./sumOfNumbers');

describe('Test of Sum Function', () => {
    it('sums single number', () => {
        expect(sum([1])).to.equal(1);
    });
    it('empyt array', () => {
        expect(sum([])).to.equal(0);
    });
    it('sums multiple numbers', () => {
        expect(sum([1, 2, 3, 4])).to.equal(10);
    });
});