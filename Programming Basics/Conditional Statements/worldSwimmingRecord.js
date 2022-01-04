function worldSwimmingRecord(recordInSeconds, distanceInMeters, timePerMeter) {
    let record = Number(recordInSeconds);
    let distance = Number(distanceInMeters);
    let secondsPerMeter = Number(timePerMeter);
    let timeIvan = distance * secondsPerMeter;
    timeIvan += Math.floor(distanceInMeters / 15) * 12.5;
    let difference = Math.abs(record - timeIvan);
    if (record > timeIvan) {
        console.log(`Yes, he succeeded! The new world record is ${timeIvan.toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${difference.toFixed(2)} seconds slower.`);
    }
}
worldSwimmingRecord(10464, 1500, 20);