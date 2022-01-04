import { getMovieById, showDetails as showDetailsPage } from './details.js'

async function onSubmit(event){
    event.preventDefault();
    const formData = new FormData(event.target);

    const movie = {
        title: formData.get('title'),
        description: formData.get('description'),
        img: formData.get('imageUrl'),
        id: formData.get('hiddenId')
    };
    if(movie.title == ''|| movie.description == ''|| movie.img == ''){
        return alert('All fields are required!')
    }
    const response = await fetch('http://localhost:3030/data/movies/' +  movie.id, {
        method:'put',
        headers:{
            'Content-Type': 'apllication/json',
            'X-Authorization': sessionStorage.getItem('authToken')
        },
        body:JSON.stringify(movie)
    });
    if (response.ok) {
        showDetailsPage(formData.get('hiddenId'));
    }else{
        const error = response.json();
        alert (error.message);
    }
}

async function getOldData(id, section){
    const movie = await getMovieById(id);
    section.querySelectorAll('.form-group input')[0].value = movie.title;
    section.querySelectorAll('.form-group textarea')[0].innerText = movie.description;
    section.querySelectorAll('.form-group input')[1].value = movie.img;
    section.querySelectorAll('.form-group input')[2].value = id;
    section.querySelector('.form-group').appendChild(hiddenId);
}

let main;
let section;

export function setupEdit(mainTarget, sectionTarget){
    main = mainTarget;
    section = sectionTarget;
    section.querySelector('form').addEventListener('submit', onSubmit);
}

export async function showEdit(id){
    main.innerHTML = '';
    main.appendChild(section);
    getOldData(id, section);
}