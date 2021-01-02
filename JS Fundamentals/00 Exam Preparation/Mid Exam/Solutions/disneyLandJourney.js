function journey(input) {
    let [vacation, months] = input;
    let savings = 0;
    for (let month = 1; month <= months; month++) {
        if (month % 2 == 1) {
            savings *= 0.84;
        } else if (month % 4 == 0) {
            savings *= 1.25;
        }
        savings += 0.25 * vacation;
    }
    let delta = Math.abs(vacation - savings).toFixed(2);
    if (savings >= vacation){
        console.log(`Bravo! You can go to Disneyland and you will have ${delta}lv. for souvenirs.`);
    } else {
        console.log(`Sorry. You need ${delta}lv. more.`);
    }
}
journey([1000, 4]);