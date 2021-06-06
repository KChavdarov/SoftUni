const container = document.getElementById('card-container');

container.addEventListener('click', (event) => {
    if (event.target.classList.contains('more')) {
        const button = event.target;
        const info = button.parentNode.querySelector('.cube-info');

        if (info.style.display == 'block') {
            button.textContent = 'Hide';
            info.style.display = 'none';
        } else {
            button.textContent = 'See more';
            info.style.display = 'block';
        }
    }
});