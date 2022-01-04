function filterEmployees(data, criteria) {
    let employees = JSON.parse(data);
    let result = [];

    if (criteria == 'all') {
        result = employees;
    } else {
        let [key, value] = criteria.split('-');
        result = employees.filter(employee => employee[key] == value);
    }

    result = result.map(printEmployee);
    return result.join('\n');

    function printEmployee(employee, index) {
        return `${index}. ${employee.first_name} ${employee.last_name} - ${employee.email}`;
    }
}
console.log(filterEmployees(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`,
    'all'
));