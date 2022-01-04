function numbers100to200 (arg) {
    let value = Number(arg);
    if (value > 200) {
        console.log ("Greater than 200");
    } else if (value >= 100) {
        console.log ("Between 100 and 200");
    } else {
        console.log ("Less than 100");
    }
}

numbers100to200 (200);