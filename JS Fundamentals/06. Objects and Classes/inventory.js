function inventory(input) {
    class Hero {
        constructor(name, level, items) {
            this.name = name;
            this.level = level;
            this.items = items;
        }
        summarize() {
            console.log(`Hero: ${this.name}`);
            console.log(`level => ${this.level}`);
            let sorted = this.items.sort();
            console.log(`items => ${sorted.join(', ')}`);
        }
    }

    let charecters = [];

    for (const element of input) {
        let charecter = element.split(' / ');
        let name = charecter.shift();
        let level = Number(charecter.shift());
        let items = charecter.shift().split(', ');
        const hero = new Hero(name, level, items);
        charecters.push(hero);
    }

    charecters = charecters.sort((a, b) => a.level - b.level);
    charecters.forEach(hero => hero.summarize());
}
inventory([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
]);