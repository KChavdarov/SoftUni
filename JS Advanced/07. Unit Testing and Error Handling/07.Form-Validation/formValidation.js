function validate() {
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');
    const company = document.getElementById('company');
    const submit = document.getElementById('submit');
    const companyInfo = document.getElementById('companyInfo');
    const companyNumber = document.getElementById('companyNumber');
    const valid = document.getElementById('valid');

    company.addEventListener('change', companyInput);
    function companyInput() {
        company.checked
            ? companyInfo.style.display = 'block'
            : companyInfo.style.display = 'none';
    }

    submit.addEventListener('click', validateInputs);
    function validateInputs(event) {
        event.preventDefault();
        let isValid = true;
        const usernameValidator = /^[A-Za-z0-9]{3,20}$/;
        const passwordValidator = /^\w{5,15}$/;
        const emailValidator = /^.*@.*\..*$/;
        const companyValidator = /^[1-9][0-9][0-9][0-9]$/;

        testInput(username, usernameValidator);
        testInput(email, emailValidator);
        if (passwordMatch()){
            testInput(password, passwordValidator);
            testInput(confirmPassword, passwordValidator);
        }
        if (company.checked) {
            testInput(companyNumber, companyValidator);
        }
        if (isValid) {
            valid.style.display = 'block';
        } else {
            valid.style.display = 'none';
        }
        function testInput(input, validator) {
            if (!validator.test((input.value)) || input.value == '') {
                isValid = false;
                input.style.borderColor = 'red';
            } else {
                input.style.borderColor = '';
            }
        }
        function passwordMatch() {
            if (password.value !== confirmPassword.value) {
                isValid = false;
                password.style.borderColor = 'red';
                confirmPassword.style.borderColor = 'red';
                return false;
            } else {
                password.style.borderColor = 'none';
                confirmPassword.style.borderColor = 'none';
                return true;
            }
        }
    }
}