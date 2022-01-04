// class Person {
//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//     get fullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }

//     set fullName(value) {
//         [this.firstName, this.lastName] = value.split(' ');
//     }
// }

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    Object.defineProperty(this, 'fullName', {
        enumerable: true,
        get() {
            return `${this.firstName} ${this.lastName}`;
        },
        set(value) {
            [this.firstName, this.lastName] = value.split(' ');
        }
    });
}


let person = new Person('Albert', 'Simpson');
console.log(person.fullName); //Albert Simpson
person.firstName = 'Simon';
console.log(person.fullName); //Simon Simpson
