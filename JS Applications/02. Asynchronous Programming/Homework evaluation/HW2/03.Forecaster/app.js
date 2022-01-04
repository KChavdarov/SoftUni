function solve() {

    let button = document.getElementById("submit");

    button.addEventListener("click", attachEvents);

}

solve();

async function attachEvents() {

    let input = document.getElementById("location");
    let place = input.value;

    console.log();

    const locationOfCity = await getByLocationName(place);

    const today = await getCurrentConditions(locationOfCity.code);

    const upcoming = await get3DaysForecast(locationOfCity.code);


    let divforecast = document.getElementById("forecast");
    divforecast.style.display = "block";

    let divForecast = document.createElement("div");
    divForecast.setAttribute("class", "forecasts");

    let divCurrent = document.getElementById("current");
    let span1 = document.createElement("span");
    span1.setAttribute("class", "condition symbol");

    let symbols = "";
    let degrees = "&#176"

    switch (today.forecast.condition) {
        case "Sunny":
            symbols = "&#x2600"
            break;
        case "Partly sunny":
            symbols = "&#x26C5"
            break;
        case "Overcast":
            symbols = "&#x2601"
            break;
        case "Rain":
            symbols = "&#x2614"
            break;

    }

    span1.innerHTML = symbols;

    let span2 = document.createElement("span");
    span2.setAttribute("class", "condition");

    let span3 = document.createElement("span");
    span3.setAttribute("class", "forecast-data");
    span3.textContent = today.name;

    let span4 = document.createElement("span");
    span4.setAttribute("class", "forecast-data");
    span4.innerHTML = `${today.forecast.low + degrees}/${today.forecast.high + degrees}`

    let span5 = document.createElement("span");
    span5.setAttribute("class", "forecast-data");
    span5.textContent = today.forecast.condition;

    divForecast.appendChild(span1);

    span2.appendChild(span3);
    span2.appendChild(span4);
    span2.appendChild(span5);

    divForecast.appendChild(span2);



    divCurrent.appendChild(divForecast);


    let divUpcoming = document.getElementById("upcoming");



    let divUpInfo = document.createElement("div");
    divUpInfo.setAttribute("class", "forecast-info");

    function createUpcomingSpan(i) {

        let symbol3days = "";

        switch (upcoming.forecast[i].condition) {
            case "Sunny":
                symbol3days = "&#x2600"
                break;
            case "Partly sunny":
                symbol3days = "&#x26C5"
                break;
            case "Overcast":
                symbol3days = "&#x2601"
                break;
            case "Rain":
                symbol3days = "&#x2614"
                break;

        }

        let spanUpcoming = document.createElement("span");
        spanUpcoming.setAttribute("class", "upcoming");

        let spanUpcoming1 = document.createElement("span");
        spanUpcoming1.setAttribute("class", "symbol");
        spanUpcoming1.innerHTML = symbol3days;

        let spanUpcoming2 = document.createElement("span");
        spanUpcoming2.setAttribute("class", "forecast-data");
        spanUpcoming2.innerHTML = `${upcoming.forecast[i].low + degrees}/${upcoming.forecast[i].high + degrees}`
        let spanUpcoming3 = document.createElement("span");
        spanUpcoming3.setAttribute("class", "forecast-data");
        spanUpcoming3.textContent = upcoming.forecast[i].condition;

        spanUpcoming.appendChild(spanUpcoming1);
        spanUpcoming.appendChild(spanUpcoming2);
        spanUpcoming.appendChild(spanUpcoming3);

        return spanUpcoming;


    }


    let spanUp1 = createUpcomingSpan(0);
    let spanUp2 = createUpcomingSpan(1);
    let spanUp3 = createUpcomingSpan(2);



    divUpcoming.appendChild(spanUp1);
    divUpcoming.appendChild(spanUp2);
    divUpcoming.appendChild(spanUp3);




    //console.log(locationOfCity,today,upcoming);


}


async function getByLocationName(name) {
    console.log();
    let urlLocation = "http://localhost:3030/jsonstore/forecaster/locations";
    let responce = await fetch(urlLocation);
    let data = await responce.json();
    let location = data.find(e => e.name.toLowerCase() == name.toLowerCase());
    return location;
}


async function getCurrentConditions(code) {
    let urlCurrConditions = "http://localhost:3030/jsonstore/forecaster/today/";
    let resonseCurCondition = await fetch(urlCurrConditions + code);
    console.log();
    let dataCurCondition = await resonseCurCondition.json();
    return dataCurCondition;
}


async function get3DaysForecast(code) {
    let urlUpcoming = "http://localhost:3030/jsonstore/forecaster/upcoming/";
    let resonseUpComing = await fetch(urlUpcoming + code);
    let dataUpcoming = await resonseUpComing.json();
    return dataUpcoming;
}

