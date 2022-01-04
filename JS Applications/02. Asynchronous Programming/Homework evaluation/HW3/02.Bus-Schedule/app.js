function solve() {
    const depBtn = document.getElementById('depart');
    const arrBtn = document.getElementById('arrive');
    const info = document.getElementsByClassName('info')[0];
    
    let nextStop = 'depot';
    let nextName;
    let url;

    async function depart() {
        url = `http://localhost:3030/jsonstore/bus/schedule/` + nextStop;

        const request = await fetch(url);
        const data = await request.json();
        
        nextStop = data.next;

        info.textContent = 'Next stop ' + data.name;
        nextName = data.name;




        depBtn.disabled = true;
        arrBtn.disabled = false;

    }

    function arrive() {

        info.textContent = 'Arriving at ' + nextName;

        //change buttions
        depBtn.disabled = false
        arrBtn.disabled = true
    }

    return {
        depart,
        arrive
    };
}

let result = solve();