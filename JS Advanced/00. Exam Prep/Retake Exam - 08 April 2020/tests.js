const { Repository } = require('./solution.js');
const { expect } = require('chai');

describe('Tests for Repository Class', function () {
    let instance = undefined;
    beforeEach(() => {
        instance = new Repository({ test: 'string', test1: 'number', test3: 'object' });
    });
    describe('Instantiation', function () {
        it('happy flow', function () {
            expect(instance.data).instanceOf(Map);
            expect(typeof instance.props).equal('object');
            expect(instance.props).deep.equal({ test: 'string', test1: 'number', test3: 'object' });
            expect(instance.count).equal(0);
        });
    });
    describe('add entity', () => {
        it('happy flow', () => {
            expect(instance.count).equal(0);
            expect(() => { instance.add({ test: 'testValue', test1: 1, test3: [] }); }).not.throw();
            expect(instance.add({ test: 'testValue2', test1: 2, test3: {} })).equal(1);
            expect(instance.count).equal(2);
            expect(instance.add({ test: 'testValue3', test1: 3, test3: {} })).equal(2);
            expect(instance.count).equal(3);
        });
        it('missing property', () => {
            expect(() => { instance.add({ test: 'testValue', test1: 1 }); }).throw('Property test3 is missing from the entity!');
            expect(() => { instance.add({ test1: 'testValue', test1: 1, test3: [] }); }).throw('Property test is missing from the entity!');
            expect(() => { instance.add({ test: true, testA: '1', test3: [] }); }).throw('Property test1 is missing from the entity!');
        });
        it('wrong property', () => {
            expect(() => { instance.add({ test: 'testValue', test1: 1, test3: 1 }); }).throw('Property test3 is not of correct type!');
            expect(() => { instance.add({ test: 'testValue', test1: '1', test3: {} }); }).throw('Property test1 is not of correct type!');
        });
    });
    describe('getId', () => {
        it('happy flow', () => {
            instance.add({ test: 'testValue', test1: 1, test3: [] });
            expect(instance.getId(0)).deep.equal({ test: 'testValue', test1: 1, test3: [] });
            instance.add({ test: 'testValue', test1: 1, test3: [] });
            expect(instance.getId(1)).deep.equal({ test: 'testValue', test1: 1, test3: [] });
        });
        it('missing data', () => {
            expect(() => { instance.getId(0); }).throw('Entity with id: 0 does not exist!');
            expect(() => { instance.getId(1); }).throw('Entity with id: 1 does not exist!');
            instance.add({ test: 'testValue', test1: 1, test3: [] });
            expect(() => { instance.getId(1); }).throw('Entity with id: 1 does not exist!');
            expect(() => { instance.getId('1'); }).throw('Entity with id: 1 does not exist!');
            expect(() => { instance.getId(-1); }).throw('Entity with id: -1 does not exist!');
        });
    });
    describe('update', () => {
        it('happy flow', () => {
            instance.add({ test: 'testValue', test1: 1, test3: [] });
            instance.add({ test: 'testValue1', test1: 2, test3: [] });
            expect(() => { instance.update(1, { test: 'testValue2', test1: 3, test3: [] }); }).not.throw();
            expect(instance.getId(1)).deep.equal({ test: 'testValue2', test1: 3, test3: [] });
        });
        it('missing property', () => {
            instance.add({ test: 'testValue', test1: 1, test3: [] });
            expect(() => { instance.update(0, { test: 'testValue1', test1: 1 }); }).throw('Property test3 is missing from the entity!');
        });
        it('wrong property', () => {
            instance.add({ test: 'testValue', test1: 1, test3: [] });
            expect(() => { instance.update(0, { test: 'testValue', test1: 1, test3: 1 }); }).throw('Property test3 is not of correct type!');
            expect(() => { instance.update(0, { test: 'testValue', test1: '1', test3: {} }); }).throw('Property test1 is not of correct type!');
        });
        it('missing data', () => {
            instance.add({ test: 'testValue', test1: 1, test3: [] });
            expect(() => { instance.update(1, { test: 'testValue2', test1: 3, test3: [] }); }).throw('Entity with id: 1 does not exist!');
            expect(() => { instance.update(-1, { test: 'testValue2', test1: 3, test3: [] }); }).throw('Entity with id: -1 does not exist!');
        });
    });
    describe('delete', () => {
        it('happy flow', () => {
            instance.add({ test: 'testValue', test1: 1, test3: [] });
            instance.add({ test: 'testValue1', test1: 2, test3: [] });
            expect(instance.count).equal(2);
            expect(() => { instance.del(1); }).not.throw();
            expect(instance.count).equal(1);
            expect(() => { instance.getId(1); }).throw('Entity with id: 1 does not exist!');
            expect(() => { instance.getId('1'); }).throw('Entity with id: 1 does not exist!');
            expect(() => { instance.getId(-1); }).throw('Entity with id: -1 does not exist!');
        });
        it('missing data', () => {
            expect(() => { instance.getId(0); }).throw('Entity with id: 0 does not exist!');
        });
    });
});
