function attachEvents() {
    document.getElementById('submit').addEventListener('click', getWeather)
}

attachEvents();

const symbolBank = {
    "Sunny": '&#x2600',
    "Partly sunny": '&#x26C5',
    "Overcast": '&#x2601',
    "Rain": '&#x2614',
    "Degrees": '&#176',
}

async function getWeather() {
    const input = document.getElementById('location');
    const cityName = input.value;

    let forecastDiv = document.getElementById('forecast');

    try {
        let cityCode = await getCode(cityName);
        const [current, upcoming] = await Promise.all([
            await getCurrent(cityCode),
            await getUpcoming(cityCode),
        ])
        forecastDiv.style.display = 'block';

        //Create current weather
        const divCurrentWeather = document.getElementById('current');
        divCurrentWeather.innerHTML = '';

        let currentDivContainer = document.createElement('div');
        currentDivContainer.className = 'forecasts';

        let conditionSpan = createSpan('condition')

        let degreesContent = `${current.forecast.low}${symbolBank['Degrees']}/${current.forecast.high}${symbolBank['Degrees']}`;
        let degreesSpan = createSpan('forecast-data', degreesContent);

        conditionSpan.appendChild(createSpan('forecast-data', current.name));
        conditionSpan.appendChild(degreesSpan);
        conditionSpan.appendChild(createSpan('forecast-data', current.forecast.condition));

        currentDivContainer.appendChild(createSpan('condition symbol', symbolBank[current.forecast.condition]));
        currentDivContainer.appendChild(conditionSpan);

        divCurrentWeather.appendChild(currentDivContainer);

        //Create upcomming weather
        const divUpcommingWeather = document.getElementById('upcoming');
        divUpcommingWeather.innerHTML = '';

        let upcommingDivContainer = document.createElement('div');
        upcommingDivContainer.className = 'forecast-info';

        upcoming.forecast.map(x => {
            let containerSpan = createSpan('upcoming');

            let degreesContent = `${x.low}${symbolBank['Degrees']}/${x.high}${symbolBank['Degrees']}`;
            let degreesSpan = createSpan('forecast-data', degreesContent);

            containerSpan.appendChild(createSpan('symbol', symbolBank[x.condition]))
            containerSpan.appendChild(degreesSpan)
            containerSpan.appendChild(createSpan('forecast-data', x.condition));

            upcommingDivContainer.appendChild(containerSpan);
        })

        divUpcommingWeather.appendChild(upcommingDivContainer)
    } catch (e) {
        forecastDiv.style.display = 'block';
        forecastDiv.textContent = 'Error! ' + e.message;
        return;
    }
}

function createSpan(className, textContent) {
    const result = document.createElement('span');
    result.className = className
    if (textContent) {
        result.innerHTML = textContent;
    }
    return result;
}

async function getCode(cityName) {
    let url = `http://localhost:3030/jsonstore/forecaster/locations`;
    let response = await fetch(url);
    let data = await response.json();

    let cityCode = data.find(x => x.name.toLowerCase() === cityName.toLowerCase()).code;

    return cityCode;
}
async function getCurrent(code) {
    let url = `http://localhost:3030/jsonstore/forecaster/today/${code}`;
    let response = await fetch(url);
    let data = await response.json();

    return data;
}
async function getUpcoming(code) {
    let url = `http://localhost:3030/jsonstore/forecaster/upcoming/${code}`;
    let response = await fetch(url);
    let data = await response.json();

    return data;
}