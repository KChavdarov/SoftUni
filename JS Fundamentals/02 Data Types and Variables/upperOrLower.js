function upperOrLower (a){
    let code = a.charCodeAt();
    if (code < 97){
        console.log('upper-case');
    } else {
        console.log('lower-case');
    }
}

upperOrLower ('l');