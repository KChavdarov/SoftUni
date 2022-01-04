function suitcasesLoad(input) {
    let index = 0;
    let cargo = Number(input[index]);
    index++;
    let suitcase = input[index];
    index++;
    let count = 0;
    let isOverloaded = false;
    while(suitcase != "End"){
        count ++;
        if (count % 3 == 0){
            suitcase *= 1.1;
        }
        cargo -= suitcase;
        if(cargo < 0){
            isOverloaded = true;
            count --;
            break;
        }
        suitcase = input[index];
        index++;
    }
    if(isOverloaded){
        console.log("No more space!");
    } else {
        console.log("Congratulations! All suitcases are loaded!");
    }
    console.log(`Statistic: ${count} suitcases loaded.`);
}

suitcasesLoad([550,100,252,72,"End"]);
suitcasesLoad([700.5,180,340.6,126,220]);