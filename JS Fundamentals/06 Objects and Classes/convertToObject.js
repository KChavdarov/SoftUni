function convert(string) {
    let person = JSON.parse(string);

    for (const key of Object.keys(person)) {
        let value = person[key];
        console.log(`${key}: ${value}`);
    }
}
convert('{"name": "George", "age": 40, "town": "Sofia"}');