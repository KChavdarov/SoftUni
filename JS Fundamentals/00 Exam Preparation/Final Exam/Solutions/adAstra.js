function adAstra([input]) {
    let pattern = /([#|])(?<item>[A-Za-z\s]+)\1(?<date>(?<day>\d{2})\/(?<month>\d{2})\/(?<year>\d{2}))\1(?<calories>\d{1,5})\1/gm;
    let matched = pattern.exec(input);
    let inventory = [];
    totalCalories = 0;
    while (matched != null) {
        let item = matched.groups.item;
        let date = matched.groups.date;
        let calories = matched.groups.calories;
        inventory.push(`Item: ${item}, Best before: ${date}, Nutrition: ${calories}`);
        totalCalories += Number(calories);
        matched = pattern.exec(input);
    }
    let days = Math.floor(totalCalories / 2000);
    console.log(`You have food to last you for: ${days} days!`);
    console.log(inventory.join("\n"));
}
adAstra([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
]);
adAstra([
    '$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|'
  ]);
  adAstra(['Hello|#Invalid food#19/03/20#450|$5*(@' ]);