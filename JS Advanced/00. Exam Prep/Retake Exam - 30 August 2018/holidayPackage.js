class HolidayPackage {
    constructor(destination, season) {
        this.vacationers = [];
        this.destination = destination;
        this.season = season;
        this.insuranceIncluded = false; // Default value
    }

    showVacationers() {
        if (this.vacationers.length > 0) { return 'Vacationers:\n' + this.vacationers.join('\n'); }
        else { return 'No vacationers are added yet'; }
    }

    addVacationer(vacationerName) {
        if (typeof vacationerName !== 'string' || vacationerName === ' ') {
            throw new Error('Vacationer name must be a non-empty string');
        }
        if (vacationerName.split(' ').length !== 2) {
            throw new Error('Name must consist of first name and last name');
        }
        this.vacationers.push(vacationerName);
    }

    get insuranceIncluded() {
        return this._insuranceIncluded;
    }

    set insuranceIncluded(insurance) {
        if (typeof insurance !== 'boolean') {
            throw new Error('Insurance status must be a boolean');
        }
        this._insuranceIncluded = insurance;
    }

    generateHolidayPackage() {
        if (this.vacationers.length < 1) {
            throw new Error('There must be at least 1 vacationer added');
        }
        let totalPrice = this.vacationers.length * 400;

        if (this.season === 'Summer' || this.season === 'Winter') {
            totalPrice += 200;
        }

        totalPrice += this.insuranceIncluded === true ? 100 : 0;

        return 'Holiday Package Generated\n' +
            'Destination: ' + this.destination + '\n' +
            this.showVacationers() + '\n' +
            'Price: ' + totalPrice;
    }
}
// const instace = new HolidayPackage('destination', 'season');
// instace.addVacationer('test1 test1');
// instace.addVacationer('test2 test2');
// console.log(instace.generateHolidayPackage());

const { expect } = require('chai');

describe('tests for HolidayPackage class', () => {
    let instance = null;
    beforeEach(() => {
        instance = new HolidayPackage('destination', 'season');
    });
    describe('object initialization', () => {
        it('property checks', () => {
            expect(instance.destination).equal('destination');
            expect(instance.season).equal('season');
            expect(instance.insuranceIncluded).be.false;
        });
        let instance2 = new HolidayPackage();
        it('property checks', () => {
            expect(instance2.destination).to.be.undefined;
            expect(instance2.season).to.be.undefined;
            expect(instance2.insuranceIncluded).be.false;
        });
    });
    describe('insuranceIncluded functionality', () => {
        it('happy flow', () => {
            expect(() => instance.insuranceIncluded = false).not.throw();
            expect(() => instance.insuranceIncluded = true).not.throw();
            instance.insuranceIncluded = true;
            expect(instance.insuranceIncluded).to.be.true;
        });
        it('truthy values', () => {
            expect(() => instance.insuranceIncluded = 'true').throw('Insurance status must be a boolean');
            expect(() => instance.insuranceIncluded = 1).throw('Insurance status must be a boolean');
            expect(() => instance.insuranceIncluded = []).throw('Insurance status must be a boolean');
            expect(() => instance.insuranceIncluded = {}).throw('Insurance status must be a boolean');
        });
        it('falsy values', () => {
            expect(() => instance.insuranceIncluded = '').throw('Insurance status must be a boolean');
            expect(() => instance.insuranceIncluded = 0).throw('Insurance status must be a boolean');
            expect(() => instance.insuranceIncluded = undefined).throw('Insurance status must be a boolean');
            expect(() => instance.insuranceIncluded = null).throw('Insurance status must be a boolean');
        });
    });
    describe('addVacationer functionality', () => {
        it('happy flow', () => {
            expect(() => { instance.addVacationer('test vacationer'); }).not.throw();
            expect(instance.vacationers).include('test vacationer');
            expect(() => instance.addVacationer('test ')).not.throw();
            expect(() => instance.addVacationer(' test')).not.throw();
        });
        it('one or three names', () => {
            expect(() => { instance.addVacationer('test'); }).throw('Name must consist of first name and last name');
            expect(() => { instance.addVacationer('test test test'); }).throw('Name must consist of first name and last name');
        });
        it('wrong input', () => {
            expect(() => instance.addVacationer(1)).throw('Vacationer name must be a non-empty string');
            expect(() => instance.addVacationer(' ')).throw('Vacationer name must be a non-empty string');
            expect(() => instance.addVacationer()).throw('Vacationer name must be a non-empty string');
            expect(() => instance.addVacationer([])).throw('Vacationer name must be a non-empty string');
            expect(() => instance.addVacationer({})).throw('Vacationer name must be a non-empty string');
            expect(() => instance.addVacationer('')).throw('Name must consist of first name and last name');
        });
    });
    describe('showVacationers functionality', () => {
        it('happy flow', () => {
            instance.addVacationer('test test');
            expect(instance.showVacationers()).to.equal('Vacationers:\ntest test');
            instance.addVacationer('test test');
            expect(instance.showVacationers()).to.equal('Vacationers:\ntest test\ntest test');
        });
        it('empty list', () => {
            expect(instance.showVacationers()).equal('No vacationers are added yet');
        });
    });
    describe('generateHolidayPackage functionality', () => {
        it('happy flow 2 guests', () => {
            instance.addVacationer('test1 test1');
            instance.addVacationer('test2 test2');
            expect(instance.generateHolidayPackage()).equal('Holiday Package Generated\nDestination: destination\nVacationers:\ntest1 test1\ntest2 test2\nPrice: 800');
        });
        it('happy flow 2 guests Summer', () => {
            instance.season = 'Summer';
            instance.addVacationer('test1 test1');
            instance.addVacationer('test2 test2');
            expect(instance.generateHolidayPackage()).equal('Holiday Package Generated\nDestination: destination\nVacationers:\ntest1 test1\ntest2 test2\nPrice: 1000');
        });
        it('happy flow 2 guests Winter', () => {
            instance.season = 'Winter';
            instance.addVacationer('test1 test1');
            instance.addVacationer('test2 test2');
            expect(instance.generateHolidayPackage()).equal('Holiday Package Generated\nDestination: destination\nVacationers:\ntest1 test1\ntest2 test2\nPrice: 1000');
        });
        it('happy flow 2 guests', () => {
            instance.addVacationer('test1 test1');
            instance.addVacationer('test2 test2');
            expect(instance.generateHolidayPackage()).equal('Holiday Package Generated\nDestination: destination\nVacationers:\ntest1 test1\ntest2 test2\nPrice: 800');
        });
        it('happy flow 2 guests insurance', () => {
            instance.insuranceIncluded = true;
            instance.addVacationer('test1 test1');
            instance.addVacationer('test2 test2');
            expect(instance.generateHolidayPackage()).equal('Holiday Package Generated\nDestination: destination\nVacationers:\ntest1 test1\ntest2 test2\nPrice: 900');
        });
        it('happy flow 1 guest', () => {
            instance.addVacationer('test1 test1');
            expect(instance.generateHolidayPackage()).equal('Holiday Package Generated\nDestination: destination\nVacationers:\ntest1 test1\nPrice: 400');
        });
        it('happy flow 1 guest insurance', () => {
            instance.insuranceIncluded = true;
            instance.addVacationer('test1 test1');
            expect(instance.generateHolidayPackage()).equal('Holiday Package Generated\nDestination: destination\nVacationers:\ntest1 test1\nPrice: 500');
        });
        it('happy flow 0 guests', () => {
            expect(() => { instance.generateHolidayPackage(); }).throw('There must be at least 1 vacationer added');
        });
    });
});