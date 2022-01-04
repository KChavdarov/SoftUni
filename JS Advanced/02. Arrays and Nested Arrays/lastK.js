function lastK(n, k) {
    let result = [1];
    for (let i = 1; i < n; i++) {
        let elements = result.slice(-k)
        element = elements.reduce((a, c) => a + c, 0);
        result.push(element);
    }
    return result;
}
console.log(lastK(8, 2));