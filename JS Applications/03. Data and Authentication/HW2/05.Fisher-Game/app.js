function attachEvents() {
    document.getElementsByClassName('load')[0].addEventListener('click', getCatches);

    let token = sessionStorage.getItem('userToken');
    if (token != null) {
        document.getElementById('logout').addEventListener('click', logoutFn);
        loggedIn();

    }else{document.getElementsByClassName('add')[0].disabled=true}

}

attachEvents();

async function getCatches() {
    let url = 'http://localhost:3030/data/catches';
    let response = await fetch(url);
    let data = await response.json();
    // console.log(data);
    await loadCatches(data);
}

async function loadCatches(data) {

    let catches = document.getElementById('catches');
    catches.innerHTML = '';
    let allCatches = [];
    for (const fish of data) {
        let catchDiv = `<div id ="${fish._id}" class="catch">
                    <input type="hidden" id = "ownerId" value="${fish._ownerId}">
                    <label>Angler</label>
                    <input type="text" class="angler" value="${fish.angler}" />
                    <hr>
                    <label>Weight</label>
                    <input type="number" class="weight" value="${fish.weight}" />
                    <hr>
                    <label>Species</label>
                    <input type="text" class="species" value="${fish.species}" />
                    <hr>
                    <label>Location</label>
                    <input type="text" class="location" value="${fish.location}" />
                    <hr>
                    <label>Bait</label>
                    <input type="text" class="bait" value="${fish.bait}" />
                    <hr>
                    <label>Capture Time</label>
                    <input type="number" class="captureTime" value="${fish["captureTime "]}" />
                    <hr>
                    <button disabled class="update">Update</button>
                    <button disabled class="delete">Delete</button>
                </div>`;
        allCatches.push(catchDiv);
    }
    catches.innerHTML = allCatches.join('\n');
    let catchesUpdated = document.getElementById('catches').children;
    let userId = sessionStorage.getItem('userId');
    for (let catchX of catchesUpdated) {
        if (catchX.children[0].value === userId) {
            let updateBtn = catchX.getElementsByClassName('update')[0];
            let deleteBtn = catchX.getElementsByClassName('delete')[0];
            updateBtn.disabled = false;
            deleteBtn.disabled = false;
            updateBtn.addEventListener('click', updateCatch);
            deleteBtn.addEventListener('click', deleteCatch);
        }
    }

}

function loggedIn() {
    let add = document.getElementsByClassName('add')[0];
    add.addEventListener('click', createNewEntry);
    add.disabled = false;

    document.getElementById('login').style.display = 'none';
    document.getElementById('logout').style.display = '';
    getCatches()

}

async function logoutFn() {
    let token = sessionStorage.getItem('userToken');

    await fetch('http://localhost:3030/users/logout', {
        method: 'get',
        headers: {'X-Authorization': token}
    });
    let catches = document.getElementById('catches').children;

    sessionStorage.clear();
    for (const catchX of catches) {
        catchX.getElementsByClassName('update')[0].disabled = true;
        catchX.getElementsByClassName('delete')[0].disabled = true;
    }
    document.getElementById('login').style.display = '';
    document.getElementById('logout').style.display = 'none';
    window.location.pathname = 'index.html';
}

async function createNewEntry(event) {
    let url = 'http://localhost:3030/data/catches';
    let angler = document.getElementById('addForm').children[2].value;
    let weight = Number(document.getElementById('addForm').children[4].value);
    let species = document.getElementById('addForm').children[6].value;
    let location = document.getElementById('addForm').children[8].value;
    let bait = document.getElementById('addForm').children[10].value;
    let captureTime = Number(document.getElementById('addForm').children[12].value);

    if (angler === '' || weight <= 0 || species === '' || location === '' || bait === '' || captureTime <= 0) {
        return alert('•\tangler - string representing the name of the person who caught the fish\n' +
            '•\tweight - floating-point number representing the weight of the fish in kilograms\n' +
            '•\tspecies - string representing the name of the fish species\n' +
            '•\tlocation - string representing the location where the fish was caught\n' +
            '•\tbait - string representing the bait used to catch the fish\n' +
            '•\tcaptureTime - integer number representing the time needed to catch the fish in minutes\n');
    }
    let token = sessionStorage.getItem('userToken');
    await fetch(url, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify({angler, weight, species, location, bait, "captureTime ": captureTime})
    });
    document.getElementById('addForm').children[2].value = '';
    document.getElementById('addForm').children[4].value = '';
    document.getElementById('addForm').children[6].value = '';
    document.getElementById('addForm').children[8].value = '';
    document.getElementById('addForm').children[10].value = '';
    document.getElementById('addForm').children[12].value = '';
    await getCatches();
}

async function updateCatch(event) {
    let angler = event.target.parentElement.getElementsByClassName('angler')[0].value;
    let weight = Number(event.target.parentElement.getElementsByClassName('weight')[0].value);
    let species = event.target.parentElement.getElementsByClassName('species')[0].value;
    let location = event.target.parentElement.getElementsByClassName('location')[0].value;
    let bait = event.target.parentElement.getElementsByClassName('bait')[0].value;
    let captureTime = Number(event.target.parentElement.getElementsByClassName('captureTime')[0].value);

    console.log(angler, weight, species, location, bait, captureTime,);
    if (angler === '' || weight <= 0 || species === '' || location === '' || bait === '' || captureTime <= 0) {
        return alert('•\tangler - string representing the name of the person who caught the fish\n' +
            '•\tweight - floating-point number representing the weight of the fish in kilograms\n' +
            '•\tspecies - string representing the name of the fish species\n' +
            '•\tlocation - string representing the location where the fish was caught\n' +
            '•\tbait - string representing the bait used to catch the fish\n' +
            '•\tcaptureTime - integer number representing the time needed to catch the fish in minutes\n');
    }
    let id = event.target.parentElement.id;
    let token = sessionStorage.getItem('userToken');
    await fetch('http://localhost:3030/data/catches/' + id, {
        method: 'put',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify({angler, weight, species, location, bait, "captureTime ": captureTime})
    });
}

async function deleteCatch(event) {
    let id = event.target.parentElement.id;
    let token = sessionStorage.getItem('userToken');
    await fetch('http://localhost:3030/data/catches/' + id, {
        method: 'delete',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        }
    });
    event.target.parentElement.parentElement.removeChild(event.target.parentElement);
}