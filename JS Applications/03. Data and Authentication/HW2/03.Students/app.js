function studentsTable() {
    getStudentData();
    document.getElementById('submit').addEventListener('click', createStudent);
}

studentsTable();

async function getStudentData() {
    let url = 'http://localhost:3030/jsonstore/collections/students';
    let response = await fetch(url);
    let data = await response.json();
    return await loadStudentsData(data);
}

async function loadStudentsData(data) {
    let table = document.getElementById('main');
    let students = [];
    for (const st of Object.values(data)) {
        let student = `<tr id = ${st._id}>
                            <td>${st.firstName}</td>
                            <td>${st.lastName}</td>
                            <td>${st.facultyNumber}</td>
                            <td>${Number(st.grade).toFixed(2)}</td>
                        </tr>`;
        students.push(student);
    }
    table.innerHTML = students.join('\n');
}

async function createStudent() {
    let fName = document.getElementById('fName').value;
    let lName = document.getElementById('lName').value;
    let fNum = document.getElementById('fNum').value;
    let grade = document.getElementById('grade').value;
    if (fName && lName && fNum && grade && !isNaN(Number(fNum)) && !isNaN(Number(grade))) {
        let student = {firstName:fName,lastName:lName,facultyNumber:fNum,grade:Number(grade)};
        await fetch('http://localhost:3030/jsonstore/collections/students', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(student)
        });
        await getStudentData()
    }
}


// function createEl(el, content, id){
//     el = document.createElement(el)
//     if (content){el.innerHTML = content}
//     if (id){el.id = id}
//     return el
// }