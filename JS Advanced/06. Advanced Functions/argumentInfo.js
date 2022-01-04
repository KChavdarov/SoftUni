function argumentInfo(...params) {
    let tally = {};
    params.forEach(arg => determineType(arg));
    printTally();

    function printTally() {
        let sorted = Object.entries(tally).sort((a, b) => b[1] - a[1]);
        sorted.forEach(([type, count]) => console.log(`${type} = ${count}`));
    }

    function determineType(arg) {
        let type = typeof arg;
        count();
        console.log(`${type}: ${arg == undefined ? 'undefined' : arg.toString()}`);

        function count() {
            if (tally[type] == undefined) {
                tally[type] = 0;
            }
            tally[type]++;
        }
    }
}

argumentInfo(42, 'cat', [], undefined);