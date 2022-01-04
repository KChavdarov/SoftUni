class PaymentPackage {
    constructor(name, value) {
        this.name = name;
        this.value = value;
        this.VAT = 20;      // Default value    
        this.active = true; // Default value
    }

    get name() {
        return this._name;
    }

    set name(newValue) {
        if (typeof newValue !== 'string') {
            throw new Error('Name must be a non-empty string');
        }
        if (newValue.length === 0) {
            throw new Error('Name must be a non-empty string');
        }
        this._name = newValue;
    }

    get value() {
        return this._value;
    }

    set value(newValue) {
        if (typeof newValue !== 'number') {
            throw new Error('Value must be a non-negative number');
        }
        if (newValue < 0) {
            throw new Error('Value must be a non-negative number');
        }
        this._value = newValue;
    }

    get VAT() {
        return this._VAT;
    }

    set VAT(newValue) {
        if (typeof newValue !== 'number') {
            throw new Error('VAT must be a non-negative number');
        }
        if (newValue < 0) {
            throw new Error('VAT must be a non-negative number');
        }
        this._VAT = newValue;
    }

    get active() {
        return this._active;
    }

    set active(newValue) {
        if (typeof newValue !== 'boolean') {
            throw new Error('Active status must be a boolean');
        }
        this._active = newValue;
    }

    toString() {
        const output = [
            `Package: ${this.name}` + (this.active === false ? ' (inactive)' : ''),
            `- Value (excl. VAT): ${this.value}`,
            `- Value (VAT ${this.VAT}%): ${this.value * (1 + this.VAT / 100)}`
        ];
        return output.join('\n');
    }
}

// // Should throw an error
// try {
//     const hrPack = new PaymentPackage('HR Services');
// } catch (err) {
//     console.log('Error: ' + err.message);
// }
// const packages = [
//     new PaymentPackage('HR Services', 1500),
//     new PaymentPackage('Consultation', 800),
//     new PaymentPackage('Partnership Fee', 7000),
// ];
// console.log(packages.join('\n'));

// const wrongPack = new PaymentPackage('Transfer Fee', 100);
// // Should throw an error
// try {
//     wrongPack.active = null;
// } catch (err) {
//     console.log('Error: ' + err.message);
// }

const test = new PaymentPackage('test', 100);
test.active = false;
console.log(`${test}`);

const { expect } = require('chai');

describe('tests for PaymentPackage class', () => {
    let instance = null;
    beforeEach(() => {
        instance = new PaymentPackage('test', 100);
    });

    it('initialization', () => {
        expect(instance).to.haveOwnProperty('_name');
        expect(instance).to.haveOwnProperty('_value');
        expect(instance).to.haveOwnProperty('_VAT');
        expect(instance).to.haveOwnProperty('_active');
    });

    it('constructor', () => {
        expect(instance._name).to.equal('test');
        expect(instance._value).to.equal(100);
        expect(instance._VAT).to.equal(20);
        expect(instance._active).to.equal(true);
    });

    it('name', () => {
        expect(instance.name).to.equal('test');
        expect(() => { instance.name = ''; }).to.throw('Name must be a non-empty string');
        expect(() => { instance.name = 1; }).to.throw('Name must be a non-empty string');
        instance.name = 'test2';
        expect(instance.name).to.equal('test2');
    });

    it('value', () => {
        expect(instance.value).to.equal(100);
        expect(() => { instance.value = ''; }).to.throw('Value must be a non-negative number');
        expect(() => { instance.value = -1; }).to.throw('Value must be a non-negative number');
        // expect(() => { instance.value = NaN; }).to.throw('Value must be a non-negative number');
        instance.value = 200;
        expect(instance.value).to.equal(200);
        instance.value = 0;
        expect(instance.value).to.equal(0);
    });

    it('VAT', () => {
        expect(instance.VAT).to.equal(20);
        expect(() => { instance.VAT = ''; }).to.throw('VAT must be a non-negative number');
        expect(() => { instance.VAT = -1; }).to.throw('VAT must be a non-negative number');
        // expect(() => { instance.VAT = NaN; }).to.throw('VAT must be a non-negative number');
        instance.VAT = 25;
        expect(instance.VAT).to.equal(25);
    });

    it('active', () => {
        expect(instance.active).to.equal(true);
        expect(() => { instance.active = ''; }).to.throw('Active status must be a boolean');
        expect(() => { instance.active = 0; }).to.throw('Active status must be a boolean');
        expect(() => { instance.active = 'true'; }).to.throw('Active status must be a boolean');
        instance.active = false;
        expect(instance.active).to.equal(false);
    });

    it('toString', () => {
        expect(instance.toString()).to.equal('Package: test\n- Value (excl. VAT): 100\n- Value (VAT 20%): 120');
        instance.active = false;
        expect(instance.toString()).to.equal('Package: test (inactive)\n- Value (excl. VAT): 100\n- Value (VAT 20%): 120');
        instance.name = 'test2';
        instance.value = 200;
        instance.VAT = 30;
        expect(instance.toString()).to.equal('Package: test2 (inactive)\n- Value (excl. VAT): 200\n- Value (VAT 30%): 260');
    });
});
