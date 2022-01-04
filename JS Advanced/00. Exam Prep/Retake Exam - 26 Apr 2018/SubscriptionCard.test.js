const SubscriptionCard = require('./SubscriptionCard');
const { expect } = require('chai');
describe('test for SubscriptionCard class', () => {
    let instance = undefined;
    let startDate = new Date('2021-02-01');
    let endDate = new Date('2021-03-01');
    beforeEach(() => {
        instance = new SubscriptionCard('firstName', 'lastName', 'SSN');
    });
    describe('Instantiation', function () {
        it('accessor methods', function () {
            expect(instance.firstName).equal('firstName');
            instance.firstName = 'changeName';
            expect(instance.firstName).equal('firstName');
            expect(instance.lastName).equal('lastName');
            instance.lastName = 'changeName';
            expect(instance.lastName).equal('lastName');
            expect(instance.SSN).equal('SSN');
            instance.SSN = 'changedSSN';
            expect(instance.SSN).equal('SSN');
            expect(instance._subscriptions).deep.equal([]);
        });
        it('blocking/unblocking', () => {
            expect(instance.isBlocked).equal(false);
            instance.block();
            expect(instance.isBlocked).equal(true);
            instance.unblock();
            expect(instance.isBlocked).equal(false);
            instance.block();
            expect(instance.isBlocked).equal(true);
        });
    });
    describe('addSubscription', () => {
        it('adds subscription', () => {
            instance.addSubscription('metro', startDate, endDate);
            expect(instance._subscriptions).deep.equal([{ line: 'metro', startDate: startDate, endDate: endDate }]);
            instance.addSubscription('*', startDate, endDate);
            expect(instance._subscriptions).deep.equal([{ line: 'metro', startDate: startDate, endDate: endDate }, { line: '*', startDate: startDate, endDate: endDate }]);
        });
    });
    describe('isValid', () => {
        it('returns true with active subscriptions', () => {
            instance.addSubscription('metro', startDate, endDate);
            expect(instance.isValid('metro', new Date('2021-02-01'))).equal(true);
            instance.addSubscription('*', startDate, endDate);
            expect(instance.isValid('metro', new Date('2021-02-02'))).equal(true);
            expect(instance.isValid('metro', new Date('2021-03-01'))).equal(true);
            expect(instance.isValid('bus', new Date('2021-02-15'))).equal(true);
        });
        it('returns false with inactive subscriptions', () => {
            expect(instance.isValid('metro', new Date('2021-02-15'))).equal(false);
            instance.addSubscription('metro', startDate, endDate);
            expect(instance.isValid('bus', new Date('2021-02-15'))).equal(false);
            expect(instance.isValid('metro', new Date('2021-01-31'))).equal(false);
            expect(instance.isValid('metro', new Date('2021-03-02'))).equal(false);
            instance.block();
            expect(instance.isValid('metro', new Date('2021-02-15'))).equal(false);
        });
    });
});