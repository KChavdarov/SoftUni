function attachGradientEvents() {
    let box = document.getElementById('gradient');
    let result = document.getElementById('result');
    box.addEventListener('mousemove', quantify);
    box.addEventListener('mouseout', e => result.textContent = '');

    function quantify(event) {
        let percentage = Math.floor(event.offsetX / (event.target.clientWidth - 1) * 100);
        result.textContent = `${percentage}%`;
    }
}