function dune(yield) {
    let day = 0;
    let storage = 0;
    while (yield >= 100) {
        day++;
        storage += yield;
        storage -= 26;
        yield -= 10;
    }
    storage -= Math.min(26, storage);
    console.log(day);
    console.log(storage);
}