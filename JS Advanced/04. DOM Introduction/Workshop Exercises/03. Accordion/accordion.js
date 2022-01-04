function toggle() {
    let actions = {
        More(ref) {
            ref.textContent = 'Less';
            let extra = document.getElementById('extra');
            extra.style.display = 'block';
        },
        Less(ref) {
            ref.textContent = 'More';
            let extra = document.getElementById('extra');
            extra.style.display = 'none';
        }
    };

    let action = document.querySelector('.head .button');
    let state = action.textContent;
    actions[state](action);
}