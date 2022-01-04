async function getInfo() {

    const id = document.getElementById('stopId');
    const url = 'http://localhost:3030/jsonstore/bus/businfo/' + id.value;
    const ulBuses = document.getElementById('buses');
    ulBuses.innerHTML = ''
    const stopName = document.getElementById('stopName');
    stopName.textContent = '';

    try {
        const request = await fetch(url);
        const data = await request.json();

        Object.entries(data.buses).map(([bus, time]) => {
            let newEl = document.createElement('li');
            newEl.textContent = `Bus ${bus} arrives in ${time} minutes`;
            ulBuses.appendChild(newEl);
            stopName.textContent = data.name;

        })
        id.value = ''

    } catch (error) {
        stopName.textContent = 'Error';
    }

} 