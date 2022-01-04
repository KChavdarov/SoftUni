class Bank {
    constructor(bankName) {
        this._bankName = bankName;
        this.allCustomers = [];
    }
    get bankName() {
        return this._bankName;
    }
    newCustomer(customer) {
        let { firstName, lastName, personalId } = customer;
        let isNewCustomer = this.allCustomers.reduce((acc, curr) => {
            if (curr.firstName === firstName || curr.lastName === lastName || curr.personalId === personalId) {
                acc = false;
            }
            return acc;
        }, true);
        if (isNewCustomer) {
            this.allCustomers.push(customer);
            return customer;
        } else {
            throw new Error(`${firstName} ${lastName} is already our customer!`);
        }
    }
    depositMoney(personalId, amount) {
        let index = this.allCustomers.map(a => a.personalId).indexOf(personalId);
        if (index == -1) {
            throw new Error('We have no customer with this ID!');
        }
        const customer = this.allCustomers[index];
        if (!customer.hasOwnProperty('totalMoney')) {
            customer.totalMoney = 0;
        }
        customer.totalMoney += amount;
        if (!customer.hasOwnProperty('transactions')) {
            customer.transactions = [];
        }
        customer.transactions.unshift(`${customer.transactions.length + 1}. ${customer.firstName} ${customer.lastName} made deposit of ${amount}$!`);
        return `${customer.totalMoney}$`;
    }
    withdrawMoney(personalId, amount) {
        let index = this.allCustomers.map(a => a.personalId).indexOf(personalId);
        if (index == -1) {
            throw new Error('We have no customer with this ID!');
        }
        const customer = this.allCustomers[index];
        if (!customer.hasOwnProperty('totalMoney')) {
            customer.totalMoney = 0;
        }
        if (customer.totalMoney < amount) {
            throw new Error(`${customer.firstName} ${customer.lastName} does not have enough money to withdraw that amount!`);
        } else {
            customer.totalMoney -= amount;
            customer.transactions.unshift(`${customer.transactions.length + 1}. ${customer.firstName} ${customer.lastName} withdrew ${amount}$!`);
            return `${customer.totalMoney}$`;
        }
    }
    customerInfo(personalId) {
        let index = this.allCustomers.map(a => a.personalId).indexOf(personalId);
        if (index == -1) {
            throw new Error('We have no customer with this ID!');
        }
        const customer = this.allCustomers[index];
        let result = [`Bank name: ${this.bankName}`];
        result.push(`Customer name: ${customer.firstName} ${customer.lastName}`);
        result.push(`Customer ID: ${personalId}`);
        if (customer.totalMoney) { result.push(`Total Money: ${customer.totalMoney}$`); }
        if (customer.transactions) { result.push(`Transactions:\n${customer.transactions.join('\n')}`); };
        return result.join('\n');
    }
}

let bank = new Bank('SoftUni Bank');

console.log(bank.newCustomer({ firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267 }));
console.log(bank.newCustomer({ firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596 }));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
// bank.depositMoney(4151596, 555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));
console.log(bank.customerInfo(4151596));