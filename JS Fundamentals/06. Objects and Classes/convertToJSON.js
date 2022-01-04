function convert(name,lastName,hairColor) {
    let person = {
        name,
        lastName,
        hairColor
    }
    return JSON.stringify(person);
}
console.log(convert('George', 'Jones','Brown'));