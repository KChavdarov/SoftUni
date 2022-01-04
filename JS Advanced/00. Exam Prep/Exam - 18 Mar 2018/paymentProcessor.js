class PaymentProcessor {
    constructor({ types = ['service', 'product', 'other'], precision = 2 } = { types: ['service', 'product', 'other'], precision: 2 }) {
        this.payments = [];
        this.types = types;
        this.precision = precision;
    }

    registerPayment(...inputs) {
        let [id, name, type, value] = inputs;
        if ([id, name].some(a => typeof a !== 'string' || a === '')) {
            throw new Error('Invalid input');
        }
        if (this.payments.find(a => a.id == id) !== undefined) {
            throw new Error('Invalid id');
        }
        if (!this.types.includes(type)) {
            throw new Error('Invalid type');
        }
        if (typeof value !== 'number') {
            throw new Error('Invalid value');
        }
        this.payments.push({ id, name, type, value: value.toFixed(this.precision) });
    }

    deletePayment(id) {
        let payment = this.payments.find(a => a.id == id);
        if (payment === undefined) {
            throw new Error('Invalid id');
        }
        this.payments = this.payments.filter(a => a != payment);
    }

    get(id) {
        let payment = this.payments.find(a => a.id == id);
        if (payment === undefined) {
            throw new Error('Invalid id');
        }
        const output = [`Details about payment ID: ${payment.id}`, `- Name: ${payment.name}`, `- Type: ${payment.type}`, `- Value: ${payment.value}`];
        return output.join('\n');
    }

    setOptions({ types, precision }) {
        if (Array.isArray(types)) {
            this.types = types;
        }
        if (typeof precision === 'number') {
            this.precision = precision;
        }
    }

    toString() {
        let balance = this.payments.reduce((acc, curr) => acc += Number(curr.value), 0).toFixed(this.precision);
        let output = ['Summary:', `- Payments: ${this.payments.length}`, `- Balance: ${balance}`];
        return output.join('\n');
    }
}

const generalPayments = new PaymentProcessor();
generalPayments.registerPayment('0001', 'Microchips', 'product', 15000);
generalPayments.registerPayment('01A3', 'Biopolymer', 'product', 23000);
console.log(generalPayments.toString());
console.log('-------');
try {
    generalPayments.registerPayment('E028', 'Rare-earth elements', 'materials', 8000);
} catch (error) {
    console.log(`Error: ${error.message}`);
}
console.log('-------');

generalPayments.setOptions({ types: ['product', 'material'] });
generalPayments.registerPayment('E028', 'Rare-earth elements', 'material', 8000);
console.log(generalPayments.get('E028'));
generalPayments.registerPayment('CF15', 'Enzymes', 'material', 55000);

// Should throw an error (ID not found)
console.log('-------');

try {
    generalPayments.deletePayment('E027');
} catch (error) {
    console.log(`Error: ${error.message}`);
}
// Should throw an error (ID not found)
console.log('-------');

try {
    generalPayments.get('E027');
} catch (error) {
    console.log(`Error: ${error.message}`);
}

console.log('-------');

generalPayments.deletePayment('E028');
console.log(generalPayments.toString());

console.log('-------');


// Initialize processor with custom types
const servicePayments = new PaymentProcessor({ types: ['service'] });
servicePayments.registerPayment('01', 'HR Consultation', 'service', 3000);
servicePayments.registerPayment('02', 'Discount', 'service', -1500);
console.log(servicePayments.toString());

console.log('-------');

// Initialize processor with custom precision
const transactionLog = new PaymentProcessor({ precision: 5 });
transactionLog.registerPayment('b5af2d02-327e-4cbf', 'Interest', 'other', 0.00153);
console.log(transactionLog.toString());
