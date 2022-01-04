
function attachEvents() {
    //select button
    document.getElementById('submit').addEventListener('click',getWeather)
    //attach event

}

attachEvents();


//function get forecast

async function getWeather() {
    try {

        //delete old forecast
        document.getElementsByClassName('label')[0].textContent = 'Current conditions'
        if(document.getElementsByClassName('forecasts')[0]) {
            document.getElementsByClassName('forecasts')[0].remove()
            document.getElementsByClassName('forecast-info')[0].remove()
         }

    const input = document.getElementById('location');
    const cityName = input.value;

    
    const code = await getCode(cityName);
    
    
    const [current, upcoming] = await Promise.all([
        getCurrent(code),
        threeDays(code)
        ]);
    


    const currCond = current.forecast.condition;
    const currHigh = current.forecast.high;
    const currLow = current.forecast.low;
    const currName = current.name;

    const day1 = upcoming.forecast[0];
    const day2 = upcoming.forecast[1];
    const day3 = upcoming.forecast[2];
  

    
    const divForecast = document.getElementById('forecast');
    divForecast.style.display = "block";

    const condition = {Sunny:'☀', 'Partly sunny':'⛅', Overcast:'☁', Rain:'☂',};

    

     
    
    // add new forecast
    const oneDayElement = forecastHTML(currName,condition[currCond] ,`${currLow}°/${currHigh}°`,currCond)
    document.getElementById('current').appendChild(oneDayElement)

    document.getElementById('upcoming').appendChild(upcomingFirst(condition[day1.condition],`${day1.low}°/${day1.high}°` ,day1.condition));
    document.getElementsByClassName('forecast-info')[0].appendChild(upcomingNext(condition[day2.condition],`${day2.low}°/${day2.high}°` ,day2.condition));
    document.getElementsByClassName('forecast-info')[0].appendChild(upcomingNext(condition[day3.condition],`${day3.low}°/${day3.high}°` ,day3.condition));
    

    


} catch (error) {
    
    const errEl= e('div',{},"Error")
    document.getElementsByClassName('label')[0].appendChild(errEl);
    
}
}

function forecastHTML(name, symbol,temperature ,condition) {
    const elAY=e('div', {className: 'forecasts'},
        e('span',{className: 'condition symbol'}, symbol),
        e('span', {className: 'condition'}, 
            e('span',{className:'forecast-data'},name), 
            e('span',{className:'forecast-data'}, temperature),
            e('span',{className:'forecast-data'}, condition)))

    return elAY

}

function upcomingFirst(symbol,temperature ,condition) {
    const elAY=e('div', {className: 'forecast-info'},
        e('span', {className: 'upcoming'},
            e('span',{className: 'symbol'}, symbol),
            e('span',{className:'forecast-data'}, temperature),
            e('span',{className:'forecast-data'}, condition)))

    return elAY
}

function upcomingNext(symbol,temperature ,condition) {
    const elAY=e('span', {className: 'upcoming'},
                    e('span',{className: 'symbol'}, symbol),
                    e('span',{className:'forecast-data'}, temperature),
                    e('span',{className:'forecast-data'}, condition))

    return elAY
}



//read input field and make GET to get the code

async function getCode(cityName) {
    const url = 'http://localhost:3030/jsonstore/forecaster/locations'

    const response = await fetch(url);
    const data = await response.json();

    return data.find(x =>x.name.toLowerCase() == cityName.toLowerCase()).code 
    
}

//new GET wiht the code for today forecast

async function getCurrent(code) {
    const url = 'http://localhost:3030/jsonstore/forecaster/today/'+code;
    
    const response = await fetch(url);
    const data = await response.json();

    return data;
}
//new GET with the code for 3 days forecast

async function threeDays (code) {

    const url1 = 'http://localhost:3030/jsonstore/forecaster/upcoming/'+code;
    
    const response = await fetch(url1);
    const data = await response.json();

    return data;
}

//make <div> with ID 'forecast 


function e(type, attributes, ...content) {
    const result = document.createElement(type);

    for (let [attr, value] of Object.entries(attributes || {})) {
        if (attr.substring(0, 2) == 'on') {
            result.addEventListener(attr.substring(2).toLocaleLowerCase(), value);
        } else {
            result[attr] = value;
        }
    }

    content = content.reduce((a, c) => a.concat(Array.isArray(c) ? c : [c]), []);

    content.forEach(e => {
        if (typeof e == 'string' || typeof e == 'number') {
            const node = document.createTextNode(e);
            result.appendChild(node);
        } else {
            result.appendChild(e);
        }
    });

    return result;
}