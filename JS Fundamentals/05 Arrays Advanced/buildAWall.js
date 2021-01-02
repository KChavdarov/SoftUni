function buildAWall(arr) {
    let sections = arr.map(Number);
    let dailyConcrete = [];
    let concreteConvert = x => x * 195;
    let price = 1900;

    while (!sections.every(x => x == 30)) {
        let dailyConstruction = 0;
        for (let i = 0; i < sections.length; i++) {
            if (sections[i] < 30) {
                sections[i] += 1;
                dailyConstruction++;
            }
        }
        dailyConcrete.push(concreteConvert(dailyConstruction));
    }
    let cost = dailyConcrete.reduce((agr, curr) => agr + curr) * price;
    console.log(dailyConcrete.join(', '));
    console.log(`${cost} pesos`);
}
buildAWall([21, 25, 28]);