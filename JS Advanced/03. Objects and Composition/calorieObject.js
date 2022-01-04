function calorieObject(arr) {
    let calories = {};
    for (let i = 1; i < arr.length; i += 2) {
        let key = arr[i - 1];
        let value = arr[i];
        calories[key] = Number(value);
    }
    return calories;
}
console.log(calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']));
