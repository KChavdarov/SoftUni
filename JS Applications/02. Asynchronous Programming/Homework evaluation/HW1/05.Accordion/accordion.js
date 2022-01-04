window.addEventListener('load', loadPosts)

function toggle(e) {
    let button = e.target;
    let div = e.target.parentNode.parentNode.querySelector('#extra');

    div.style.display = div.style.display == '' || div.style.display == 'none' ? 'block' : 'none'
    button.textContent = button.textContent == 'Less' ? 'More' : 'Less'
}

async function loadPosts() {
    let sections = document.getElementsByTagName('section')[0];

    const url = `http://localhost:3030/jsonstore/advanced/articles/list`
    let response = await fetch(url)
    let data = await response.json();

    for (const element of data) {
        const result = document.createElement('div')
        result.setAttribute('id','accordion')

        let head = document.createElement('div');
        head.className = 'head';
        head.textContent = element.title;

        let span = document.createElement('span');
        span.className = 'button'
        span.textContent = 'More'
        span.addEventListener('click', toggle);
        head.appendChild(span)

        let divExtra = document.createElement('div');
        divExtra.setAttribute('id','extra')
        divExtra.style.display = 'none'
        divExtra.style.textcolor = 'red'

        let p = document.createElement('p');
        let info = await getInfo(element._id);
        p.textContent = info;
        divExtra.appendChild(p);

        result.appendChild(head);
        result.appendChild(divExtra);

        await sections.appendChild(result);
    }

}
async function getInfo(id) {
    let url = `http://localhost:3030/jsonstore/advanced/articles/details/${id}`
    let response = await fetch(url);
    let data = await response.json();

    return data.content;
}