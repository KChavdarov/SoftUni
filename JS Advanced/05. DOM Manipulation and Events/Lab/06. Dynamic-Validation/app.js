function validate() {
    let input = document.getElementById('email');

    input.addEventListener('change', validateEmail);

    function validateEmail(event) {
        let validator = /[a-z]+\@[a-z]+\.[a-z]+/;
        if (validator.test(event.target.value)) {
            event.target.classList.remove('error');
        } else {
            event.target.classList.add('error');
        }
    }
}