function ages(input) {
    let age = Number(input);
    let category = "";
    if (age >= 66) {
        category = "elder";
    } else if (age > 19) {
        category = "adult";
    } else if (age > 13) {
        category = "teenager";
    } else if (age > 2) {
        category = "child";
    } else if (age >= 0) {
        category = "baby";
    } else {
        category = "out of bounds";
    }
    console.log(category);
}