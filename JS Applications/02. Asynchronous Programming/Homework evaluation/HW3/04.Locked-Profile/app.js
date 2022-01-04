function lockedProfile() {
    const main = document.querySelector('#main')
    main.addEventListener('click', onClick);

    function onClick(ev) {
        if (ev.target.tagName == 'BUTTON') {
            const profile = ev.target.parentNode;
            console.log(profile)          
            
            let isLocked = profile.querySelector('input[type=radio]:checked').value =='lock';
            if (isLocked) {return;}
        
        let div = profile.querySelector('div');
        
        let isVisible = div.className 
        console.log(isVisible)
     
        profile.querySelector('BUTTON').textContent = isVisible=='hidden' ? 'Hide it' : 'Show more'
        div.className = isVisible=='hidden' ? 'visible' : 'hidden'
           
        
        }
    }
    getProfiles()
        
}

async function getProfiles(){
    const url = 'http://localhost:3030/jsonstore/advanced/profiles'
    const response = await fetch(url);
    const data = await response.json();
    Object.values(data).forEach(profile =>createElement(profile))
}

function createElement(profile) {
    const profileElement = e('div', {className: 'profile'},
        e('img',{className:'userIcon', src:"./iconProfile2.png"}),
        e('label',{},'Lock '),
        e('input',{type:'radio',name:profile._id, value:'lock',checked:true}),
        e('label',{},' Unlock '),
        e('input',{type:'radio',name:profile._id, value:'unlock'}),
        e('hr'),
        e('label',{},'Username'),
        e('input',{type:'text', name:'user1Username',value:profile.username, disabled:true,readOnly:true,}),
        e('div',{className:'hidden'}, 
            e('hr'),
            e('label',{},'Email'),
            e('input',{type:'email', value:profile.email, disabled:true,readOnly:true,}),
            e('label',{},'Age'),
            e('input',{type:'email', value:profile.age,disabled:true,readOnly:true,})),
        e('button',{},'Show more')
        
        )
    
    document.getElementById('main').appendChild(profileElement)
}


function e(type, attributes, ...content) {
    const result = document.createElement(type);

    for (let [attr, value] of Object.entries(attributes || {})) {
        if (attr.substring(0, 2) == 'on') {
            result.addEventListener(attr.substring(2).toLocaleLowerCase(), value);
        } else {
            result[attr] = value;
        }
    }

    content = content.reduce((a, c) => a.concat(Array.isArray(c) ? c : [c]), []);

    content.forEach(e => {
        if (typeof e == 'string' || typeof e == 'number') {
            const node = document.createTextNode(e);
            result.appendChild(node);
        } else {
            result.appendChild(e);
        }
    });

    return result;
}