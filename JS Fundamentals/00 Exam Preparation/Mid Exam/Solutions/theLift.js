function theLift(arr) {
    let queue = Number(arr[0]);
    let carts = arr[1];
    carts = carts.split(' ');
    let finalLift = [];
    let totalOccupants = 0;
    let maxOccupants = carts.length * 4;

    for (let occupants of carts) {
        occupants = Number(occupants);
        let availableSpace = 4 - occupants;
        let newOccupants = Math.min(availableSpace, queue, 4);
        queue -= newOccupants;
        let cart = newOccupants + occupants;
        totalOccupants += cart;
        finalLift.push(cart);
    }

    if (queue > 0) {
        console.log(`There isn't enough space! ${queue} people in a queue!`);
        console.log(finalLift.join(' '));
    } else {
        if (totalOccupants == maxOccupants) {
            console.log(finalLift.join(' '));
        } else {
            console.log('The lift has empty spots!');
            console.log(finalLift.join(' '));
        }
    }
}

theLift(["15", "0 0 0 0"]);