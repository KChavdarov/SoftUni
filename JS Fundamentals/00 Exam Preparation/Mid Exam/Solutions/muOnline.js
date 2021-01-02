function muOnline(input) {
    let rooms = input.split('|');
    let health = 100;
    let bitcoins = 0;
    let isDead = false;
    let roomCount = 0;

    for (const room of rooms) {
        let action = room.split(' ')[0];
        let value = Number(room.split(' ')[1]);
        roomCount++;

        switch (action) {
            case 'potion':
                let heal = Math.min(value, 100 - health);
                health += heal;
                console.log(`You healed for ${heal} hp.`);
                console.log(`Current health: ${health} hp.`);
                break;
            case 'chest':
                console.log(`You found ${value} bitcoins.`);
                bitcoins += value;
                break;
            default:
                let monster = action;
                health -= value;
                if (health > 0) {
                    console.log(`You slayed ${monster}.`);
                } else {
                    isDead = true;
                    console.log(`You died! Killed by ${monster}.`);
                    console.log(`Best room: ${roomCount}`);
                }
        }
        if (isDead) {
            break;
        }
    }
    if (!isDead) {
        console.log(`You've made it!`);
        console.log(`Bitcoins: ${bitcoins}`);
        console.log(`Health: ${health}`);
    }
}
// muOnline('rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000');
muOnline('cat 10|potion 30|orc 10|chest 10|snake 25|chest 110');