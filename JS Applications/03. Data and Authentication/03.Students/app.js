function start() {
    getStudentData();
    document.getElementById('form').addEventListener('submit', processForm);
}

async function processForm(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const facultyNumber = formData.get('facultyNumber');
    const grade = formData.get('grade');
    await createStudent({ firstName, lastName, facultyNumber, grade });
    form.reset();
    getStudentData();
}

async function createStudent(data) {
    return await request('http://localhost:3030/jsonstore/collections/students', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
}

async function getStudentData() {
    const table = document.getElementById('students');
    const data = await request('http://localhost:3030/jsonstore/collections/students');
    table.innerHTML = '';
    Object.values(data).forEach(student => {
        const newRow = renderStudent(student);
        table.appendChild(newRow);
    });
}

function renderStudent({ firstName, lastName, facultyNumber, grade }) {
    const newRow = document.createElement('tr');
    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = firstName;
    const lastNameCell = document.createElement('td');
    lastNameCell.textContent = lastName;
    const facultyNumberCell = document.createElement('td');
    facultyNumberCell.textContent = facultyNumber;
    const gradeCell = document.createElement('td');
    gradeCell.textContent = grade;
    newRow.appendChild(firstNameCell);
    newRow.appendChild(lastNameCell);
    newRow.appendChild(facultyNumberCell);
    newRow.appendChild(gradeCell);
    return newRow;
}

async function request(url, options) {
    const response = await fetch(url, options);
    if (!response.ok) {
        const error = await response.json();
        alert(error.message);
        throw new Error(error.message);
    }
    const data = await response.json();
    return data;
}

start();