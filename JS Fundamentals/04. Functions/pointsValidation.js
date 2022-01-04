function pointsValidation(array) {
    let x1 = array[0];
    let y1 = array[1];
    let x2 = array[2];
    let y2 = array[3];

    console.log(distanceBetween(x1, y1, 0, 0));
    console.log(distanceBetween(x2, y2, 0, 0));
    console.log(distanceBetween(x1, y1, x2, y2));

    function distanceBetween(x1, y1, x2, y2) {
        let length = Math.abs(x2 - x1);
        let width = Math.abs(y2 - y1);
        let distance = Math.sqrt(Math.pow(length, 2) + Math.pow(width, 2));

        if (Number.isInteger(distance)) {
            return (`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
        } else {
            return (`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
        }
    }
}

pointsValidation([3, 0, 0, 4]);