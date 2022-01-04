function focus() {
    // let section = document.querySelector('body>div');
    // console.log(section);
    // section.addEventListener('focusin', highlight);
    // section.addEventListener('focusout', reset);

    // function highlight(event) {
    //     if (event.target.nodeName == 'INPUT') {
    //         event.target.parentElement.classList.add('focused');
    //     }
    // }

    // function reset(event) {
    //     if (event.target.nodeName == 'INPUT') {
    //         event.target.parentElement.classList.remove('focused');
    //     }
    // }

    let inputs = Array.from(document.querySelectorAll('div input[type="text"]'));
    inputs.map(input => {
        input.addEventListener('focus', highlight);
        input.addEventListener('blur', reset);
    });


    function highlight(event) {
        (event.target.parentElement).classList.add('focused');
    }

    function reset(event) {
        event.target.parentElement.classList.remove('focused');
    }
}