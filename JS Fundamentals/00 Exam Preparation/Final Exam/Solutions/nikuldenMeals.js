function nikuldenMeals(input) {
    let actions = {
        Like(meals, guest, meal, unlikes) {
            if (!meals.hasOwnProperty(guest)) {
                meals[guest] = new Set();
            }
            if (!meals[guest].has(meal)) {
                meals[guest].add(meal);
            }
            return unlikes;
        },
        Unlike(meals, guest, meal, unlikes) {
            if (!meals.hasOwnProperty(guest)) {
                console.log(`${guest} is not at the party.`);
            } else {
                if (meals[guest].has(meal)) {

                    meals[guest].delete(meal);
                    console.log(`${guest} doesn't like the ${meal}.`);
                    unlikes++;
                } else {
                    console.log(`${guest} doesn't have the ${meal} in his/her collection.`);
                }
            }
            return unlikes;
        }
    };
    let meals = {};
    let unlikes = 0;
    while ((command = input.shift()) != "Stop") {
        let [action, guest, meal] = command.split("-");
        unlikes = actions[action](meals, guest, meal, unlikes);
    }
    let sorted = Object.entries(meals).sort((a, b) => mealSort(a, b));
    for (const [guest, meals] of sorted) {
        console.log(`${guest}: ${Array.from(meals.keys()).join(", ")}`);
    }
    console.log(`Unliked meals: ${unlikes}`);

    function mealSort([guestA, mealsA], [guestB, mealsB]) {
        return mealsB.size - mealsA.size || guestA.localeCompare(guestB);
    }
}
nikuldenMeals([
    "Like-Krisi-shrimps",
    "Like-Krisi-soup",
    "Like-Misho-salad",
    "Like-Pena-dessert",
    "Stop"
]);
console.log("---");
nikuldenMeals([
    "Like-Krisi-shrimps",
    "Unlike-Vili-carp",
    "Unlike-Krisi-salad",
    "Unlike-Krisi-shrimps",
    "Stop"
]);