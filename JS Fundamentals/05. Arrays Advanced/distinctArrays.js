function distinctArrays(array) {
    let distinct = [];
    for (const element of array) {
        if (!distinct.includes(element)){
            distinct.push(element);
        }
    }
    console.log(distinct.join(' '));
}
distinctArrays([7, 8, 9, 7, 2, 3, 4, 1, 2]);
distinctArrays([20, 8, 12, 13, 4, 4, 8, 5]);