function validate() {
    let emailInput = document.getElementById('email');
    emailInput.addEventListener('change', validateEmail);

    function validateEmail() {
        let validator = /^([a-z]+@[a-z]+\.[a-z]+)$/;
        if (validator.test(emailInput.value)) {
            emailInput.classList.remove('error');
        } else {
            emailInput.classList.add('error');
        }
    }
}