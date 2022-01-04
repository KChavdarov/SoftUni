function cooking(number, ...commands) {
    let actions = {
        chop: (a) => a / 2,
        dice: (a) => Math.sqrt(a),
        spice: (a) => a + 1,
        bake: (a) => a * 3,
        fillet: (a) => a * 0.8
    };
    number = Number(number);
    for (const command of commands) {
        number = actions[command](number);
        console.log(number);
    }
}
cooking('32', 'chop', 'chop', 'chop', 'chop', 'chop');