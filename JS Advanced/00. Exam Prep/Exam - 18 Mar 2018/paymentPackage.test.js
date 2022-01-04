const PaymentPackage = require('./paymentPackage');
const { expect } = require('chai');

describe('test', () => {
    describe('name', () => {
        it('name good', () => {
            let myInstance = new PaymentPackage('HR Services', 1500);
            expect(myInstance.name).equal('HR Services');
            expect(myInstance._name).equal('HR Services');
        });
        it('name good', () => {
            let myInstance = new PaymentPackage(' ', 1500);
            expect(myInstance.name).equal(' ');
        });
        it('name empty str', () => {
            let myInstance = new PaymentPackage('HR Services', 1500);
            expect(() => { myInstance.name = ''; }).throw('Name must be a non-empty string');
        });
        it('name other', () => {
            let myInstance = new PaymentPackage('HR Services', 1500);
            expect(() => { myInstance.name = 1; }).throw('Name must be a non-empty string');
        });
    });
    describe('value', () => {
        it('value good', () => {
            let myInstance = new PaymentPackage('HR Services', 1500);
            expect(myInstance.value).equal(1500);
            expect(myInstance._value).equal(1500);
            myInstance.value = 1.5;
            expect(myInstance.value).equal(1.5);
            expect(myInstance._value).equal(1.5);
            myInstance.value = 0;
            expect(myInstance.value).equal(0);
            expect(myInstance._value).equal(0);
        });
        it('value negative', () => {
            let myInstance = new PaymentPackage('HR Services', 1500);
            expect(() => { myInstance.value = -1; }).throw('Value must be a non-negative number');
        });
        it('value string', () => {
            let myInstance = new PaymentPackage('HR Services', 1500);
            expect(() => { myInstance.value = '1'; }).throw('Value must be a non-negative number');
        });
    });
    describe('VAT', () => {
        it('vat good', () => {
            let myInstance = new PaymentPackage('HR Services', 1500);
            expect(myInstance.VAT).equal(20);
            expect(myInstance._VAT).equal(20);
            myInstance.VAT = 30;
            expect(myInstance.VAT).equal(30);
            expect(myInstance._VAT).equal(30);
            myInstance.VAT = 15.5;
            expect(myInstance.VAT).equal(15.5);
            expect(myInstance._VAT).equal(15.5);
            myInstance.VAT = 0;
            expect(myInstance.VAT).equal(0);
            expect(myInstance._VAT).equal(0);
        });
        it('VAT bad', () => {
            let myInstance = new PaymentPackage('HR Services', 1500);
            expect(() => { myInstance.VAT = -20; }).throw('VAT must be a non-negative number');
            expect(() => { myInstance.VAT = '20'; }).throw('VAT must be a non-negative number');
        });
    });
    describe('active', () => {
        it('active good', () => {
            let myInstance = new PaymentPackage('HR Services', 1500);
            expect(myInstance.active).equal(true);
            expect(myInstance._active).equal(true);
            myInstance.active = false;
            expect(myInstance.active).equal(false);
            expect(myInstance._active).equal(false);
        });
        it('active bad', () => {
            let myInstance = new PaymentPackage('HR Services', 1500);
            expect(() => { myInstance.active = 'false'; }).throw('Active status must be a boolean');
            expect(() => { myInstance.active = null; }).throw('Active status must be a boolean');
        });
    });
    describe('toString', () => {
        it('active', () => {
            let myInstance = new PaymentPackage('HR Services', 1500);
            expect(myInstance.toString()).equal('Package: HR Services\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800');
        });
        it('inactive', () => {
            let myInstance = new PaymentPackage('HR Services', 1500);
            myInstance.active = false;
            expect(myInstance.toString()).equal('Package: HR Services (inactive)\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800');
        });
    });
});