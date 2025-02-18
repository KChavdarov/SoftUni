function solve() {
    let url = 'http://localhost:3030/jsonstore/bus/schedule/';
    const info = document.querySelector('span.info');
    const departBtn = document.getElementById('depart');
    const arriveBtn = document.getElementById('arrive');

    let stop = {
        next: 'depot'
    };

    async function depart() {
        try {
            let response = await fetch(url + stop.next);
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            stop = await response.json();
            info.textContent = `Next stop ${stop.name}`;
            departBtn.disabled = true;
            arriveBtn.disabled = false;
        } catch (err) {
            console.error(err.statusText);
        }
    }

    function arrive() {
        info.textContent = `Arriving at ${stop.name}`;
        departBtn.disabled = false;
        arriveBtn.disabled = true;

    }


    return {
        depart,
        arrive
    };

}

let result = solve();




// function solve() {
//     const info = document.querySelector('span.info');
//     const departBtn = document.getElementById('depart');
//     const arriveBtn = document.getElementById('arrive');

//     let stop = {
//         next: 'depot'
//     };

//     async function depart() {
//         try {
//             let url = 'http://localhost:3030/jsonstore/bus/schedule/' + stop.next;
//             let response = await fetch(url);
//             let nextStop = await response.json();
//             stop = nextStop;
//             info.textContent = `Next stop ${stop.name}`;
//             arriveBtn.disabled = false;
//             departBtn.disabled = true;
//         } catch (err) {
//             info.textContent = 'Error';
//             arriveBtn.disabled = true;
//             departBtn.disabled = true;
//         }
//     }

//     function arrive() {
//         info.textContent = `Arriving at ${stop.name}`;
//         arriveBtn.disabled = true;
//         departBtn.disabled = false;
//     }


//     return {
//         depart,
//         arrive
//     };
// }

// let result = solve();