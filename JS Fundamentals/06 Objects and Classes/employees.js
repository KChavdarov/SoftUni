function employees(input) {
    class Employee {
        constructor(name, id) {
            this.name = name;
            this.id = this.name.length;
        }
        identify() {
            console.log(`Name: ${this.name} -- Personal Number: ${this.id}`);
        }
    }

    for (const element of input) {
        const employee = new Employee(element);
        employee.identify();
    }
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);