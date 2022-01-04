function Person(name) {
    this.name = name;
}

Person.prototype.sayHi = function () {
    console.log(`${this.name} says hi!`);
};

function Employee(name, salary) {
    Person.call(this, name);
    this.salary = salary;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.collectSalary = function () {
    console.log(`${this.name} collected ${this.salary}!`);
};

const myEmployee = new Employee('Pesho', 30000);
myEmployee.sayHi();
myEmployee.collectSalary();

class Person {
    constructor(name) {
        this.name = name;
    }
    sayHi() {
        console.log(`${this.name} says hi!`);
    }
}

// class Employee extends Person {
//     constructor(name, salary) {
//         super(name);
//         this.salary = salary;
//     }

//     collectSalary() {
//         console.log(`${this.name} collected ${this.salary}!`);
//     }
// }

// const myEmployee = new Employee('Pesho', 30000);
// myEmployee.sayHi();
// myEmployee.collectSalary();