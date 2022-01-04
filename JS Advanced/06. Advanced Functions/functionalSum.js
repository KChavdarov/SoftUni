function add(a) {
    let sum = 0;
    sum += a;

    function addB(b) {
        sum += b;
        return addB;
    }

    return addB;
}

console.log(add(1)(6)(-3));