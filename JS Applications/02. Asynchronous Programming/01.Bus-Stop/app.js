const stopId = document.getElementById('stopId');
const busesUl = document.getElementById('buses');
const stopName = document.getElementById('stopName');

function getInfo() {
    let url = `http://localhost:3030/jsonstore/bus/businfo/${stopId.value}`;
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json()
        })
        .then(displayInfo)
        .catch(error => {
            console.error(error);
            busesUl.textContent = '';
            stopName.textContent = 'Error';
        })
}

function displayInfo({ name, buses }) {
    busesUl.textContent = '';
    stopName.textContent = name;
    Object.entries(buses).forEach(createBusLi);
}

function createBusLi([busId, time]) {
    let item = document.createElement('li');
    item.textContent = `Bus ${busId} arrives in ${time}`
    busesUl.appendChild(item)
    return item;
}


// function getInfo() {
//     fetch(`http://localhost:3030/jsonstore/bus/businfo/${stopId.value}`)
//         .then((response) => {
//             if (!response.ok) {
//                 throw new Error(response.statusText);
//             }
//             return response.json();
//         })
//         .then(showStopInfo)
//         .catch((error) => {
//             console.log(error);
//             busesUl.textContent = '';
//             stopName.textContent = 'Error';
//         });
// }

// function showStopInfo(data) {
//     busesUl.textContent = '';
//     stopName.textContent = data.name;
//     Object.entries(data.buses).forEach(([busId, time]) => {
//         const newLi = document.createElement('li');
//         newLi.textContent = `Bus ${busId} arrives in ${time} minutes`;
//         busesUl.appendChild(newLi);
//         stopId.value = '';
//     });
// }