function passwordValidator(password) {
    let isValid = true;

    if (!lengthValidator(password)) {
        console.log('Password must be between 6 and 10 characters');
    }
    if (!charecterValidator(password)) {
        console.log('Password must consist only of letters and digits');
    }
    if (!numberCountValidator(password)) {
        console.log('Password must have at least 2 digits');
    }


    if (lengthValidator(password) && charecterValidator(password) && numberCountValidator(password)) {
        console.log('Password is valid');
    }

    function lengthValidator(password) {
        let lengthValid = true;
        if (password.length < 6 || password.length > 10) {
            lengthValid = false;
        }
        return lengthValid;
    }

    function charecterValidator(password) {
        let charValid = true;
        for (const charecter of password) {
            let code = charecter.charCodeAt();
            if (code < 48) {
                charValid = false;
                break;
            } else if (code > 57 && code < 65) {
                charValid = false;
                break;
            } else if (code > 90 && code < 97) {
                charValid = false;
                break;
            } else if (code > 122) {
                charValid = false;
                break;
            }
        }
        return charValid;
    }

    function numberCountValidator(password) {
        let numberValid = true;
        let numbercount = 0;
        for (const charecter of password) {
            let code = charecter.charCodeAt();
            if (code >= 48 && code <= 57) {
                numbercount++;
            }
        }
        if (numbercount < 2) {
            numberValid = false;
        }
        return numberValid;
    }
}

passwordValidator('logIn');