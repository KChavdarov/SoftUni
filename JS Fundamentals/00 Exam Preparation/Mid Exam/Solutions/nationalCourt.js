function nationalCourt(input) {
    let queue = input.pop();
    let efficiency = input.map(Number).reduce((p, c) => p + c);
    let hours = 0;

    while (queue > 0) {
        hours++;
        if (hours % 4 == 0) {
            hours++;
        }
        queue -= efficiency;
    }
    console.log(`Time needed: ${hours}h.`);
}
nationalCourt(['5', '6', '4', '20']);
nationalCourt([ '1', '2', '3', '45' ]);
nationalCourt([ '3', '2', '5', '40' ]);