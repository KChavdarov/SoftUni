function speedInfo(velocity) {
    let speed = Number(velocity);
    if (speed > 1000) {
        console.log("extremely fast");
    } else if (speed > 150) {
        console.log("ultra fast");
    } else if (speed > 50) {
        console.log("fast");
    } else if (speed > 10) {
        console.log("average");
    } else {
        console.log("slow");
    }
}