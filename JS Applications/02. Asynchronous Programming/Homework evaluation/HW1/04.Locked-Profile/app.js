async function lockedProfile() {
    //load profiles
    const url = `http://localhost:3030/jsonstore/advanced/profiles`;
    let response = await fetch(url);
    let data = await response.json();
    await loadProfiles(Object.values(data))
}
const main = document.getElementById('main')
function loadProfiles(profiles) {
    for (const profile of profiles) {
        //div
        let div = document.createElement('div');
        div.className = 'profile';

        //img
        let img = document.createElement('img');
        img.className = 'userIcon';
        img.src = './iconProfile2.png' //I needed a reliable source thats why i it this way :)

        div.appendChild(img);
        //label
        let lockLabel = document.createElement('label');
        lockLabel.textContent = 'Lock';

        div.appendChild(lockLabel);
        //input
        let lockInput = document.createElement('input')
        lockInput.type = 'radio';
        lockInput.name = profile.username;
        lockInput.value = 'lock';
        lockInput.checked = true

        div.appendChild(lockInput);
        //label
        let ublockLabel = document.createElement('label');
        ublockLabel.textContent = 'Unlock';

        div.appendChild(ublockLabel)
        //input
        let unlockInput = document.createElement('input')
        unlockInput.type = 'radio';
        unlockInput.name = profile.username;
        unlockInput.value = 'unlock';

        div.appendChild(unlockInput)
        //br
        let br = document.createElement('br');

        div.appendChild(br)
        //hr
        let hr = document.createElement('hr');

        div.appendChild(hr)
        //label
        let userLabel = document.createElement('label');
        userLabel.textContent = 'Username'

        div.appendChild(userLabel)
        //input
        let userInput = document.createElement('input');
        userInput.type = 'text';
        userInput.name = profile.username
        userInput.value = profile.username
        userInput.disabled = true
        userInput.readonly = true

        div.appendChild(userInput)
        //div
        let infoDiv = document.createElement('div');
        infoDiv.setAttribute('id', 'user1HiddenFields')

        //hr
        let hr2 = document.createElement('hr');

        infoDiv.appendChild(hr2)
        //label
        let emailLabel = document.createElement('label');
        emailLabel.textContent = 'Email:';

        infoDiv.appendChild(emailLabel);
        //input
        let emailInput = document.createElement('input');
        emailInput.type = 'text';
        emailInput.name = profile.email
        emailInput.value = profile.email
        emailInput.disabled = true
        emailInput.readonly = true

        infoDiv.appendChild(emailInput);
        //label
        let ageLabel = document.createElement('label');
        ageLabel.textContent = 'Age:';

        infoDiv.appendChild(ageLabel);
        //input
        let ageInput = document.createElement('input');
        ageInput.type = 'text';
        ageInput.name = profile.age
        ageInput.value = profile.age
        ageInput.disabled = true
        ageInput.readonly = true

        infoDiv.appendChild(ageInput)
        //button
        let button = document.createElement('button');
        button.textContent = 'Show more'
        button.addEventListener('click', toggle)

        div.appendChild(infoDiv)
        div.appendChild(button)
        main.appendChild(div)
    }
}
async function toggle(e) {
    if (e.target.tagName == 'BUTTON') {
        const profile = e.target.parentNode;
        const isLocked = profile
            .querySelector('input[type=radio]:checked').value == 'lock';

        if (isLocked) {
            return;
        }

        let div = profile.querySelector('div');
        let isVisible = div.style.display == 'block';

        div.style.display = isVisible ? 'none' : 'block'

        e.target.textContent = !isVisible ? 'Hide it' : 'Show more'
    }
}