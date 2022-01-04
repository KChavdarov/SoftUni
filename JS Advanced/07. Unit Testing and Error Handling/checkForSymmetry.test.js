const isSymmetric = require('./checkForSymmetry');
const { expect } = require('chai');

describe('test for symmetry function', () => {
    it('returns false with incorrect type', () => {
        expect(isSymmetric('a')).to.be.false;
    });
    it('returns true with symmetric array input(even)', () => {
        expect(isSymmetric([1, 1])).to.be.true;
    });
    it('returns true with symmetric array input(odd)', () => {
        expect(isSymmetric([1, 2, 1])).to.be.true;
    });
    it('returns false with asymmetric array input', () => {
        expect(isSymmetric([1, 2])).to.be.false;
    });
    it('returns true with symmetric array (strings)', () => {
        expect(isSymmetric(['a', 'a'])).to.be.true;
    });
    it('returns true with symmetric array (coercion)', () => {
        expect(isSymmetric(['1', 1])).to.be.false;
    });
});