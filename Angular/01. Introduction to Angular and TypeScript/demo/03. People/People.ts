abstract class Employee {
    name: string;
    age: number;
    salary: number;
    tasks: string[];

    constructor(name: string, age: number, tasks: string[]) {
        this.name = name;
        this.age = age;
        this.salary = 0;
        this.tasks = tasks;
    }

    work() {
        const currentTask = this.tasks.shift();
        if (currentTask) {
            this.tasks.push(currentTask);
            console.log(currentTask.replace(/{name}/g, this.name));
        }
    }

    collectSalary() {
        console.log(`${this.name} received ${this.salary} this month.`);
    }
}

class Junior extends Employee {
    constructor(name: string, age: number) {
        const tasks = ['{name} is working on a simple task.']
        super(name, age, tasks)
    }
}

class Senior extends Employee {
    constructor(name: string, age: number) {
        const tasks = [
            '{name} is working on a complicated task.',
            '{name} is taking time off work.',
            '{name} is supervising junior workers.'
        ]
        super(name, age, tasks)
    }
}

class Manager extends Employee {
    dividend: number
    constructor(name: string, age: number) {
        const tasks = [
            '{name} scheduled a meeting.',
            '{name} is preparing a quarterly report.'
        ]
        super(name, age, tasks);
        this.dividend = 0;
    }

    collectSalary() {
        console.log(`${this.name} received ${this.salary + this.dividend} this month.`);
    }
}

export = {
    Junior,
    Senior,
    Manager,
}

const jim = new Manager('Jim', 40);
jim.salary = 1000;
jim.dividend = 200;

jim.work();
jim.work();
jim.collectSalary();