function gladiatorExpenses(lostCount, helmPrice, swordPrice, shieldPrice, armorPrice) {
    let helmCost = Math.trunc(lostCount / 2) * helmPrice;
    let swordCost = Math.trunc(lostCount / 3) * swordPrice;
    let shieldCost = Math.trunc(lostCount / 6) * shieldPrice;
    let armorCost = Math.trunc(lostCount / 12) * armorPrice;
    let totalCost = helmCost + swordCost + shieldCost + armorCost;
    console.log(`Gladiator expenses: ${totalCost.toFixed(2)} aureus`);
}

gladiatorExpenses(7,2,3,4,5);