function sumSeconds(athlete1, athlete2, athlete3) {
    let timeFirst = Number(athlete1);
    let timeSecond = Number(athlete2);
    let timeThird = Number(athlete3);
    let totalTime = timeFirst + timeSecond + timeThird;
    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;
    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`);
    } else {
        console.log(`${minutes}:${seconds}`);

    }
}

sumSeconds(35, 45, 10);