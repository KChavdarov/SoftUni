function juiceFlavors(arr) {
    const result = new Map();
    const totalBottles = new Map();
    const data = arr.map(a => a.split(' => '));
    data.forEach(([flavor, amount]) => {
        if (result.has(flavor)) {
            result.set(flavor, result.get(flavor) + Number(amount));
        } else {
            result.set(flavor, Number(amount));
        }
        let newBottles = Math.trunc(result.get(flavor) / 1000);
        if (newBottles > 0) {
            if (totalBottles.has(flavor)) {
                totalBottles.set(flavor, totalBottles.get(flavor) + newBottles);
            } else {
                totalBottles.set(flavor, newBottles);
            }
            result.set(flavor, result.get(flavor) - newBottles * 1000);
        }
    });
    return Array.from(totalBottles.entries()).map(([flavor, bottles]) => `${flavor} => ${bottles}`).join('\n');
}

console.log(juiceFlavors(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']
));