function loadingBar(number) {
    if (number == 100) {
        console.log('100% Complete!');
        console.log(progress(number));
    } else {
        console.log(`${number}% ${progress(number)}`);
        console.log(`Still loading...`);
    }


    function progress(percentage) {
        let progressBar = '..........';
        for (let i = 0; i < Math.floor(percentage / 10); i++) {
            progressBar = progressBar.split('');
            progressBar.pop();
            progressBar.unshift('%');
            progressBar = progressBar.join('');
        }
        return `[${progressBar}]`;
    }
}

loadingBar(90);