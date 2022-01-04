function beehiveRole(arg1, arg2, arg3) {
    let intelligence = Number(arg1);
    let strength = Number(arg2);
    let gender = arg3;
    let beeRole = "Worker Bee";

    if (intelligence >= 80) {
        if (strength >= 80 && gender == "female") {
            beeRole = "Queen Bee";
        } else {
            beeRole = "Repairing Bee";
        }
    } else if (intelligence >= 60) {
        beeRole = "Cleaning Bee";
    } else {
        if (strength >= 80) {
            if (gender == "male") {
                beeRole = "Drone Bee";
            } else {
                beeRole = "Guard Bee";
            }
        } else if (strength >= 60) {
            beeRole = "Guard Bee";
        }
    }
console.log(beeRole);
}
beehiveRole()