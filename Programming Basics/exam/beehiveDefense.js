function beehiveDefense(arg1, arg2, arg3) {
    let bees = Number(arg1);
    let health = Number(arg2);
    let attack = Number(arg3);

    let beesAlive = true;
    while (health > 0) {
        bees -= attack;
        if (bees < 100) {
            beesAlive = false;
            break;
        }
        health -= (bees * 5);
    }
    bees = Math.max(0, bees);
    if (beesAlive) {
        console.log(`Beehive won! Bees left ${bees}.`);
    } else {
        console.log(`The bear stole the honey! Bees left ${bees}.`);
    }
}
beehiveDefense(200, 10000, 300);