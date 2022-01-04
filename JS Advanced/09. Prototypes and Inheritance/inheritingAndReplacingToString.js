function toStringExtension() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }

        toString() {
            let info = Object.entries(this).map(([key, value]) => `${key}: ${value}`).join(', ');
            return `${this.constructor.name} (${info})`;
        }
    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }
    }

    class Student extends Person {
        constructor(name, email, course) {
            super(name, email);
            this.course = course;
        }
    }

    return {
        Person,
        Teacher,
        Student,
    };
}

const myPerson = new Person('Ivan', 'ivan@abv.bg');
console.log(myPerson.toString());

const myTeacher = new Teacher('Pesho', 'pesho@abv.bg', 'philosophy');
console.log(myTeacher.toString());

const myStudent = new Student('Gosho', 'gosho@abv.bg', 'IB');
console.log(myStudent.toString());