function NxN(number) {
    for (let i = 0; i < number; i++){
        console.log(printRow(number));
    }

    function printRow(number) {
        let row = [];
        for (let i = 0; i < number; i++) {
            row.push(number);
        }
        return row.join(' ');
    }
}

NxN(3);