const lookupChar = require('./charLookup');
const { expect } = require('chai');

describe('lookupChar function tests', () => {
    it('happy path', () => {
        expect(lookupChar('a', 0)).to.equal('a');
        expect(lookupChar('abc', 1)).to.equal('b');
    });
    it('index out of bound (upper)', () => {
        expect(lookupChar('abc', 4)).to.equal('Incorrect index');
    });
    it('index out of bound (lower)', () => {
        expect(lookupChar('abc', -1)).to.equal('Incorrect index');
    });
    it('invalid index - float', () => {
        expect(lookupChar('abc', 1.5)).to.be.undefined;
    });
    it('invalid index - wrong type', () => {
        expect(lookupChar('abc', '1')).to.be.undefined;
    });
    it('no string provided', () => {
        expect(lookupChar([], 0)).to.be.undefined;
    });
});