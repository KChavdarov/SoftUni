function timeplus15minutes(hr, min) {
    let hours = Number(hr);
    let minutes = Number(min) + 15;
    if (minutes >= 60) {
        hours += 1;
        minutes -= 60;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (hours > 23) {
        hours -= 24;
    }
    console.log(`${hours}:${minutes}`);
}

timeplus15minutes(23, 55);