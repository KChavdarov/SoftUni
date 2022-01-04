document.getElementById('main').addEventListener('click',details);

async function details(ev){
    
    if(ev.target.tagName != 'BUTTON') {
        return
    }
    
    if(ev.target.textContent == 'LESS') {
        ev.target.parentNode.parentNode.getElementsByClassName('extra')[0].style.display = 'none'
        ev.target.textContent = 'MORE'
        return

    }

    const id = ev.target.id;

    // show content for buttion id
    const url = 'http://localhost:3030/jsonstore/advanced/articles/details/'+id
    const response = await fetch(url);
    const data = await response.json();
    ev.target.parentNode.parentNode.getElementsByTagName('p')[0].textContent = data.content
    ev.target.parentNode.parentNode.getElementsByClassName('extra')[0].style.display = 'block'
    ev.target.textContent = 'LESS'

}

async function createAccordion() {
    const urlList = 'http://localhost:3030/jsonstore/advanced/articles/list'

    const response = await fetch(urlList);
    const data = await response.json();
    console.log(data)
    
    data.forEach(obj =>newEl(obj.title, obj._id))
    
}

createAccordion()

 
function newEl(title, idNum) {
    
    // create element
    const element = e('div', {className: 'accordion'},
        e('div',{className: 'head'}, 
            e('span',{}, title),
            e('BUTTON', {className: 'button', id:idNum}, "More")
         ),
        e('div',{className: 'extra'},
            e('p')));   
    
    document.getElementById('main').appendChild(element)
        
}

//create Element Function
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