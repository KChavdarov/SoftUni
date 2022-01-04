function toyStore (arg1,arg2,arg3,arg4,arg5,arg6){
    let vacationPrice = Number(arg1);
    let puzzles = Number(arg2);
    let talkingDolls = Number(arg3);
    let teddyBears = Number(arg4);
    let minions = Number(arg5);
    let trucks = Number(arg6);

    let sales = puzzles * 2.6 + talkingDolls * 3 + teddyBears * 4.10 + minions * 8.20 + trucks * 2;
    let toyCount = puzzles + talkingDolls + teddyBears + minions + trucks;
    if (toyCount >= 50) {
        sales = sales * 0.75;
    }
    sales = sales * 0.9;
    let difference = Math.abs(sales - vacationPrice);
    if (sales >= vacationPrice){
        console.log (`Yes! ${difference.toFixed(2)} lv left.`);
    } else {
        console.log (`Not enough money! ${difference.toFixed(2)} lv needed.`);
    }
}

toyStore(40.8,20,25,30,50,10);