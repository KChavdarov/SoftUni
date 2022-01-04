function validityChecker(x1, y1, x2, y2) {
    console.log(`{${x1}, ${y1}} to {0, 0} is ${measureDistance(x1, y1, 0, 0)}`);
    console.log(`{${x2}, ${y2}} to {0, 0} is ${measureDistance(x2, y2, 0, 0)}`);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${measureDistance(x1, y1, x2, y2)}`);

    function measureDistance(x1, y1, x2, y2) {
        let distance = Math.sqrt(((x1 - x2) ** 2) + ((y1 - y2) ** 2));
        if (distance % 1 === 0) {
            return "valid";
        } else {
            return "invalid";
        }
    }
}
validityChecker(3, 0, 0, 4);
validityChecker(2, 1, 1, 1);