function personalTitlesIf(ageAsString,genderAsString){
    let age = Number(ageAsString);
    let gender = genderAsString;

    if (gender == "m"){
        if (age < 16){
            console.log("Master");
        } else {
            console.log("Mr.");
        }
    } else if (gender == "f"){
        if (age < 16){
            console.log("Miss");
        } else {
            console.log("Ms.");
        }
    }
}

personalTitlesIf("15","f");

function personalTitlesSw(ageAsString,genderAsString){
    let age = Number(ageAsString);
    let gender = genderAsString;

    switch (gender){
        case "m": {
            if (age < 16){
                console.log("Master");
            } else {
                console.log("Mr.");
            }
        } break;
        case "f": {
            if (age < 16){
                console.log("Miss");
            } else {
                console.log("Ms.");
            }
        } break;
    }
}