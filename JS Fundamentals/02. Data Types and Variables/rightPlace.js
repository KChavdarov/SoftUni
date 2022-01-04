function rightPlace (word, charecter, test){
    let newWord = word.replace('_', charecter);
    if (newWord == test){
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }
}

rightPlace('Str_ng', 'I', 'Strong');
rightPlace('Str_ng', 'o', 'Strong');