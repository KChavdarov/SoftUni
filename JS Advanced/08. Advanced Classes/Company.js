class Company {
    constructor() {
        this.departments = [];
    }
    addEmployee(username, salary, position, department) {
        if (!isValidInput(username, salary, position, department)) {
            throw new TypeError('Invalid input!');
        }

        const employee = {
            username,
            salary,
            position,
            department
        };

        this.departments.push(employee);
        return `New employee is hired. Name: ${username}. Position: ${position}`;

        function isValidInput(...inputs) {
            if (inputs.some(a => a == '' || a == null || a == undefined || a < 0)) {
                return false;
            }
            return true;
        }
    }
    bestDepartment() {
        let pivotedDepartments = [];
        const distinctDepartments = new Set();
        this.departments.forEach(a => distinctDepartments.add(a.department));
        distinctDepartments.forEach(d => {
            const filtered = this.departments.filter(e => e.department == d);
            const deptSummary = {
                name: d,
                averageSalary: filtered.reduce((acc, curr, ind, arr) => acc += curr.salary / arr.length, 0),
                employees: filtered.sort((a, b) => b.salary - a.salary || a.username.localeCompare(b.username)),
            };
            pivotedDepartments.push(deptSummary);
        });

        const sortedPivotedDepartments = pivotedDepartments.sort((a, b) => b.averageSalary - a.averageSalary);
        const bestDepartmentData = sortedPivotedDepartments[0];

        return `Best Department is: ${bestDepartmentData.name}\nAverage salary: ${bestDepartmentData.averageSalary.toFixed(2)}\n${bestDepartmentData.employees.map(a => `${a.username} ${a.salary} ${a.position}`).join('\n')}`;
    }
}

let c = new Company();
c.addEmployee('Stanimir', 2000, 'engineer', 'Construction');
c.addEmployee('Pesho', 1500, 'electrical engineer', 'Construction');
c.addEmployee('Slavi', 500, 'dyer', 'Construction');
c.addEmployee('Stan', 2000, 'architect', 'Construction');
c.addEmployee('Stanimir', 1200, 'digital marketing manager', 'Marketing');
c.addEmployee('Pesho', 1000, 'graphical designer', 'Marketing');
c.addEmployee('Gosho', 1350, 'HR', 'Human resources');
console.log(c.bestDepartment());
