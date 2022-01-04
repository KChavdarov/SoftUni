function concatenateData (fName, lName, sAge, incomeTown){
    let firstName = fName;
    let lastName = lName;
    let age = Number(sAge);
    let town = incomeTown;

    console.log(`You are ${firstName} ${lastName}, a ${age}-years old person from ${town}.`);
}
concatenateData("Kiril", "Ivanov", "28", "Vratsa")