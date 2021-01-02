function searchForANumber(array, actions) {
    let count = actions[0];
    let remove = actions[1];
    let number = actions[2];

    let result = array.slice(0, count);
    result.splice(0, remove);
    let occurances = result.filter(a => a == number).length;
    console.log(`Number ${number} occurs ${occurances} times.`);
}
searchForANumber([5, 2, 3, 4, 1, 6],
    [5, 2, 3]
);