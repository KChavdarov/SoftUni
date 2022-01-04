function orbit([...params]) {
    params.map(Number);
    let [r, c, x, y] = params;
    let map = [];
    for (let i = 0; i < r; i++) {
        map.push([]);
    }

    for (let i = 0; i < r; i++) {
        for (let l = 0; l < c; l++) {
            map[i][l] = Math.max(Math.abs(i - x), Math.abs(l - y)) + 1;
        }
    }
    return map.join("\n");
}
console.log(orbit([4, 4, 0, 0]));