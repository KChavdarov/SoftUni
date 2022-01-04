function people() {
    const TASKS = {
        JUNIOR: [
            `${this.name} is working on a simple task.`],
        MANAGER: [
            `${this.name} scheduled a meeting.`,
            `${this.name} is preparing a quarterly report.`],
        SENIOR: [
            `${this.name} is working on a complicated task.`,
            `${this.name} is taking time off work.`,
            `${this.name} is supervising junior workers.`],
    };

    class Employee {
        constructor(name, age, tasks) {
            if (new.target === Employee) {
                throw new Error('Cannot instantiate directly');
            }
            this.name = name;
            this.age = age;
            this.salary = 0;
            this.tasks = tasks;
        }
        work() {
            const task = this.tasks.shift();
            console.log(task);
            this.tasks.push(task);
        }
        collectSalary() {
            console.log(`${this.name} received ${this.salary + (this.dividend ? this.dividend : 0)} this month.`);
        }
    }

    class Junior extends Employee {
        constructor(name, age,) {
            super(name, age, TASKS.JUNIOR);
        }
    }
    class Manager extends Employee {
        constructor(name, age) {
            super(name, age, TASKS.MANAGER);
            this.dividend = 0;
        }
    }
    class Senior extends Employee {
        constructor(name, age) {
            super(name, age, TASKS.SENIOR);
        }
    }
    return {
        Employee,
        Junior,
        Senior,
        Manager
    };
}