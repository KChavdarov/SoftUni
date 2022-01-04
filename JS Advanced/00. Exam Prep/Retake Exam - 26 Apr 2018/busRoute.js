function busRoute() {
    const busStops = Array.from(document.getElementById('bus-stops').children);
    const firstStop = document.querySelector('input[name="first-stop"]');
    const lastStop = document.querySelector('input[name="last-stop"]');
    const enterBtn = document.querySelector('#enter-stops button');
    const routeTitle = document.querySelector('#selected-route span');
    const route = document.getElementById('selected-bus-stops');

    let firstIndex = Number(firstStop.value) - 1;
    let lastIndex = Number(lastStop.value) - 1;

    if (firstIndex >= 0 && lastIndex > firstIndex && lastIndex < busStops.length) {
        route.textContent = '';
        routeTitle.textContent = `${firstStop.value}-${lastStop.value}`;
        const lis = busStops.slice(firstIndex, lastIndex + 1);
        lis.forEach(li => {
            route.appendChild(li.cloneNode(true));
        });
        firstStop.value = '';
        lastStop.value = '';
    }
}


window.addEventListener('load', () => {
    let busStops = [
        'Gen. Gurko St.',
        'Sofia University',
        'Eagles\' Bridge Sq.',
        'Bulgarian News Agency',
        'Peyo Yavorov Blvd.',
        'Aleksandar Zhendov Bvld.',
        // You can add/remove bus stops from here
    ];


    let listBusStops = document.getElementById('bus-stops');
    // console.log(listBusStops);

    for (let i = 0; i < busStops.length; i++) {
        const busStopLi = document.createElement('li');
        busStopLi.textContent = busStops[i];
        listBusStops.appendChild(busStopLi);
    }
});