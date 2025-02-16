//Ways to creat objects in JS:

//1.Literal creation
function createPerson(firstName, lastName) {
    return {
        firstName,
        lastName,
    }
}

// Object.create(objectPrototype);


//2.Constructor creation
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName,
        Object.defineProperty(this, 'fullName', {
            get: function () {
                return `${firstName} ${lastName}`
            },
            set: function (value) {
                [this.firstName, this.lastName] = value.split(' ');
            }
        })
    this.ownWrite = function (message) {
        console.log(`${this.fullName} wrote: ${message}`);
    }

    Person.prototype.sharedWrite = function (message) {
        console.log(`${this.fullName} wrote: ${message}`);
    }
};

let person = new Person('Kiril', 'Ivanov');
console.log(person.hasOwnProperty('sharedWrite'));

let otherPerson = new Person('Ivan', 'Kirilov');

person.sharedWrite('hello');
otherPerson.sharedWrite('hello');

console.log(person.sharedWrite == otherPerson.sharedWrite);
console.log(person.ownWrite == otherPerson.ownWrite);

function newOperator(constructor, ...params) {
    //allocate memory
    const result = {};

    //assign prototype;
    Object.setPrototypeOf(result, constructor.prototype);

    //execute constructor with params inside memory context
    constructor.apply(result, params);

    //return memory reference
    return result;
}

person = newOperator(Person, 'Kiril', 'Ivanov');
otherPerson = newOperator(Person, 'Ivan', 'Kirilov');

person.ownWrite('hi')
otherPerson.ownWrite('hi');
person.sharedWrite('hello');
otherPerson.sharedWrite('hello');
console.log(person.sharedWrite == otherPerson.sharedWrite);

//Inheritance
function Employee(firstName, lastName, salary) {
    Person.call(this, firstName, lastName);
    this.salary = salary;

    Employee.prototype = Object.create(Person.prototype);
}

Employee.prototype.getPaid = function () {
    console.log(`${this.fullName} earned ${this.salary}`);
}

let employee = new Employee('Kiril', 'Ivanov', 200);

console.log(employee);
console.log(employee.__proto__);
employee.getPaid();