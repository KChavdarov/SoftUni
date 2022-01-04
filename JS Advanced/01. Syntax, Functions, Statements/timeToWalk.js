function timeToWalk(steps, footprint, speed) {
    speed *= 1000 / 3600;
    let distance = steps * footprint;
    let rests = Math.floor(distance / 500);
    let time = (distance / speed) + (rests * 60);
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor((time - hours * 3600) / 60);
    let seconds = time % ((hours * 3600) + (minutes * 60));

    hours = (hours + "").padStart(2, "0");
    minutes = (minutes + "").padStart(2, "0");
    seconds = (seconds.toFixed()).padStart(2, "0");

    console.log(`${hours}:${minutes}:${seconds}`);
}
timeToWalk(4000, 0.6, 5);
timeToWalk(2564, 0.70, 5.5);

/*
function timeToWalk(steps, footprint, speed) {
    let distance = steps * footprint / 1000;
    let rests = Math.floor(distance * 2);
    let time = (distance / speed) + (rests / 60);
    let hours = Math.floor(time);
    let seconds = (time - hours) * 60 * 60;
    let minutes = Math.floor(seconds / 60);
    seconds = seconds % 60;

    hours = (hours + "").padStart(2, "0");
    minutes = (minutes + "").padStart(2, "0");
    seconds = (seconds.toFixed()).padStart(2, "0");

    console.log(`${hours}:${minutes}:${seconds}`);
}
timeToWalk(4000, 0.6, 5);
timeToWalk(2564, 0.70, 5.5);
*/