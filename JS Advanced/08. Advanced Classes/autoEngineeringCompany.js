function autoEngineeringCompany(input) {
    let result = new Map();
    let productionData = input.map(a => a.split(' | '));

    productionData.forEach(([brand, model, qty]) => {
        if (!result.has(brand)) {
            const element = new Map();
            element.set(model, Number(qty));
            result.set(brand, element);
        } else if (result.get(brand).has(model)) {
            const entry = result.get(brand).get(model);
            result.get(brand).set(model, entry + Number(qty));
        } else if (!result.get(brand).has(model)) {
            result.get(brand).set(model, Number(qty));
        }
    });

    let output = Array.from(result).map(([brand, models]) => {
        return `${brand}\n${Array.from(models).map(([model, qty]) => `###${model} -> ${qty}`).join('\n')}`;
    });
    return output.join('\n');
}

console.log(autoEngineeringCompany(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']
));