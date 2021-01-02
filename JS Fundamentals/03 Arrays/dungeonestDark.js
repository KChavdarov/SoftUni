function dungeonestDark(str) {
    let health = 100;
    let coins = 0;
    let arr = str[0].split('|');
    let roomCount = 0;
    let isDead = false;

    for (const room of arr) {
        roomCount++;
        let content = room.split(' ');
        switch (content[0]) {
            case 'potion':
                let heal = Math.min(100, health + Number(content[1])) - health;
                health = health + heal;
                console.log(`You healed for ${heal} hp.`);
                console.log(`Current health: ${health} hp.`);
                break;
            case 'chest':
                coins += Number(content[1]);
                console.log(`You found ${content[1]} coins.`);
                break;
            default: 
                if (health - content[1] <= 0){
                    isDead = true;
                    console.log(`You died! Killed by ${content[0]}.`);
                    console.log(`Best room: ${roomCount}`);
                } else {
                    health -= content[1];
                    console.log(`You slayed ${content[0]}.`);
                }
                break;
        }
        if (isDead == true){
            break;
        }
    }
    if (!isDead){
        console.log(`You've made it!`);
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}

dungeonestDark(['rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000']);