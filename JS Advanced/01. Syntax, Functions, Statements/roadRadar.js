function roadRadar(speed, area) {
    let limits = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20
    };

    let limit = limits[area];
    let delta = speed - limit;
    let status = "";

    if (delta > 40) {
        status = "reckless driving";
    } else if (delta > 20) {
        status = "excessive speeding";
    } else if (delta > 0) {
        status = "speeding";
    }

    if (delta > 0) {
        console.log(`The speed is ${delta} km/h faster than the allowed speed of ${limit} - ${status}`);
    } else {
        console.log(`Driving ${speed} km/h in a ${limit} zone`);
    }
}

roadRadar(40, "city");
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway');