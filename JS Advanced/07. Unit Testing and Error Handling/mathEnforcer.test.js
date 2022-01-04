const mathEnforcer = require('./mathEnforcer');
const { expect } = require('chai');

describe('test for MathEnforcer library', () => {
    describe('tests for AddFive method', () => {
        it('adds 5 to numbers', () => {
            expect(mathEnforcer.addFive(0)).to.equal(5);
            expect(mathEnforcer.addFive(1)).to.equal(6);
            expect(mathEnforcer.addFive(-1)).to.equal(4);
            expect(mathEnforcer.addFive(-10)).to.equal(-5);
            expect(mathEnforcer.addFive(-6.1)).to.be.closeTo(-1.1, 0.01);
        });
        it('incorrect inputs', () => {
            expect(mathEnforcer.addFive('a')).to.be.undefined;
            expect(mathEnforcer.addFive(undefined)).to.be.undefined;
            expect(mathEnforcer.addFive([])).to.be.undefined;
            expect(mathEnforcer.addFive({})).to.be.undefined;
            expect(mathEnforcer.addFive(NaN)).to.be.NaN;
        });
    });
    describe('tests for subtractTen method', () => {
        it('subtracts 10 from numbers', () => {
            expect(mathEnforcer.subtractTen(0)).to.equal(-10);
            expect(mathEnforcer.subtractTen(-10)).to.equal(-20);
            expect(mathEnforcer.subtractTen(5)).to.equal(-5);
            expect(mathEnforcer.subtractTen(20)).to.equal(10);
            expect(mathEnforcer.subtractTen(10.2)).to.be.closeTo(0.2, 0.01);
        });
        it('incorrect inputs', () => {
            expect(mathEnforcer.subtractTen('a')).to.be.undefined;
            expect(mathEnforcer.subtractTen(undefined)).to.be.undefined;
            expect(mathEnforcer.subtractTen([])).to.be.undefined;
            expect(mathEnforcer.subtractTen({})).to.be.undefined;
            expect(mathEnforcer.subtractTen(NaN)).to.be.NaN;
        });
    });
    describe('tests for sum method', () => {
        it('happy path', () => {
            expect(mathEnforcer.sum(1, 1)).to.equal(2);
            expect(mathEnforcer.sum(-1, 1)).to.equal(0);
            expect(mathEnforcer.sum(-5, 1)).to.equal(-4);
            expect(mathEnforcer.sum(0.2, 0.1)).to.be.closeTo(0.3,0.01);
        });
        it('incorrect inputs', () => {
            expect(mathEnforcer.sum('a', 'a')).to.be.undefined;
            expect(mathEnforcer.sum(1, 'a')).to.be.undefined;
            expect(mathEnforcer.sum('a', 1)).to.be.undefined;
            expect(mathEnforcer.sum(NaN, 1)).to.be.NaN;
            expect(mathEnforcer.sum(undefined, 1)).to.be.undefined;
        });
    });
});