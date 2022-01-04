function lockedProfile() {
    let profiles = Array.from(document.querySelectorAll('div.profile'));
    profiles.map(profile => profile.querySelector('button').addEventListener('click', toggleInfo));

    function toggleInfo(event) {
        let button = event.target;
        let lock = button.parentElement.querySelector('input[type="radio"]:checked').value;
        if (lock == 'unlock') {
            let hidden = button.parentElement.querySelector('div');
            if (button.textContent == 'Show more') {
                hidden.style.display = 'block';
                button.textContent = 'Hide it';
            } else if (button.textContent == 'Hide it') {
                hidden.style.display = 'none';
                button.textContent = 'Show more';
            }
        }
    }
}