const addOrSubtract = require('./addOrSubtract');
const { expect } = require('chai');
const createCalculator = require('./addOrSubtract');

describe('tests for add/subtract function', () => {
    let calculator = createCalculator();
    it('check output properties', () => {
        expect(calculator).to.be.an('object').that.has.all.keys('add', 'subtract', 'get');
    });
    it('private property test1', () => {
        expect(calculator.value).to.be.undefined;
    });
    it('test add function', () => {
        expect(calculator.add).to.be.a('function');
    });
    it('test subtract function', () => {
        expect(calculator.subtract).to.be.a('function');
    });
    it('test get function', () => {
        expect(calculator.get).to.be.a('function');
    });
    it('test get function output', () => {
        expect(calculator.get()).to.equal(0);
    });
    it('check subtraction', () => {
        let initial = calculator.get();
        calculator.subtract(1);
        expect(calculator.get()).to.equal(initial - 1);
    });
    it('check subtraction (negative)', () => {
        let initial = calculator.get();
        calculator.subtract(-1);
        expect(calculator.get()).to.equal(initial + 1);
    });
    it('check subtraction (type coercion)', () => {
        let initial = calculator.get();
        calculator.subtract(1);
        expect(calculator.get()).to.equal(initial - 1);
    });
    it('check addition', () => {
        let initial = calculator.get();
        calculator.add(1);
        expect(calculator.get()).to.equal(initial + 1);
    });
    it('check addition (negative)', () => {
        let initial = calculator.get();
        calculator.add(-1);
        expect(calculator.get()).to.equal(initial - 1);
    });
    it('check addition (type coercion)', () => {
        let initial = calculator.get();
        calculator.add('1');
        expect(calculator.get()).to.equal(initial + 1);
    });
    it('add invalid parameter', () => {
        calculator.add('a');
        expect(calculator.get()).to.be.NaN;
    });
    it('subtract invalid parameter', () => {
        calculator.subtract('a');
        expect(calculator.get()).to.be.NaN;
    });
});