class Vacationer {
    constructor(fullName, creditCard = [1111, '', 111]) {
        this.fullName = fullName;
        this.idNumber = this.generateIDNumber();
        this.addCreditCardInfo(creditCard);
        this.wishList = [];
    }

    get fullName() {
        return this._fullName;
    }
    set fullName(input) {
        if (input.length != 3) {
            throw new Error('Name must include first name, middle name and last name');
        } else {
            let format = /^[A-Z][a-z]+$/;
            if (input.map(a => format.test(a)).some(a => !a)) {
                throw new Error('Invalid full name');
            } else {
                let [firstName, middleName, lastName] = input;
                this._fullName = {
                    firstName,
                    middleName,
                    lastName,
                };
            }
        }
    }
    generateIDNumber() {
        const name = this.fullName;
        // 231 * firstName’s first letter’s ASCII code + 139 * middleName length
        let idNumber = 231 * (name.firstName).charCodeAt(0) + 139 * name.middleName.length;
        let vowels = ['a', 'e', 'o', 'i', 'u'];
        idNumber += vowels.includes(name.lastName.slice(-1)) ? '8' : '7';
        return idNumber;
    }
    addDestinationToWishList(destination) {
        if (this.wishList.includes(destination)) {
            throw new Error('Destination already exists in wishlist');
        } else {
            this.wishList.push(destination);
        }
        this.wishList.sort((a, b) => a.length - b.length);
    }
    addCreditCardInfo(input) {
        let [cardNumber, expirationDate, securityNumber] = input;
        if (input.length != 3) {
            throw new Error('Missing credit card information');
        }
        if (typeof cardNumber != 'number' || typeof securityNumber != 'number') {
            throw new Error('Invalid credit card details');
        };
        this.creditCard = {
            cardNumber,
            expirationDate,
            securityNumber,
        };
    }
    getVacationerInfo() {
        const result = [];
        result.push(`Name: ${Object.values(this.fullName).join(' ')}`);
        result.push(`ID number: ${this.idNumber}`);
        result.push(`Wishlist:\n${this.wishList.length == 0 ? 'empty' : this.wishList.join('\n')}`);
        result.push('Credit Card:');
        result.push(`Card Number: ${this.creditCard.cardNumber}`);
        result.push(`Expiration Date: ${this.creditCard.expirationDate}`);
        result.push(`Security Number: ${this.creditCard.securityNumber}`);
        return result.join('\n');
    }
}

// Initialize vacationers with 2 and 3 parameters
let vacationer1 = new Vacationer(['Vania', 'Ivanova', 'Zhivkova']);
let vacationer2 = new Vacationer(['Tania', 'Ivanova', 'Zhivkova'], 
[123456789, '10/01/2018', 777]);

// // Should throw an error (Invalid full name)
// try {
//     let vacationer3 = new Vacationer(['Vania', 'Ivanova', 'ZhiVkova']);
// } catch (err) {
//     console.log('Error: ' + err.message);
// }

// // Should throw an error (Missing credit card information)
// try {
//     let vacationer3 = new Vacationer(['Zdravko', 'Georgiev', 'Petrov']);
//     vacationer3.addCreditCardInfo([123456789, '20/10/2018']);
// } catch (err) {
//     console.log('Error: ' + err.message);
// }

vacationer1.addDestinationToWishList('Spain');
vacationer1.addDestinationToWishList('Germany');
vacationer1.addDestinationToWishList('Bali');

// Return information about the vacationers
console.log(vacationer1.getVacationerInfo());
console.log(vacationer2.getVacationerInfo());

