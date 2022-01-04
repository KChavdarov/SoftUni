async function attachEvents() {
  let form = document.querySelector('form');
  let bodyTable = document.querySelector('tbody');
  let url = 'http://localhost:3030/jsonstore/collections/students';
  let response1 = await fetch(url);
  let data1 = await response1.json();
  console.log(data1);
  for (const key in data1) {
    let newRow = document.createElement('tr');
    let firstTd1 = document.createElement('td');
    firstTd1.textContent = data1[key].firstName;
    newRow.appendChild(firstTd1);
    let secondTd1 = document.createElement('td');
    secondTd1.textContent = data1[key].lastName;
    newRow.appendChild(secondTd1);
    let thirdTd1 = document.createElement('td');
    thirdTd1.textContent = data1[key].facultyNumber;
    newRow.appendChild(thirdTd1);
    let forthTd1 = document.createElement('td');
    forthTd1.textContent = data1[key].grade;
    newRow.appendChild(forthTd1);
    bodyTable.appendChild(newRow);
  }
  form.addEventListener('submit', onSubmit);
  async function onSubmit(event) {
    event.preventDefault();
    let formData = new FormData(form);
    let inputFirstName = formData.get('First');
    let inputLastName = formData.get('Second');
    let number = formData.get('Number');
    let grade = formData.get('Grade');
    console.log(inputFirstName);
    if (inputFirstName === '' || inputLastName === '' || number === '' || grade === '') {
      return alert('All of the fields must be completed!');
    }
   


    let response = await fetch(url, {
      method: 'post',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        firstName: inputFirstName,
        lastName: inputLastName,
        facultyNumber: number,
        grade: grade
      })
    });
    let data = await response.json();
    console.log(data);
    let newRow = document.createElement('tr');
    let firstTd = document.createElement('td');
    firstTd.textContent = inputFirstName;
    newRow.appendChild(firstTd);
    let secondTd = document.createElement('td');
    secondTd.textContent = inputLastName;
    newRow.appendChild(secondTd);
    let thirdTd = document.createElement('td');
    thirdTd.textContent = number;
    newRow.appendChild(thirdTd);
    let forthTd = document.createElement('td');
    forthTd.textContent = grade;
    newRow.appendChild(forthTd);
    bodyTable.appendChild(newRow);


    let response2 = await fetch(url);
    let data2 = await response2.json();
    console.log(data2);
    form.children[0].value = '';
    form.children[1].value = '';
    form.children[2].value = '';
    form.children[3].value = '';

  }

}
attachEvents();