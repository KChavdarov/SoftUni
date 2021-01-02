function lastKSequence(n, k) {
    let result = [1];

    for (let i = 1; i < n; i++) {
        result.push(sumLastK(result, k));
    }
    console.log(result.join(' '));

    function sumLastK(array, k) {
        let newElement = 0;
        let partialArr = array.slice(-k);
        for (const element of partialArr) {
            newElement += element;
        }
        return newElement;
    }
}
lastKSequence(8, 2);