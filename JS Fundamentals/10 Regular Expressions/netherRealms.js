function netherRealms(input) {
    let participants = {};
    input = input[0].split(/[, ]+/g);
    input.sort((a, b) => a.localeCompare(b));

    for (const demon of input) {
        participants[demon] = {};
        let health = 0;
        let healthPattern = /[^\d-+*/.]/g;
        if (healthPattern.test(demon)) {
            demon.match(healthPattern).forEach(char => {
                health += char.charCodeAt();
            });
        }
        participants[demon].health = health;
        let damage = 0;
        let damagePattern = /[+-]?\d+(\.\d+)?/g;
        if (damagePattern.test(demon)) {
            damage = demon.match(damagePattern);
            damage = Number(damage.reduce((a, b) => Number(a) + Number(b)));
        }
        let multiplierPattern = /[*/]/g;
        if (multiplierPattern.test(demon)) {
            demon.match(multiplierPattern).forEach(char => {
                if (char == '*') {
                    damage *= 2;
                } else {
                    damage /= 2;
                }
            });
        }
        participants[demon].damage = damage;
    }
    for (const demon of Object.keys(participants)) {
        let health = participants[demon].health;
        let damage = participants[demon].damage;
        console.log(`${demon} - ${health} health, ${damage.toFixed(2)} damage`);
    }
}
netherRealms(['1, M3ph1st0**, Azazel, M3ph-0.5s-0.5t0.0**']);