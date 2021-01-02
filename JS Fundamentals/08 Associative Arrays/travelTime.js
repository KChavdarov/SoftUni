function travelTime(input) {
    let offers = {};

    for (const element of input) {
        let [country, town, price] = element.split(' > ');
        price = Number(price);
        if (!offers.hasOwnProperty(country)) {
            offers[country] = {};
        }
        if(!offers[country].hasOwnProperty(town)){
            offers[country][town] = Number.MAX_SAFE_INTEGER;
        }
        if (offers[country][town] > price) {
            offers[country][town] = price;
        }
    }
    let sortedCountries = Object.entries(offers).sort(([keyA, valueA], [keyB, valueB]) => keyA.localeCompare(keyB));
    for (const [country, destination] of sortedCountries) {
        let destinations = [];
        let sortedDestinations = Object.entries(destination).sort(([townA, priceA], [townB, priceB]) => priceA - priceB);
        sortedDestinations.forEach(destination => {
            destinations.push(`${destination[0]} -> ${destination[1]}`);
        });
        let line = `${country} -> ${destinations.join(' ')}`;
        console.log(line);
    }
}
travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
]);