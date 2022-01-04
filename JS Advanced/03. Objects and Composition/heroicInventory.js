function heroicInventory(arr) {
    let heroInventory = [];
    for (const data of arr) {
        let [name, level, items] = data.split(' / ');
        level = Number(level);
        items = items ? items.split(', ') : [];
        let hero = {
            name,
            level,
            items,
        };
        heroInventory.push(hero);
    }
    return JSON.stringify(heroInventory);
}
console.log(heroicInventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
));