function reception(input) {
    input = input.map(Number);
    let students = input.pop();
    let rate = input.reduce((acc, e) => acc + e);
    let hours = 0;

    while (students > 0) {
        hours++;
        if (hours % 4 != 0) {
            students -= rate;
        }
    }
    
    console.log(`Time needed: ${hours}h.`);
}

reception(['1', '2', '3', '45']);
reception(['3', '2', '5', '40']);