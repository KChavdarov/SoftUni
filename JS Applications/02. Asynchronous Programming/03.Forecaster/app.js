const submitBtn = document.getElementById('submit');
const locName = document.getElementById('location');
const forecastDiv = document.getElementById('forecast');
const currentDiv = document.getElementById('current');
const upcomingDiv = document.getElementById('upcoming');
const symbols = {
    'Sunny': '☀',
    'Partly sunny': '⛅',
    'Overcast': '☁',
    'Rain': '☂',
};

submitBtn.addEventListener('click', getWeatherInfo);

async function getWeatherInfo() {

    async function getLocations() {
        const response = await fetch('http://localhost:3030/jsonstore/forecaster/locations');
        const locations = await response.json();
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return locations;
    }

    let locations = await getLocations();
    let location = locations.find(a => a.name.toLowerCase() == locName.value.toLowerCase());
    console.log(location);


    try {
        //     const response = await fetch('http://localhost:3030/jsonstore/forecaster/locations');
        //     if (!response.ok) {
        //         throw new Error(response.statusText);
        //     }

        //     const locations = await response.json();
        //     console.log(locName.value);
        //     let location = locations.find(a => a.name.toLowerCase() == locName.value.toLowerCase());
        //     console.log(location);
        //     if (location === undefined) {
        //         throw new Error(`${locName.value} data unavailable`);
        //     }

        let [todayFc, upcomingFc] = await Promise.all([
            fetch(`http://localhost:3030/jsonstore/forecaster/today/${location.code}`).then(response => response.json()),
            fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${location.code}`).then(response => response.json())
        ]);

        const currentHeading = createElement('div', ['class=label'], 'Current conditions');
        const forecasts = createElement('div', ['class=forecasts'],
            createElement('span', ['class=condition symbol'], symbols[todayFc.forecast.condition]),
            createElement('span', ['class=condition'],
                createElement('span', ['class=forecast-data'], todayFc.name),
                createElement('span', ['class=forecast-data'], `${todayFc.forecast.low}°/${todayFc.forecast.high}°`),
                createElement('span', ['class=forecast-data'], todayFc.forecast.condition)
            ),
        );

        const upcomingHeading = createElement('div', ['class=label'], 'Three-day forecast');
        const upcoming = createElement('div', ['class=forecast-info'],
            ...upcomingFc.forecast.map(({ low, high, condition }) => {
                return createElement('span', ['class=upcoming'],
                    createElement('span', ['class=symbol'], symbols[condition]),
                    createElement('span', ['class=forecast-data'], `${low}°/${high}°`),
                    createElement('span', ['class=forecast-data'], condition),
                );
            })
        );

        currentDiv.textContent = '';
        currentDiv.appendChild(currentHeading);
        currentDiv.appendChild(forecasts);
        upcomingDiv.textContent = '';
        upcomingDiv.appendChild(upcomingHeading);
        upcomingDiv.appendChild(upcoming);
        forecastDiv.style.display = '';

    } catch (error) {
        forecastDiv.style.display = '';
        currentDiv.textContent = 'Error';
        upcomingDiv.textContent = '';
    }
}

function createElement(type, attributes = [], ...content) {
    const result = document.createElement(type);
    if (attributes.length > 0) {
        attributes.forEach(attr => {
            let [attribute, value] = attr.split('=');
            result.setAttribute(attribute, value);
        });
    } content.forEach(e => {
        if (typeof e == 'string') {
            let text = document.createTextNode(e);
            result.appendChild(text);
        } else {
            result.appendChild(e);
        }
    });
    return result;
}