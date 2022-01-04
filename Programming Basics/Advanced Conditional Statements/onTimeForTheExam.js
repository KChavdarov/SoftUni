function onTimeForTheExam(arg1, arg2, arg3, arg4) {
    let startHoursExam = Number(arg1);
    let startMinutesExam = Number(arg2);
    let arriveHours = Number(arg3);
    let arriveMinutes = Number(arg4);

    let examTimeInMinutes = startHoursExam * 60 + startMinutesExam;
    let studentTimeInMinutes = arriveHours * 60 + arriveMinutes;

    let differenceTime = examTimeInMinutes - studentTimeInMinutes;
    let positiveDifference = Math.abs(differenceTime);

    let hours = Math.floor(positiveDifference / 60);
    let minutes = positiveDifference % 60;

    if (differenceTime < 0) {
        console.log("Late");
        if (hours == 0) {
            console.log(`${minutes} minutes after the start`);
        } else {
            if (minutes < 10) {
                console.log(`${hours}:0${minutes} hours after the start`);
            } else {
                console.log(`${hours}:${minutes} hours after the start`);
            }
        }
    } else if (differenceTime <= 30) {
        console.log("On time");
        if (minutes !== 0) {
            console.log(`${minutes} minutes before the start`);
        }
    } else {
        console.log("Early");
        if (hours === 0) {
            console.log(`${minutes} minutes before the start`);
        } else {
            if (minutes < 10) {
                console.log(`${hours}:0${minutes} hours before the start`);
            } else {
                console.log(`${hours}:${minutes} hours before the start`);
            }
        }
    }
}