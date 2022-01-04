const isOddOrEven = require('./evenOrOdd');
const { expect } = require('chai');

describe('evenOrOdd function tests', () => {
    it('input type validator', () => {
        expect(isOddOrEven(1)).to.be.undefined;
    });
    it('input type validator', () => {
        expect(isOddOrEven([])).to.be.undefined;
    });
    it('input type validator', () => {
        expect(isOddOrEven({})).to.be.undefined;
    });
    it('input type validator', () => {
        expect(isOddOrEven()).to.be.undefined;
    });
    it('input type validator', () => {
        expect(isOddOrEven(true)).to.be.undefined;
    });
    it('odd input', () => {
        expect(isOddOrEven('abc')).to.equal('odd');
    });
    it('even input', () => {
        expect(isOddOrEven('ab')).to.equal('even');
    });
    it('multiple parameters', () => {
        expect(isOddOrEven('ab', 'abc')).to.equal('even');
    });
});