import { html, render } from './node_modules/lit-html/lit-html.js';
import { classMap } from './node_modules/lit-html/directives/class-map.js';

(async function() {
    const response = await fetch('http://localhost:3030/jsonstore/advanced/table');
    const data = await response.json();
    const students = Object.values(data);
    update(students);

    document.querySelector('#searchBtn').addEventListener('click', onClick);

    function onClick() {
        const search = document.getElementById('searchField');
        update(students, search.value);
        search.value = '';
    }
})();

const rowTemplate = (student, search) => {
    delete student._id;
    const isMatch = (search && Object.values(student).some(a => a.toLowerCase().includes(search.toLowerCase())));
    return html `
       <tr class="${classMap({select:isMatch})}">
          <td>${student.firstName} ${student.lastName}</td>
          <td>${student.email}</td>
          <td>${student.course}</td>
       </tr>`;
};

function update(students, search) {
    const rows = students.map(a => rowTemplate(a, search));
    render(rows, document.querySelector('tbody'));
}

    // (async function solve() {
    //     const tbody = document.querySelector('.container tbody');
    //     const data = await getStudents();
    //     const rows = Object.values(data).map(a => rowTemplate(a));
    //     render(rows, tbody);

    //     document.querySelector('#searchBtn').addEventListener('click', onClick);

    //     function onClick() {
    //         const search = document.getElementById('searchField');
    //         const rows = Object.values(data).map(a => rowTemplate(a, search.value));
    //         search.value = '';
    //         render(rows, tbody);
    //     }
    // })();

    // async function getStudents() {
    //     const response = await fetch('http://localhost:3030/jsonstore/advanced/table');
    //     const data = await response.json();
    //     return data;
    // };


    // const rowTemplate = (student, search) => {
    //     delete student._id;
    //     const isMatch = (search && Object.values(student).some(a => a.toLowerCase().includes(search.toLowerCase())));
    //     return html `
    //    <tr class="${classMap({select:isMatch})}">
    //       <td>${student.firstName} ${student.lastName}</td>
    //       <td>${student.email}</td>
    //       <td>${student.course}</td>
    //    </tr>`;
    // };