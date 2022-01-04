function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      let data = parseText();
      let restaurants = parseData(data);
      let [bestRestaurant, bestEmployees] = Object.entries(restaurants).sort((a, b) => getAverageSalary(b[1]) - getAverageSalary(a[1]))[0];
      setOutputText();

      function setOutputText() {
         document.querySelector('#bestRestaurant p ').textContent = getRestaurantText();
         document.querySelector('#workers p ').textContent = getEmployeeText();
      }

      function getRestaurantText() {
         return `Name: ${bestRestaurant} Average Salary: ${(getAverageSalary(restaurants[bestRestaurant])).toFixed(2)} Best Salary: ${(getBestSalary(restaurants[bestRestaurant])).toFixed(2)}`;
      }

      function getEmployeeText() {
         let bestEmployeesSorted = Object.entries(bestEmployees).sort(([nameA, salaryA], [nameB, salaryB]) => salaryB - salaryA);
         bestEmployeesSorted = bestEmployeesSorted.map(([name, salary]) => `Name: ${name} With Salary: ${salary}`);
         return bestEmployeesSorted.join(' ');
      }

      function parseData(data) {
         let restaurants = data.reduce(reducer, {});
         function reducer(acc, curr, ind, arr) {
            let [restaurant, employeeData] = curr.split(' - ');
            let employees = employeeData.split(', ');
            for (const employee of employees) {
               let [employeeName, salary] = employee.split(' ');
               if (acc[restaurant] == undefined) {
                  acc[restaurant] = {};
               }
               acc[restaurant][employeeName] = Number(salary);
            }
            return acc;
         }
         return restaurants;
      }

      function parseText() {
         let text = document.querySelector('#inputs textarea').value;

         // let data = [];
         // let regex = /"(?<string>.+)"/gm;
         // let match = regex.exec(text);

         // while (match != null) {
         //    data.push(match.groups.string);
         //    match = regex.exec(text);
         // }
         // console.log(data);
         // return data;

         let data = JSON.parse(text);
         return data;
      }

      function getBestSalary(employeeData) {
         let salaries = Object.values(employeeData);
         return Math.max(...salaries);
      }

      function getAverageSalary(employeeData) {
         return Object.values(employeeData).reduce((acc, curr, ind, arr) => acc += curr / arr.length, 0);
      }
   }
}